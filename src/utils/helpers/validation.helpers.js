export const returnErrorMessage = (errors, handle) => {
    if(errors[`${handle}`].type === "required") return `${handle} is required!`;
    if(errors[`${handle}`].type === "minLength") return `${handle} is too short!`;
    if(errors[`${handle}`].type === "maxLength") return `${handle} is too long!`;
    if(errors[`${handle}`].type === "pattern") return`"${handle} is not correct!`;
    if(errors[`${handle}`].type === "validate" && handle === "confirmedCheckbox") return `This checkbox is required!`;
    if(errors[`${handle}`].type === "validate") return `Passwords is not the same!`;
    if(handle === "isExist") return `This email already exist!`;
}

export const emailValidate = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
