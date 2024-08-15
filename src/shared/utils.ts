export const clearObjectEmptyStrings = <T extends Record<string, unknown>>(
  obj: T,
): Partial<T> => {
  const newObj: Partial<T> = {};
  (Object.keys(obj) as (keyof T)[]).forEach((key) => {
    if (obj[key]) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};
