const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const personObj = { };

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  personObj.name = answer;

  rl.question('What\'s an activity you like doing?', (answer) => {
    personObj.activity = answer;
    
    rl.question('What do you listen to while doing that?', (answer) => {
      personObj.music = answer;

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        personObj.meal = answer;

        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          personObj.food = answer;

          rl.question('Which sport is your absolute favourite?', (answer) => {
            personObj.sport = answer;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              personObj.superpower = answer;

              console.log(`${personObj.name} loves listening to ${personObj.music} while ${personObj.activity}, devouring ${personObj.food} for ${personObj.meal}, prefers ${personObj.sport} over any other sport, and is amazing at ${personObj.superpower}.`);
              rl.close();
            });
          });
        });
      });  
    });   
  });
});
