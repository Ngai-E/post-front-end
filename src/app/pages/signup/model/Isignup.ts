export interface Registration {
    fName: string,
    lName: string,
    email: string,
    password: string,
    confirmPassword: string,
    termsAndConditions: boolean,
}

export interface RegistrationConfirmation {
    success: string
}