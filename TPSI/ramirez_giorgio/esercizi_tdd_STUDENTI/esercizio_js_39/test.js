import { reverse } from "./es_39.js";

describe("ESERCIZIO 39", () => {
    test('TEST 01', () => {
        expect(reverse([1, 2, 3]).toString()).toBe([6, 3, 2, 1].toString());
    });

    test('TEST 02', () => {
        expect(reverse([11, 2, 31, 3, 7, 4]).toString()).toBe([58, 4, 7, 3, 31, 2, 11].toString());
    });

    test('TEST 03', () => {
        expect(reverse([1, 1, 1, 1, 1, 1, 1, 1]).toString()).toBe([8, 1, 1, 1, 1, 1, 1, 1, 1].toString());
    });

    test('TEST 04', () => {
        expect(reverse([1, 1, 1, -1, 1, -1, 1, -1]).toString()).toBe([2, -1, 1, -1, 1, -1, 1, 1, 1].toString());
    });

    test('TEST 05', () => {
        let array = Array.from(Array(1024).keys())
        let result = Array.from(array).reverse();
        result.unshift(523776);
        expect(result.toString()).toBe(reverse(array).toString());
    });
});
