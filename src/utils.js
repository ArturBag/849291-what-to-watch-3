export const getRatingLevel = (rating) => {

  let level = ``;

  if (rating >= 0 && rating < 3) {
    level = `Bad`;
  } else if (rating >= 3 && rating < 5) {
    level = `Normal`;
  } else if (rating >= 5 && rating < 8) {
    level = `Good`;
  } else if (rating >= 8 && rating < 10) {
    level = `Very good`;
  } else if (rating === 10) {
    level = `Awesome`;
  }

  return level;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
