import { Studente, Docente, confrontaOBJ  } from "./es_72.js";

describe("ESERCIZIO 72", () => {
    test('Studente-Docente uguali', () => {
        expect(confrontaOBJ(new Studente("Mario", 4), new Docente("Mario", 4))).toBe(false);
    });
    test('Studente-Docente diversi', () => {
        expect(confrontaOBJ(new Studente("Giovanni", 2), new Docente("Pino", 5))).toBe(false);
    });
    test('Studente-Studente diversi', () => {
        expect(confrontaOBJ(new Studente("Giovanni", 2), new Docente("Pino", 5))).toBe(false);
    });
    test('Studente-Studente uguali', () => {
        expect(confrontaOBJ(new Studente("Giovanni", 2), new Studente("Giovanni", 2))).toBe(true);
    });
});