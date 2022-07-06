class BooleanQuiz {
  constructor(description) {
    this.description = description;
  }

  printQuizChoices() {
    console.log("1. True");
    console.log("2. False");
  }
}

class MultipleChoiceQuiz {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }

  printQuizChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }
}

class TextQuiz {
  constructor(description) {
    this.description = description;
  }

  printQuizChoices() {
    console.log(`Answer: _________`);
  }
}

class RangeQuiz {
  constructor(description) {
    this.description = description;
  }

  printQuizChoices() {
    console.log("Minimum: ______________");
    console.log("Maxmum: ______________");
  }
}

function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    question.printQuizChoices();
    console.log(" ");
  });
}

const questions = [
  new BooleanQuiz("This video is usefull"),
  new MultipleChoiceQuiz("What is your favorite language?", [
    "CSS",
    "JS",
    "Python",
  ]),

  new TextQuiz("Describe your favorite JS feature"),
  new RangeQuiz("What is the speed limit in your city?"),
];

printQuiz(questions);
