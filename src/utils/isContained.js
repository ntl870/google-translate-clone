export const isContained = (array, key, target) => {
  const isFound = array.some((item) => item[key] === target);
  return isFound;
};
