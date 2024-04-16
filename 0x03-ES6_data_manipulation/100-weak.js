export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let cc = weakMap.get(endpoint) || 0;

  cc += 1;

  weakMap.set(endpoint, cc);

  if (cc >= 5) throw Error('Endpoint load is high');

  return cc;
}
