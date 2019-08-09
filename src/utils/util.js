const transformTitleLength = (str, maxLength) => {
  const arrayOfWords = str.split(" ");
  let transformedTitle = "";
  if (str.length < maxLength) return str;
  // refactor to recursion.
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (transformedTitle.length + arrayOfWords[i].length < maxLength) {
      transformedTitle += `${arrayOfWords[i]}`;
    }
    if (transformedTitle.length + arrayOfWords[i].length >= maxLength) {
      transformedTitle += "...";

      return transformedTitle;
    }
    transformedTitle += " ";
  }
};

module.exports = transformTitleLength;
