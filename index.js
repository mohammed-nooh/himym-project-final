
var readlineSync=require("readline-sync");

const chalk = require("chalk");


var username=readlineSync.question(console.log("Hi May i have your "+chalk.inverse.bold("name\n ")));

console.log(chalk.redBright("\nWelcome to the 'How I Met Your Mother' fan quiz " )+ chalk.black.bgRed.bold(username)+"\n");

var yn=readlineSync.question(console.log(
  "Only a true HIMYM fan can ace this quiz , so are you ready? press "+chalk.inverse(" Y ")+"or"+chalk.inverse(" N ")+"\n"
));



if(yn.toLowerCase()=="y"){
  console.log(chalk.blueBright.bold("\nGOOD LUCK!\n"));
  console.log(chalk.black.bgRed.bold("SELECT AN ANSWER FOR EACH QUESTION AS OPTION NUMBER\n"));
  
}
else{
  console.log(chalk.black.bgRed.bold("\naww too bad we could have had a lot of fun\n"));
  process.exit();
};

var score=0;

var questions=[
  {
    question:"1.Where does the show take place?\n\
    1.brooklyn\
    2.manhattan\
    3.tokyo",
    answer:"2",
  },
  {
    question:"2.Who was DrX? \n\
    1.ted\
    2.marshall\
    3.lily",
    answer:"1",
  },
  {
    question:"3.What year is Ted narrating the story from?\n\
    1.2025\
    2.2040\
    3.2030",
    answer:"3",
  },
  {
    question:"4.What instrument does Ted steal for Robin?\n\
    1.A tuba\
    2.A French Horn\
    3.A Trumpet",
    answer:"2",
  },
  {
    question:"5.Who does Barney believe is his father?\n\
    1.Alex Trebek\
    2.Bob Barker\
    3.Peter Marshall",
    answer:"2",
  },
  {
    question:"6.What embarrassing tattoo does Ted get in Season 3?\n\
    1.A Butterfly\
    2.Robins Name\
    3.A Unicorn",
    answer:"1",
  },
  {
    question:"7.What fruit does Ted mysteriously wake up to after a drunken night out in Season 1?\n\
    1.A Watermelon\
    2.A Pineapple\
    3.A Mango",
    answer:"2",

  },
  {
    question:"8.What phrase does Robin constantly say on her pre-morning news show?\n\
    1.Uh...so\
    2.Yeah,Yeah\
    3.But...Um",
    answer:"3",
  },
  {
    question:"9.Which of the following is NOT one of Ted's girlfriends?\n\
    1.Victoria\
    2.stella\
    3.Quinn",
    answer:"3",
  },
  {
    question:"10.What do Lily and Marshall name their first son?\n\
    1.Marvin\
    2.Mickey\
    3.Michael",
    answer:"1",
  },
];

function quiz(question,answer){

  var useranswer=readlineSync.question(console.log(chalk.yellow.bold("\n"+question+"\n")));


  if(useranswer===answer){
    console.log(chalk.green("your answer is correct"))
    score++;
  }
  else{
    console.log(chalk.red("your answer is wrong sorry the correct answer is "+chalk.green(answer)));
    
  }
  console.log(chalk.blueBright("\nyour score is "+chalk.black.bgWhite.bold(score)));

}

for(var i=0;i<questions.length;i++){

  quiz(questions[i].question,questions[i].answer);
}

console.log(chalk.blueBright.underline("\nyour final score is "+chalk.black.bgWhite.bold(score)));

var highscore=[
  {
    name:"nooh",
    score:10
  },
  {
    name:"don",
    score:8,
  },
  {
    name:"naruto",
    score:7,
  },
];


console.log(chalk.bgYellow.bold("\n\n\t\t HIGH SCORES "));

console.table(highscore);

console.log(chalk.inverse.bold("\nIf You have beaten the highscore please text me the screenshot and i will update it onto the quiz leaderboard\nTHANK YOU FOR PLAYING "));








