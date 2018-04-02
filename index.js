
console.log(process.version); // your node version
console.log(process.env); // an object with your environment settings
console.log(process.env.USER); // i.e. your user name

function checkEnv() {
  if (process.env.NODE_ENV==='development') {
    console.log('you set the environment to development');
  } else if (process.env.NODE_ENV==='production') {
    console.log('you set the environment to production');
  } else {
    console.log('you didn\'t set process.env.NODE_ENV');
  }
}

checkEnv(); // process.env.NODE_ENV was not set

// set development env
process.env.NODE_ENV='development';
checkEnv(); //you set the environment to development

// set production env
process.env.NODE_ENV='production';
checkEnv(); //you set the environment to production


