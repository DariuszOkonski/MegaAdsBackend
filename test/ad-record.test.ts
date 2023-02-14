import { AdRecord } from "../records/add.record";

const defaultObj = {
  id: "134",
  name: "Test Name",
  description: "blah",
  url: "https://megak.pl",
  price: 0,
  lat: 9,
  lon: 9,
};

test("Can build AdRecord", () => {
  const ad = new AdRecord({
    ...defaultObj,
  });

  expect(ad.name).toBe("Test Name");
  expect(ad.description).toBe("blah");
});

test("Validates invalid price", () => {
  expect(
    () =>
      new AdRecord({
        ...defaultObj,
        price: -3,
      })
  ).toThrow("Cena nie może byc mniejsza niż 0 lub większa niż 9999999.");
});

// @TODO: check all the validation
