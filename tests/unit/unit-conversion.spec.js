import { unitConversion } from "@/utils/unit-conversion"

describe("unit-conversion utils functions", () => {

  test("convertLbsIntoKgs works correctly with a whole number", () => {

    expect(unitConversion.convertLbsIntoKgs(17)).toEqual(8)
  })

  test("convertLbsIntoKgs works correctly with a number with decimals", () => {

    expect(unitConversion.convertLbsIntoKgs(33.33)).toEqual(15)
  })

  test("convertLbsIntoKgs returns 0 with a negative mass", () => {

    expect(unitConversion.convertLbsIntoKgs(-12)).toEqual(0)
  })

  test("convertFtIntoCms works correctly with a whole number", () => {

    expect(unitConversion.convertFtIntoCms(23)).toEqual(701)
  })

  test("convertFtIntoCms works correctly with a number with decimals", () => {

    expect(unitConversion.convertFtIntoCms(43.21)).toEqual(1317)
  })

  test("convertFtIntoCms returns 0 with a negative length", () => {

    expect(unitConversion.convertFtIntoCms(-4)).toEqual(0)
  })
})