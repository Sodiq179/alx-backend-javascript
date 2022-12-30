export default function createIteratorObject(report) {
  const arrayValue = [];
  for (const key of Object.keys(report)) {
    for (const val of report[key]) {
      arrayValue.push(val);
    }
  }
  return arrayValue;
}
