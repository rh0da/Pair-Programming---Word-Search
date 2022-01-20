const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map((ls) => ls.join(""));
    console.log(horizontalJoin);
    for (l of horizontalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
    // Transposing...
  
    let newMatrix = [];
    let width = letters[0];
  
    for (let i = 0; i < width.length; i++) {
      newMatrix.push([]);
    }
  
    for (let row = 0; row < letters.length; row++) {
      for (let col = 0; col < width.length; col++) {
        newMatrix[col].push(letters[row][col]);
      }
    }
    // Finish transpose
    const verticalJoin = newMatrix.map((ls) => ls.join(""));
    for (l of verticalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
    // console.log(verticalJoin);
  
    return false;
  };
  
  module.exports = wordSearch;