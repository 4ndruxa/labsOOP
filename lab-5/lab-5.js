import { text } from "../lab-3/text.js";
console.log(text);

class Letter {
    constructor(character) {
      this.character = character;
    }
  }
  
  class Word {
    constructor(word) {
      this.letters = [];
      for (let i = 0; i < word.length; i++) {
        this.letters.push(new Letter(word[i]));
      }
    }
  }
  
  class PunctuationMark {
    constructor(character) {
      this.character = character;
    }
  }
  
  class Sentence {
    constructor(sentence) {
      this.wordsAndPunctuationMarks = [];
      let wordsAndPunctuationMarksArray = sentence.trim().split(/(\s+|\b)/g);
      wordsAndPunctuationMarksArray = wordsAndPunctuationMarksArray.filter(function(el) {
        return el.trim().length > 0;
      });
      for (let i = 0; i < wordsAndPunctuationMarksArray.length; i++) {
        let currentElement = wordsAndPunctuationMarksArray[i];
        if (currentElement === "." || currentElement === "," || currentElement === ";" || currentElement === ":" || currentElement === "!" || currentElement === "?") {
          this.wordsAndPunctuationMarks.push(new PunctuationMark(currentElement));
        } else {
          this.wordsAndPunctuationMarks.push(new Word(currentElement));
        }
      }
    }
  }
  
  class Text {
    constructor(text) {
      this.sentences = [];
      let sentencesArray = text.split(/[.?!]/g);
      sentencesArray = sentencesArray.filter(function(el) {
        return el.trim().length > 0;
      });
      for (let i = 0; i < sentencesArray.length; i++) {
        let currentSentence = sentencesArray[i];
        this.sentences.push(new Sentence(currentSentence));
      }
    }
  }
  
  const LETTERS_QUANTITY = 5;
  const CONSONANT_LETTERS = [
      'б', 'в', 'г', 'ґ', 'д', 'ж', 'з', 'к', 'л', 'м',
      'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ'
  ];
  
  class StringChecker {
      constructor(text, fixedQuantity, consonantLetters) {
        this.text = new Text(text.replace(/[\t ]+/g, ' '));
        this.fixedQuantity = fixedQuantity;
        this.consonantLetters = consonantLetters;
      }
    
      getWordsWithFixedQuantity() {
        let result = '';
    
        for (let i = 0; i < this.text.sentences.length; i++) {
          let sentence = this.text.sentences[i];
          for (let j = 0; j < sentence.wordsAndPunctuationMarks.length; j++) {
            let currentElement = sentence.wordsAndPunctuationMarks[j];
            if (currentElement instanceof Word && currentElement.letters.length === this.fixedQuantity && this.consonantLetters.includes(currentElement.letters[0].character)) {
              result += currentElement.letters.map((letter) => letter.character).join('') + ' ';
            }
          }
        }
    
        return result;
      }
  };
    
  const stringChecker = new StringChecker(text, LETTERS_QUANTITY, CONSONANT_LETTERS);
  const textFiltered = stringChecker.getWordsWithFixedQuantity();
  console.log(textFiltered);