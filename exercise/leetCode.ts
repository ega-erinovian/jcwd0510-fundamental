function findWordsContaining(words: string[], x: string): number[] {
  const indexFound: number[] = [];
  words.forEach((word, index) => {
    if(word.includes(x)) indexFound.push(index);
  });

  return indexFound;
}

console.log(findWordsContaining(["abc","bcd","aaaa","cbc"], "a"));
