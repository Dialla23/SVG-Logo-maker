

inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }

    const inquirer = require('inquirer');

    const prompt = inquirer.createPromptModule();

    prompt(questions).then(/* ... */);

    {
        /* Preferred way: with promise */
        filter() {
          return new Promise(/* etc... */);
        },
      
        /* Legacy way: with this.async */
         function (input) {
          // Declare function as asynchronous, and save the done callback
          const done = this.async();
      
          // Do async stuff
          setTimeout(function() {
            if (typeof input !== 'number') {
              // Pass the return value in the done callback
              done('You need to provide a number');
              return;
            }
            // Pass the return value in the done callback
            done(null, true);
          }, 3000);
        }
      }
  });

 