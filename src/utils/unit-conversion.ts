
function convertLbsIntoKgs(lbs: number): number {
  return Math.round(lbs * 0.45)
}

function convertInchesIntoCms(inches: number): number {
  return Math.round(inches * 30.48)
}

export const unitConversion = {
  convertInchesIntoCms,
  convertLbsIntoKgs
}