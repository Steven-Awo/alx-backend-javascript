export default function cleanSet(_set, startString) {
  if (typeof _set !== 'object') return '';

  if (typeof startString !== 'string') return '';

  if (startString.length === 0) return '';

  const stringSet = [];
  [..._set].forEach((a) => {
    if (a && a.indexOf(startString) === 0) stringSet.push(a.replace(startString, ''));
  });
  return stringSet.join('-');
}
