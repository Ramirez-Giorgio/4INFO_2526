export const unique_characters = (str) => {
    let strA = Array.from(new Set(str))
    return strA.join("")
}
