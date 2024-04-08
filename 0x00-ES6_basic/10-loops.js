export default function appendToEachArrayValue(array, appendString) {
  const arryend = [];
  for (const idx of array) {
    arryend.push(`${appendString}${idx}`);
  }

  return arryend;
}
