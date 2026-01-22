import { TriangoloEquilatero, Quadrato, Pentagono, Esagono, Ettagono, Ottagono  } from "./es_71.js";

describe("ESERCIZIO 71", () => {
    test('Triangolo area', () => {
        expect(Math.round((new TriangoloEquilatero(15)).area())).toBe(97);
    });

    test('Triangolo perimetro', () => {
        expect((new TriangoloEquilatero(15)).perimetro()).toBe(45);
    });

    test('Quadrato area', () => {
        expect((new Quadrato(10)).area()).toBe(100);
    }); 

     test('Quadrato perimetro', () => {
        expect((new Quadrato(10)).perimetro()).toBe(40);
    });    

    test('Pentagono area', () => {
        expect(Math.round((new Pentagono(21)).area())).toBe(759);
    });

    test('Pentagono perimetro', () => {
        expect((new Pentagono(21)).perimetro()).toBe(105);
    });

    test('Esagono area', () => { 
        expect(Math.round((new Esagono(18)).area())).toBe(842);
    });

    test('Esagono perimetro', () => { 
        expect((new Esagono(18)).perimetro()).toBe(108);
    });

    test('Ettagono area', () => {
        expect(Math.round((new Ettagono(9)).area())).toBe(294);
    });

    test('Ettagono perimetro', () => {
        expect((new Ettagono(9)).perimetro()).toBe(63);
    });

    test('Ottagono area', () => {
        expect(Math.round((new Ottagono(12)).area())).toBe(695);
    });

    test('Ottagono perimetro', () => {
        expect((new Ottagono(12)).perimetro()).toBe(96);
    });
});