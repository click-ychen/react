const data = Array(10)
  .fill(0)
  .map((_, idx) => ({ key: idx, value: `value is${idx}` }));

const fetchData = (number) => {
  return new Promise((resolve, reject) => {
    if (number < 0 || number > 9) {
      reject(new Error("number must be between 0 and 9"));
    } else {
      setTimeout(() => {
        resolve(data[number]);
      }, 200);
    }
  });
};

export default fetchData;
