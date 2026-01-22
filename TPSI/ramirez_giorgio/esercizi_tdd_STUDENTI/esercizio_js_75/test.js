import { Automobile, Animale, Poligono } from "./es_75.js";

describe("ESERCIZIO 75", () => {
    test('Test car enum', () => {
        expect((new Automobile("Rosso", "Honda", "Civic Type R")).enumera()).toStrictEqual(["colore", "marca", "modello"]);
    });
    test('Test animal enum', () => {
        expect((new Animale("Scimmia", "Miss Baker", 27)).enumera()).toStrictEqual(["specie", "nome", "eta"]);
    });
    test('Test poligono enum', () => {
        expect((new Poligono(10, 7, true)).enumera()).toStrictEqual(["lato", "n_lati", "reg"]);
    });
});