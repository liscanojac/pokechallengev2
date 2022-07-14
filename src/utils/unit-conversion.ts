
function convertLbsIntoKgs(lbs: number): number {
  if (lbs < 0) return 0
  return Math.round(lbs * 0.45)
}

function convertFtIntoCms(inches: number): number {
  if (inches < 0) return 0
  return Math.round(inches * 30.48)
}

export const unitConversion = {
  convertFtIntoCms,
  convertLbsIntoKgs
}