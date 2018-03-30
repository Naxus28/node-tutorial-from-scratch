// this script demonstrates how we can interact with the process via stdin and stdout
// these are asynchronous, non-blocking operations, meaning the process doesn't hang until
// one operation is completed to start performing the other--this is what makes 
// node.js a good option to write apis
let questions = [
  'What is your name?',
  'What do you like to do?',
  'What do you like to eat?'
];

// store answers state
let answers = [];

// utility
function ask(i) {
  process.stdout.write(`${questions[i]} \n`);
  process.stdout.write(' > ');
}

// stdin
process.stdin.on('data', data => {
  answers.push(data.toString().trim());

  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

// exit process 
process.on('exit', () => {
  process.stdout.write('\n');
  process.stdout.write(`Hi ${answers[0]}. Glad to know you like to ${answers[1]} and like eat ${answers[2]}`);
  process.stdout.write('\n\n');
});

// initialize stout 
ask(0);


