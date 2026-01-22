import { Orario } from "./es_76.js";

const ora1 = new Orario(24, 10, 30);
const ora2 = new Orario(23, 59, 59);
const ora3 = new Orario(10, 20, 30);
const ora4 = new Orario(11, 20, 30);

describe("ESERCIZIO 76", () => {
  test("Test ora1-ora2", () => {
    expect(ora1.diff(ora2)).toStrictEqual({
      milliseconds: 631000,
      seconds: 631,
      minutes: 10.516666666666667,
      hours: 0.17527777777777778,
    });
  });
  test("Test ora2-ora3", () => {
    expect(ora2.diff(ora3)).toStrictEqual({
      milliseconds: 49169000,
      seconds: 49169,
      minutes: 819.4833333333333,
      hours: 13.658055555555556,
    });
  });
  test("Test ora3-ora1", () => {
    expect(ora3.diff(ora1)).toStrictEqual({
      milliseconds: 49800000,
      seconds: 49800,
      minutes: 830,
      hours: 13.833333333333334,
    });
  });
  test("Test ora4-ora1", () => {
    expect(ora4.diff(ora1)).toStrictEqual({
      milliseconds: 46200000,
      seconds: 46200,
      minutes: 770,
      hours: 12.833333333333334,
    });
  });
  test("Test ora2-ora4", () => {
    expect(ora2.diff(ora4)).toStrictEqual({
      milliseconds: 45569000,
      seconds: 45569,
      minutes: 759.4833333333333,
      hours: 12.658055555555556,
    });
  });
});
