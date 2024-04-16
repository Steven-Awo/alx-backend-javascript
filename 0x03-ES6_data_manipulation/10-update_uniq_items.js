export default function updateUniqueItems(_map) {
  if (!(_map instanceof Map)) throw Error('Cannot process');
  _map.forEach((a, b) => {
    if (a === 1) _map.set(b, 100);
  });

  return _map;
}
