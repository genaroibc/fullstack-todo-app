export function isEmpty(object) {
  if (Array.isArray(object)) {
    return !object.length;
  }

  return !Object.keys(object);
}
