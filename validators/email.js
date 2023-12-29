export const validateEmail = (email) => {
    let regexEmail = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    if (regexEmail.test(email)) {
        return true;
    }
    return false;
}


