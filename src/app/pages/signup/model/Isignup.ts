interface Registration {
    fName: string,
    lName: string,
    email: string,
    password: string,
    confirmPassword: string,
    termsAndConditions: boolean,
}

interface RegistrationConfirmation {
    success: string
}