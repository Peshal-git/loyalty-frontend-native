import React, { forwardRef, useCallback, useEffect, useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  Modal,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import CountryFlag from "react-native-country-flag";
import rawCountries from "world-countries";
import { getCountryCallingCode, isSupportedCountry } from "libphonenumber-js";
import tw from "twrnc";

const countries = rawCountries.reduce<
  { code: string; name: string; dialCode: string }[]
>((acc, country) => {
  if (!country.idd.root || !country.cca2) return acc;
  const countryCode = country.cca2 as keyof typeof getCountryCallingCode;
  if (!isSupportedCountry(countryCode)) return acc;

  acc.push({
    code: country.cca2,
    name: country.name.common,
    dialCode: `+${getCountryCallingCode(countryCode)}`,
  });
  return acc;
}, []);

interface PhoneInputProps extends React.ComponentProps<typeof TextInput> {
  value?: string;
  defaultCountry?: string;
  international?: boolean;
}

export const PhoneInput = forwardRef<TextInput, PhoneInputProps>(
  (
    {
      value,
      onChangeText,
      onBlur,
      placeholder,
      defaultCountry,
      style,
      editable = true,
      ...props
    },
    ref
  ) => {
    const [selectedCountry, setSelectedCountry] = useState(
      countries.find((country) => country.code === defaultCountry) ||
        countries[0]
    );
    const [inputValue, setInputValue] = useState(
      value ? value.replace(selectedCountry.dialCode, "") : ""
    );
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const dialingCode = selectedCountry.dialCode;

    useEffect(() => {
      if (value) {
        const matchingCountry = countries.find((country) =>
          value.startsWith(country.dialCode)
        );
        if (matchingCountry && matchingCountry.code !== selectedCountry.code) {
          setSelectedCountry(matchingCountry);
          setInputValue(value.replace(matchingCountry.dialCode, ""));
        } else if (!matchingCountry) {
          setInputValue(value.replace(dialingCode, ""));
        }
      } else {
        setInputValue("");
      }
    }, [value, dialingCode]);

    const handleInputChange = useCallback(
      (text: string) => {
        setInputValue(text);
        onChangeText?.(`${dialingCode}${text}`);
      },
      [dialingCode, onChangeText]
    );

    const handleCountrySelect = useCallback(
      (country: (typeof countries)[0]) => {
        setSelectedCountry(country);
        setIsModalOpen(false);
        setSearchQuery("");
        onChangeText?.(`${country.dialCode}${inputValue}`);
      },
      [inputValue, onChangeText]
    );

    const filteredCountries = searchQuery
      ? countries.filter((country) =>
          country.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : countries;

    const renderCountryItem = ({ item }: { item: (typeof countries)[0] }) => (
      <TouchableOpacity
        style={tw`p-2 flex-row items-center justify-between`}
        onPress={() => handleCountrySelect(item)}
      >
        <View style={tw`flex-row items-center gap-2`}>
          <CountryFlag isoCode={item.code} size={12} />
          <Text style={tw`text-base text-black dark:text-white`}>
            {item.name}
          </Text>
        </View>
        <Text style={tw`text-gray-500`}>{item.dialCode}</Text>
      </TouchableOpacity>
    );

    return (
      <View style={tw`flex-row items-center w-full`}>
        <TouchableOpacity
          className={`flex flex-row justify-center items-center h-14 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-l-md ${
            !editable ? "opacity-50" : ""
          }`}
          onPress={() => editable && setIsModalOpen(true)}
          disabled={!editable}
        >
          <CountryFlag isoCode={selectedCountry.code} size={14} />
          <Text
            className={`ml-2 text-center text-base text-black dark:text-white`}
          >
            {selectedCountry.dialCode}
          </Text>
        </TouchableOpacity>

        <Modal
          visible={isModalOpen}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setIsModalOpen(false)}
        >
          <TouchableWithoutFeedback onPress={() => setIsModalOpen(false)}>
            <SafeAreaView style={tw`flex-1 bg-black/50`}>
              <TouchableWithoutFeedback onPress={() => {}}>
                <View
                  style={tw`bg-white dark:bg-gray-800 m-4 mt-16 rounded-lg p-4 flex-1 `}
                >
                  <TextInput
                    placeholder="Search country..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    style={tw`p-2 border-b border-gray-300 dark:border-gray-600 text-black dark:text-white mb-2`}
                  />
                  <FlatList
                    data={filteredCountries}
                    renderItem={renderCountryItem}
                    keyExtractor={(item) => item.code}
                    style={tw`flex-1`}
                  />
                </View>
              </TouchableWithoutFeedback>
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </Modal>

        <View
          className={`flex-1 h-14 justify-center px-4 bg-white dark:bg-gray-800 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-md `}
        >
          <TextInput
            ref={ref}
            className={`text-black dark:text-white ${
              !editable ? "opacity-50" : ""
            }`}
            placeholder={placeholder || "Enter phone number"}
            placeholderTextColor={tw.color("gray-500")}
            value={inputValue}
            onChangeText={handleInputChange}
            onBlur={onBlur}
            keyboardType="phone-pad"
            editable={editable}
            {...props}
          />
        </View>
        <TextInput
          style={tw`hidden`}
          value={`${selectedCountry.dialCode}${inputValue}`}
          onChangeText={onChangeText}
          editable={false}
          {...props}
        />
      </View>
    );
  }
);

PhoneInput.displayName = "PhoneInput";
