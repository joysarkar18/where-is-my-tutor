const baseUrl = "http://localhost:3000";
//Login signup urls
export const loginUrl = `${baseUrl}/auth/log-in`;
export const signupUrl = `${baseUrl}/auth/sign-up`;
//Forgot password urls
export const requestOtpUrl = `${baseUrl}/forgot-password/request-otp`;
export const verifyOtpUrl = `${baseUrl}/forgot-password/check-otp`;
export const resetPasswordUrl = `${baseUrl}/forgot-password/reset-password`;

//Upload file urls
export const uploadURL = `${baseUrl}/upload`;

//get all subjects

export const getAllSubjectsUrl = `${baseUrl}/subjects/all-subjects`;
