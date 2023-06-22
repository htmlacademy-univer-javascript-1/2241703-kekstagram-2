function getRandomNumber(min, max) {
  if (min < max && min >= 0 && max >= 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    }
  if (min >= max) {
    return 'Incorrect value entry: minimum is greater than maximum';
     }
    if (max < 0 || min < 0) {
        throw new RangeError('Minimum and maximum values must be positive');
    }
  }


const checkMaxSymbol = (str, maxLength) => {
    return str.length <= maxLength;
}

  "dependencies": {},
  "scripts": {
    "start": "browser-sync start --server --no-ui --files \"js/**/*.js\"",
    "lint": "eslint js/",
    "lintfix": "eslint js/ --fix"
  },
  "engines": {
    "node": "16.x",
