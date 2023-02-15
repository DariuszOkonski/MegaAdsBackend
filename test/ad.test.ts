import { AdRecord } from "../records/add.record";

test("AdRecord returns data from database for one entry.", async () => {
  const ad = await AdRecord.getOne("aaa");

  expect(ad).toBeDefined();
  expect(ad.id).toBe("aaa");
  expect(ad.name).toBe("Testowa");
});

test("AdRecord returns null from database for unexisting entry.", async () => {
  const ad = await AdRecord.getOne("---");

  expect(ad).toBeNull();
});
