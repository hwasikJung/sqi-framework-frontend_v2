/**
 * API 응답코드 정의
 */
const ApiResponseCode = {
  // 성공
  SUCCESS: 'SQI0000',

  // 실패
  FAILURE: 'SQI0001',

  // 데이터가 없습니다.
  DATA_NOT_FOUND: 'SQI0002',

  // 중복된 데이터가 존재합니다.
  DUPLICATE_DATA_FOUND: 'SQI0003',

  // 수정 요청 대상 데이터가 존재하지 않습니다.
  DATA_TO_BE_MODIFIED_NOT_FOUND: 'SQI0004',

  // 삭제 요청 대상 데이터가 존재하지 않습니다.
  DATA_TO_BE_DELETED_NOT_FOUND: 'SQI0005',

  // 등록중 오류가 발생하였습니다.
  REGISTRATION_ERROR_OCCURRED: 'SQI0006',

  // 수정중 오류가 발생하였습니다.
  MODIFIED_ERROR_OCCURRED: 'SQI0007',

  // 삭제중 오류가 발생하였습니다.
  DELETED_ERROR_OCCURRED: 'SQI0008',

  // 값이 비어있습니다.
  VALUE_IS_EMPTY: 'SQI0009',

  // 사용자 정보가 존재하지 않습니다.
  USER_INFO_NOT_FOUND: 'SQI0010',

  // 신규 입력 비밀번호와 비밀번호 확인값이 일치하지 않습니다.
  PASSWORD_CONFIRMATION_MISMATCH: 'SQI0011',

  // 사용자 아이디 또는 비밀번호가 잘못 입력되었습니다.
  INCORRECT_USERNAME_OR_PASSWORD: 'SQI1000',

  // 요청에 대한 권한이 없습니다.
  // NO_AUTHORIZATION_FOR_THE_REQUEST: 'SQI1001',

  // 비밀번호가 만료 되었습니다.
  PASSWORD_EXPIRED: 'SQI1002',

  // 사용자의 계정이 승인대기 상태 입니다. 관리자에게 문의하세요.
  USER_ACCOUNT_AWAITING_APPROVAL: 'SQI1003',

  // 사용자의 계정이 잠김 상태 입니다. 비밀번호 재 설정후 로그인 하세요
  USER_ACCOUNT_LOCKED: 'SQI1004',

  // 사용자의 계정이 승인거부 상태 입니다. 관리자에게 문의하세요.
  USER_ACCOUNT_DISAPPROVED: 'SQI1005',

  // 사용자의 계정이 중지 상태 입니다. 관리자에게 문의하세요.
  USER_ACCOUNT_SUSPENDED: 'SQI1006',

  // Access token이 누락되었습니다.
  ACCESS_TOKEN_MISSING: 'SQI2000',

  // Access token이 만료되었습니다.
  ACCESS_TOKEN_EXPIRED: 'SQI2001',

  // Access token의 형식이 잘못되었습니다.
  INCORRECT_ACCESS_TOKEN_FORMAT: 'SQI2002',

  // Refresh token이 누락되었습니다.
  REFRESH_TOKEN_MISSING: 'SQI2010',

  // Refresh token이 만료되었습니다.
  REFRESH_TOKEN_EXPIRED: 'SQI2011',

  // Refresh token의 형식이 잘못되었습니다.
  INCORRECT_REFRESH_TOKEN_FORMAT: 'SQI2012',

  // 인증 정보가 부족하여 요청이 거부 되었습니다.[로그인 필요]
  INSUFFICIENT_AUTHENTICATION_INFORMATION: 'SQI3000',

  // 해당 요청에 대한 권한이 없습니다.
  NO_AUTHORIZATION_FOR_THE_REQUEST: 'SQI3001',

  // 하위 메뉴가 존재하는 메뉴는 메뉴 기능을 등록할수 없습니다.
  CANNOT_REGISTER_MENU_FUNCTIONS_WITH_SUBMENUS: 'SQI7200',

  // 필수 입력 파라미터 값이 누락되었습니다.
  MISSING_REQUIRED_INPUT_PARAMETER: 'SQI8000',

  // 요청 처리중 DB 오류 발생
  DB_ERROR_OCCURRED: 'SQI9000',

  // API 호출 URL 정보가 올바르지 않습니다.
  INVALID_API_CALL_URL: 'SQI9001',

  // 예상하지 못한 오류가 발생하였습니다. 관리자에게 문의하세요.
  UNEXPECTED_ERROR_OCCURRED: 'SQI9002',
};

export default ApiResponseCode;
