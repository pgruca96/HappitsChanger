export const prepareURL = (text) => {
    const isEmptySpaceExist = text.indexOf(" ");
    if(isEmptySpaceExist !== -1) 
        return text = text.slice(0, isEmptySpaceExist).toLowerCase();
    else 
        return text.toLowerCase();
};