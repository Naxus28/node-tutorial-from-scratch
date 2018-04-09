const fs = require('fs');
const { exec } = require('child_process');
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);


// create the file stream


rl.question('Enter the name of the text file you want to create:', (answer) => {
  let file = `${answer}.txt`;
  const stream = fs.createWriteStream(file);
  console.log(`${file} was created`);

  let question = 'Enter some text to be saved to the file ("exit" to close the program)';

  rl.setPrompt(`${question}\n`);
  rl.prompt();

  rl.on('line', answer => {
    if (answer === 'exit') {
      rl.close();
      stream.close();
      exec(`open ${file}`);
    } else {
      stream.write(`${answer}\n`);
      rl.prompt();
    }
  });
});


