process.stdout.write('Write something \n');
process.stdout.write(' > ');

// the 'on' method allows us to listen for events
process.stdin.on('data', data => {
  console.log('data: ', data); // this data is a Buffer object, so we need to convert it to a string
  console.log(data.toString());// need to trim the data to get a 'clean' string, without line breaks
  console.log(data.toString().trim());
  // if we don't explicitly exit the process it will continue running 
  // (comment out the line below and check how the process hangs on the terminal)
  process.exit();
});






