# DefaultApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addTransaction**](#addtransaction) | **POST** /admin/addTransactionById | |
|[**createAdmin**](#createadmin) | **POST** /auth/createAdmin | |
|[**createGoogleWalletPass**](#creategooglewalletpass) | **POST** /member/createGoogleWalletPass | |
|[**createMember**](#createmember) | **POST** /auth/createMember | |
|[**downloadOwnPointsWallet**](#downloadownpointswallet) | **GET** /member/downloadPointsWallet | |
|[**downloadPointsWallet**](#downloadpointswallet) | **GET** /admin/downloadPointsWallet/{memberId} | |
|[**downloadRedemptions**](#downloadredemptions) | **GET** /member/downloadRedemptions | |
|[**downloadTransactions**](#downloadtransactions) | **GET** /member/downloadTransactions | |
|[**flywireEndpointsTest**](#flywireendpointstest) | **GET** /auth/flywire-endpoints-test | |
|[**flywireTest**](#flywiretest) | **POST** /auth/flywire-test | |
|[**forgotPassword**](#forgotpassword) | **POST** /auth/forgotPassword | |
|[**getActiveRewards**](#getactiverewards) | **GET** /getActiveRewards | |
|[**getAdmins**](#getadmins) | **GET** /admin/getAdmins | |
|[**getAllRewards**](#getallrewards) | **GET** /admin/getAllRewards | |
|[**getMemberInfo**](#getmemberinfo) | **GET** /admin/getMemberInfo/{memberId} | |
|[**getMemberRedemptions**](#getmemberredemptions) | **GET** /member/getRedemptions | |
|[**getMemberTransactions**](#getmembertransactions) | **GET** /member/getTransactions | |
|[**getMembers**](#getmembers) | **GET** /admin/getMembers | |
|[**getOrg**](#getorg) | **GET** /getOrg | |
|[**getProfile**](#getprofile) | **GET** /member/profile | |
|[**getRedeemableRewards**](#getredeemablerewards) | **GET** /admin/getRedeemableRewards | |
|[**getRedemption**](#getredemption) | **GET** /admin/getRedemptionsById | |
|[**getRewards**](#getrewards) | **GET** /member/getRewards | |
|[**getSpendingTypes**](#getspendingtypes) | **GET** /admin/getSpendingTypes | |
|[**getTierInfo**](#gettierinfo) | **GET** /getTierInfo | |
|[**getTransaction**](#gettransaction) | **GET** /admin/getTransactionsById | |
|[**getUser**](#getuser) | **GET** /auth/getUser | |
|[**googleLogin**](#googlelogin) | **POST** /auth/google | |
|[**lineLogin**](#linelogin) | **POST** /auth/line | |
|[**login**](#login) | **POST** /auth/login | |
|[**logout**](#logout) | **POST** /auth/logout | |
|[**redeemReward**](#redeemreward) | **POST** /admin/redeemRewardById | |
|[**refresh**](#refresh) | **POST** /auth/refresh | |
|[**registerAdditionalInfo**](#registeradditionalinfo) | **POST** /auth/additional-info | |
|[**signup**](#signup) | **POST** /auth/signup | |
|[**updateMember**](#updatemember) | **PATCH** /admin/updateMember/{memberId} | |
|[**verifyToken**](#verifytoken) | **POST** /auth/verifyToken | |

# **addTransaction**
> AppResponse addTransaction(addTransactionRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    AddTransactionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let memberId: string; // (default to undefined)
let addTransactionRequest: AddTransactionRequest; //

const { status, data } = await apiInstance.addTransaction(
    memberId,
    addTransactionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addTransactionRequest** | **AddTransactionRequest**|  | |
| **memberId** | [**string**] |  | defaults to undefined|


### Return type

**AppResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createAdmin**
> AppResponseEmailString createAdmin(createUserDTO)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateUserDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createUserDTO: CreateUserDTO; //

const { status, data } = await apiInstance.createAdmin(
    createUserDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createUserDTO** | **CreateUserDTO**|  | |


### Return type

**AppResponseEmailString**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createGoogleWalletPass**
> AppResponseString createGoogleWalletPass()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.createGoogleWalletPass();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AppResponseString**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createMember**
> AppResponseEmailString createMember(createUserDTO)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateUserDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createUserDTO: CreateUserDTO; //

const { status, data } = await apiInstance.createMember(
    createUserDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createUserDTO** | **CreateUserDTO**|  | |


### Return type

**AppResponseEmailString**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadOwnPointsWallet**
> string downloadOwnPointsWallet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.downloadOwnPointsWallet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadPointsWallet**
> string downloadPointsWallet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let memberId: string; // (default to undefined)

const { status, data } = await apiInstance.downloadPointsWallet(
    memberId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **memberId** | [**string**] |  | defaults to undefined|


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadRedemptions**
> string downloadRedemptions()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.downloadRedemptions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadTransactions**
> string downloadTransactions()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.downloadTransactions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **flywireEndpointsTest**
> any flywireEndpointsTest()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.flywireEndpointsTest();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **flywireTest**
> FlywireTest200Response flywireTest()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.flywireTest();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**FlywireTest200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forgotPassword**
> AppResponse forgotPassword(forgotPasswordDTO)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ForgotPasswordDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let forgotPasswordDTO: ForgotPasswordDTO; //

const { status, data } = await apiInstance.forgotPassword(
    forgotPasswordDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **forgotPasswordDTO** | **ForgotPasswordDTO**|  | |


### Return type

**AppResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getActiveRewards**
> AppResponseActiveRewardsList getActiveRewards()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getActiveRewards();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AppResponseActiveRewardsList**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAdmins**
> AppResponseAdminsDataArray getAdmins()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getAdmins();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AppResponseAdminsDataArray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllRewards**
> AppResponseAllRewardsList getAllRewards()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getAllRewards();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AppResponseAllRewardsList**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMemberInfo**
> AppResponseMemberInfo getMemberInfo()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let memberId: string; // (default to undefined)

const { status, data } = await apiInstance.getMemberInfo(
    memberId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **memberId** | [**string**] |  | defaults to undefined|


### Return type

**AppResponseMemberInfo**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMemberRedemptions**
> AppResponseRedemptionDataArray getMemberRedemptions()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getMemberRedemptions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AppResponseRedemptionDataArray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMemberTransactions**
> AppResponseTransactionDataArray getMemberTransactions()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getMemberTransactions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AppResponseTransactionDataArray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMembers**
> AppResponseMembersDataArray getMembers()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getMembers();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AppResponseMembersDataArray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrg**
> AppResponseOrgInfo getOrg()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getOrg();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AppResponseOrgInfo**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProfile**
> AppResponseMemberSelfInfo getProfile()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getProfile();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AppResponseMemberSelfInfo**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRedeemableRewards**
> AppResponseRedeemableRewardsList getRedeemableRewards()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let memberId: string; // (default to undefined)

const { status, data } = await apiInstance.getRedeemableRewards(
    memberId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **memberId** | [**string**] |  | defaults to undefined|


### Return type

**AppResponseRedeemableRewardsList**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRedemption**
> AppResponseRedemptionDataArray getRedemption()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let memberId: string; // (default to undefined)

const { status, data } = await apiInstance.getRedemption(
    memberId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **memberId** | [**string**] |  | defaults to undefined|


### Return type

**AppResponseRedemptionDataArray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRewards**
> AppResponseRedeemableRewardsList getRewards()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getRewards();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AppResponseRedeemableRewardsList**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSpendingTypes**
> AppResponseSpendingTypesArray getSpendingTypes()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getSpendingTypes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AppResponseSpendingTypesArray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTierInfo**
> AppResponseTierInfoArray getTierInfo()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getTierInfo();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AppResponseTierInfoArray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTransaction**
> AppResponseTransactionDataArray getTransaction()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let memberId: string; // (default to undefined)

const { status, data } = await apiInstance.getTransaction(
    memberId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **memberId** | [**string**] |  | defaults to undefined|


### Return type

**AppResponseTransactionDataArray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUser**
> AppResponseUserResponseData getUser()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getUser();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AppResponseUserResponseData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **googleLogin**
> AppResponseUserLoginResponseData googleLogin()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let code: string; // (default to undefined)

const { status, data } = await apiInstance.googleLogin(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] |  | defaults to undefined|


### Return type

**AppResponseUserLoginResponseData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lineLogin**
> AppResponseUserLoginResponseData lineLogin(lineLoginRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    LineLoginRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let lineLoginRequest: LineLoginRequest; //

const { status, data } = await apiInstance.lineLogin(
    lineLoginRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lineLoginRequest** | **LineLoginRequest**|  | |


### Return type

**AppResponseUserLoginResponseData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **login**
> AppResponseUserLoginResponseData login(userLoginDTO)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UserLoginDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userLoginDTO: UserLoginDTO; //

const { status, data } = await apiInstance.login(
    userLoginDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userLoginDTO** | **UserLoginDTO**|  | |


### Return type

**AppResponseUserLoginResponseData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logout**
> AppResponse logout()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.logout();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AppResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **redeemReward**
> AppResponseUnknown redeemReward(redeemRewardRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    RedeemRewardRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let memberId: string; // (default to undefined)
let redeemRewardRequest: RedeemRewardRequest; //

const { status, data } = await apiInstance.redeemReward(
    memberId,
    redeemRewardRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **redeemRewardRequest** | **RedeemRewardRequest**|  | |
| **memberId** | [**string**] |  | defaults to undefined|


### Return type

**AppResponseUnknown**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **refresh**
> AppResponseUserLoginResponseData refresh()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.refresh();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AppResponseUserLoginResponseData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registerAdditionalInfo**
> AppResponse registerAdditionalInfo(additionalInfoRegisterDTO)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    AdditionalInfoRegisterDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let additionalInfoRegisterDTO: AdditionalInfoRegisterDTO; //

const { status, data } = await apiInstance.registerAdditionalInfo(
    additionalInfoRegisterDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **additionalInfoRegisterDTO** | **AdditionalInfoRegisterDTO**|  | |


### Return type

**AppResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signup**
> AppResponseUserLoginResponseData signup(userRegisterDTO)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UserRegisterDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userRegisterDTO: UserRegisterDTO; //

const { status, data } = await apiInstance.signup(
    userRegisterDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userRegisterDTO** | **UserRegisterDTO**|  | |


### Return type

**AppResponseUserLoginResponseData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateMember**
> LoyaltyUser updateMember(userUpdateDTO)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UserUpdateDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let memberId: string; // (default to undefined)
let userUpdateDTO: UserUpdateDTO; //

const { status, data } = await apiInstance.updateMember(
    memberId,
    userUpdateDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userUpdateDTO** | **UserUpdateDTO**|  | |
| **memberId** | [**string**] |  | defaults to undefined|


### Return type

**LoyaltyUser**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyToken**
> AppResponseUserLoginResponseData verifyToken(verifyTokenDTO)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    VerifyTokenDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let verifyTokenDTO: VerifyTokenDTO; //

const { status, data } = await apiInstance.verifyToken(
    verifyTokenDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verifyTokenDTO** | **VerifyTokenDTO**|  | |


### Return type

**AppResponseUserLoginResponseData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

