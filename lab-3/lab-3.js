import { text } from "./text.js";
console.log(text);

const LETTERS_QUANTITY = 5;
const CONSONANT_LETTERS = [
    'б', 'в', 'г', 'ґ', 'д', 'ж', 'з', 'к', 'л', 'м',
    'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ'
];

class StringChecker {
    constructor(text, fixedQuantity, consonantLetters) {
      this.text = text;
      this.fixedQuantity = fixedQuantity;
      this.consonantLetters = consonantLetters;
    }
  
    getWordsWithFixedQuantity() {
      const words = this.text.split(' ');
      let result = '';
  
      for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.endsWith(',')) {
          continue;
        };
        if (word.endsWith('.')) {
          continue;
        };
        if (word.length === this.fixedQuantity && this.consonantLetters.includes(word[0])) {
          result += word + ' ';
        };
      };
  
      return result;
    }
};
  
const stringChecker = new StringChecker(text, LETTERS_QUANTITY, CONSONANT_LETTERS);
const textFiltered = stringChecker.getWordsWithFixedQuantity();

console.log(textFiltered);

document.getElementById('text').innerHTML = `<p>${text}</p>`;
document.getElementById('text-filtered').innerHTML = `<p>${textFiltered}</p>`;
document.getElementById('code-view').innerHTML = `<a href="https://github.com/4ndruxa/labsOOP/blob/main/lab-3/lab-3.js">github</a>`;