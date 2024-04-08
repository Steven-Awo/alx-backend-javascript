export default function createIteratorObject(report) {
  const resulting = [];
  for (const idx of Object.values(report.allEmployees)) {
    resulting.push(...idx);
  }
  return resulting;
}
