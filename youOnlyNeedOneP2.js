function check(a, x) {
  const result = a.filter((val) => val === x);
  return result.length >= 1 ? true : false;
}
