import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Platform,
  TextInput,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format, isValid } from "date-fns";
import Feather from "@expo/vector-icons/Feather";
import { ControllerRenderProps } from "react-hook-form";

type DobDatePickerProps = {
  field: ControllerRenderProps<any, string>;
};

const DobDatePicker = ({ field }: DobDatePickerProps) => {
  const [open, setOpen] = useState(false);
  const [internalDate, setInternalDate] = useState<Date | null>(() => {
    if (!field.value) return null;
    try {
      const date = new Date(field.value);
      return isValid(date) ? date : null;
    } catch {
      return null;
    }
  });
  const [renderKey, setRenderKey] = useState(0);

  useEffect(() => {
    if (!field.value) {
      setInternalDate(null);
    } else {
      try {
        const date = new Date(field.value);
        if (isValid(date)) {
          setInternalDate(date);
          setRenderKey((prev) => prev + 1); // Force re-render
        } else {
          setInternalDate(null);
        }
      } catch {
        setInternalDate(null);
      }
    }
  }, [field.value]);

  const handleDateChange = useCallback(
    (event: any, selectedDate?: Date) => {
      if (Platform.OS === "android") {
        setOpen(false);
      }
      if (selectedDate && isValid(selectedDate)) {
        const formattedDate = selectedDate.toISOString();
        field.onChange(formattedDate);
        setInternalDate(selectedDate);
      }
    },
    [field]
  );

  const openDatePicker = () => {
    setOpen(true);
  };

  const closeDatePicker = () => {
    setOpen(false);
  };

  const formattedValue =
    internalDate && isValid(internalDate) ? format(internalDate, "PPP") : "";

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDatePicker} style={styles.inputContainer}>
        <TextInput
          key={`text-input-${renderKey}`}
          style={styles.input}
          value={formattedValue}
          placeholder="Pick a date"
          placeholderTextColor="#6b7280"
          editable={false}
          selectTextOnFocus={false} // Alternative to pointerEvents
        />
        <Feather name="calendar" size={14} color="black" />
      </TouchableOpacity>

      {open && (
        <>
          {Platform.OS === "ios" ? (
            <Modal
              transparent={true}
              animationType="slide"
              visible={open}
              onRequestClose={closeDatePicker}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <DateTimePicker
                    value={
                      internalDate && isValid(internalDate)
                        ? internalDate
                        : new Date()
                    }
                    mode="date"
                    display="spinner"
                    maximumDate={new Date()}
                    minimumDate={new Date("1900-01-01")}
                    onChange={handleDateChange}
                  />
                  <TouchableOpacity
                    onPress={closeDatePicker}
                    style={styles.doneButton}
                  >
                    <Text style={styles.doneButtonText}>Done</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          ) : (
            <DateTimePicker
              value={
                internalDate && isValid(internalDate)
                  ? internalDate
                  : new Date()
              }
              mode="date"
              display="default"
              maximumDate={new Date()}
              minimumDate={new Date("1900-01-01")}
              onChange={handleDateChange}
            />
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 6,
    backgroundColor: "#ffffff",
    paddingHorizontal: 12,
    paddingVertical: 8,
    height: 40,
    overflow: "visible",
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#111827",
    backgroundColor: "#ffffff",
    padding: 0,
    minWidth: 200,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  doneButton: {
    marginTop: 16,
    paddingVertical: 12,
    alignItems: "center",
    backgroundColor: "#2563eb",
    borderRadius: 6,
  },
  doneButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default DobDatePicker;
