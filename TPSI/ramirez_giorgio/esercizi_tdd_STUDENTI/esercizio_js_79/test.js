import { Automobile } from "./es_79.js";

describe("ESERCIZIO 79", () => {
  test("Persone", () => {
    const car = new Automobile();
    expect(() => (car.persone = 10)).toThrow();
    expect(() => (car.persone = 5)).not.toThrow();
    expect(car.persone).toBe(5);
    car.accesa = true;
    car.velocita = 10;
    expect(() => (car.persone = 1)).toThrow();
    expect(car.persone).toBe(5);
  });
  test("Velocità", () => {
    const car = new Automobile();
    expect(() => (car.velocita = 10)).toThrow();
    car.accesa = true;
    expect(() => (car.velocita = 10)).not.toThrow();
    expect(car.velocita).toBe(10);
    expect(() => (car.velocita = 500)).toThrow();
    expect(() => (car.velocita = 170)).toThrow();
    expect(car.velocita).toBe(10);
  });
  test("Marcia", () => {
    const car = new Automobile();
    expect(car.aggiungi_marcia).toThrow();
    expect(car.togli_marcia).toThrow();

    car.accesa = true;
    for (let i = 0; i < 5; i++) {
      car.aggiungi_marcia();
    }
    expect(car.marcia).toBe(6);
    expect(car.aggiungi_marcia).toThrow();

    for (let i = 0; i < 5; i++) {
      car.togli_marcia();
    }
    expect(car.togli_marcia).toThrow();
    expect(car.marcia).toBe(1);
  });
});
