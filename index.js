const readline = require('readline'); // get the module
const rl = readline.createInterface(process.stdin, process.stdout); // creates the readline interface

const user = {
  name: '',
  age: 0,
  hobbies: []
};

const questions = [
  'What is your name? ',
  'What is your age?',
  'What do you like to do? ',
  'What else do you like to do? ("exit" to stop) '
];

// alternatively, we could have used rl.setPrompt instead of rl.question
// as we do down below
rl.question(questions[0], (answer) => {
  user.name = answer;

  // ask another question
  rl.question(`Hi ${answer}. ${questions[1]} `, (answer) => {
    user.age = answer;

    // set and use new prompt -- similar to 'question'
    rl.setPrompt(questions[2])
    rl.prompt();

    // listen to 'line' event
    rl.on('line', (answer) => {
       if (answer === 'exit') {
        rl.close(); // close 'readline' if user types 'exit'
       } else {
        user.hobbies.push(answer);

        // set and use new prompt
        rl.setPrompt(questions[3])
        rl.prompt();
       }
    });

  });
});

// listen to the close event
rl.on('close', () => {
  console.log('%s is %d. They like to %j.', user.name, user.age, user.hobbies);
  process.exit();
})

