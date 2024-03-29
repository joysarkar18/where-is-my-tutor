const baseUrl = "http://localhost:3000";
//Login signup urls
export const loginUrl = `${baseUrl}/auth/log-in`;
export const signupUrl = `${baseUrl}/auth/sign-up`;
//Forgot password urls
export const requestOtpUrl = `${baseUrl}/forgot-password/request-otp`;
export const verifyOtpUrl = `${baseUrl}/forgot-password/check-otp`;
export const resetPasswordUrl = `${baseUrl}/forgot-password/reset-password`;

//submit details url
export const submitStudentDetailsUrl = `${baseUrl}/update-details/student-details`;
export const submitTeacherDetailsUrl = `${baseUrl}/update-details/teacher-details`;

//Upload file urls
export const uploadURL = `${baseUrl}/upload`;

//get all subjects

export const getAllSubjectsUrl = `${baseUrl}/subjects/all-subjects`;
