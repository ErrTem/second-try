export const required = (value) => {
    if (value) return undefined
    return 'field is required'
}
export const maxLengthCreator = (maxLength) => (value) =>  {
    if (value && value.length > maxLength) return `max length is ${maxLength} symbols`
    return undefined
}
export const maxLength30 = (value) => {
    if (value && value.length > 30) return 'max length is 30 symbols'
    return undefined
}