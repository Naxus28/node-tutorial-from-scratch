const rl = require('readline').createInterface(process.stdin, process.stdout); // creates the readline interface
const fs = require('fs');
const { exec } = require('child_process'); 

const person = {
  name: '',
  age: 0,
  hobbies: []
};

const questions = [
  'What is your name? ',
  'How old are you? ',
  'What do you like to do? ',
  'What else do you like to do? (enter "exit" to stop) '
];

rl.question(questions[0], answer => {
  person.name = answer;

  // creates the file and writes the text passed as second argument
  // because this is a simple application with one user,
  // we know the file will have been created by the time we need to 
  // append text to it
  // for a multi-user app we should use the asynchronous version of this method (writeFile) 
  fs.writeFileSync('person.txt', `Name: ${answer}\n============\n\n`);

  rl.question(questions[1], answer => {
    person.age = answer;

    // using synchronous version of the method 
    fs.appendFileSync('person.txt', `Age: ${answer}\n============\n\n`);

    // ask new question using 'prompt' instead of 'question'
    // allows us to listen to 'line' event
    rl.setPrompt(questions[2]);
    rl.prompt();

    rl.on('line', answer => {
      if (answer === 'exit') {
        rl.close();
      } else {
        // if there is no hobbie in the array, write the heading 'Hobbies' to the file
        if (!person.hobbies.length) {
          fs.appendFileSync('person.txt', 'Hobbies\n============\n');
        }

        person.hobbies.push(answer);
        fs.appendFileSync('person.txt', `${person.hobbies.length}.${answer}\n`);
        
        rl.setPrompt(questions[3]);
        rl.prompt();
      }
    });
  });
});

rl.on('close', () => {
  exec('open ./person.txt'); // open the peson.txt file
  process.exit();
});
