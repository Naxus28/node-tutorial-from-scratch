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
  'What do you like to do? '
];

const greeting = (name) => `Hi ${name}.`;

// alternatively, we could have used rl.setPrompt instead of rl.question
// as we do below
rl.question(questions[0], (answer) => {
  user.name = answer;

  rl.question(`${greeting(answer)} ${questions[1]} `, (answer) => {
    user.age = answer;

    rl.setPrompt(questions[2])
    rl.prompt();

    rl.on('line', (answer) => {
       if (answer === 'exit') {
        rl.close();
       } else {
        user.hobbies.push(answer);
        rl.setPrompt('What else do you like to do? ("exit" to stop) ')
        rl.prompt();
       }
    });

  });

  rl.on('close', () => {
    console.log('%s is %d. They like to %j.', user.name, user.age, user.hobbies);
    process.exit();
  })
});
