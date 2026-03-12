export const gen_arr = (len) => {
    const originalArray = Array.from({ length: len }, () => Math.floor(Math.random() * 101));

    const reversedArray = [...originalArray].reverse();

    console.log("Array Originale:", originalArray);
    console.log("Array Invertito:", reversedArray);

    return originalArray;
}