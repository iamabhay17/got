var readLineSync=require("readline-sync");

var round = 1 ;
var score = 0 ;

console.log("Welcome to < GAME OF THRONES > Quiz");
var playername=readLineSync.question("Player Name : ");

console.log("\n\n\n \t\t\t\t\t\t\t**RULES** \n\n *  there are total of 3 rounds (5+5+5),\n *  you need minimum 3 question right to qualify to next round.\n\n \t\t\t\t\t\t<ALL THE BEST !!>\n\n\n");


// Round 1;


console.log("\n\n\n\n\n\n\n< Welcome to ROund 1> \n\n");

function round1(question,answer)
{
  var useranswer=readLineSync.question(question);

  if(useranswer===answer)
  {
    console.log("\nRight answer, You Received 1 point \n");
    console.log("\n-----------------------------------------")
    score++;
  }
  else
  {
    console.log("Wrong answer , correct answer : " + answer +"\n");
    console.log("\n-----------------------------------------");
  }

}

round1(" 1a) What are main character fighting for ?\n","throne");

round1(" 1b) What is Giant wall made out of ?\n","ice");

round1(" 1c) Which family has direwolf ?\n","stark");

round1(" 1d) Who was lord of winterfell when series begin ?\n",
"ned stark");

round1(" 1e) What was relation between THE HOUND and THE MOUNTAIN ?\n","brothers")
 

if(score<=2)
{
console.log("\n\n Sorry "+ playername +" You did not make it to Round 2.");
console.log(" \n Your Total score : "+ score);
}

else{ 
  console.clear();
  
  var rscore=score;

  console.log("\t\t\t\t\t\t\t<WELCOME TO ROUND 2>\n\n\n");

  round1(" 2a) How many episodes of Game of Thrones are there in total ?\n","73");

round1(" 2b) What is the name of Jon Snow’s direwolf ?\n","ghost");

round1(" 2c)Who is king of Westeros at the very start of the show ?\n","robert baratheon");

round1(" 2d) ‘All men must die’ translates as what term in High Valyrian ?\n","valar morghulis");

round1(" 2e) Name the ancestral home of House Lannister ?\n","casterly rock");

if((score-rscore)<=2)
{
  console.log("\n\n Sorry "+ playername +" You did not make it to Round 3.");
console.log(" \n Your Total score : "+score);
}

else{
  console.clear();

console.log("\t\t\t\t\t\t\t<WELCOME TO ROUND 3>\n\n\n"); 

  round1(" 3a) What is the name of the huge mercenary army commanded by Daenerys ?\n","unsullied");

round1(" 3b) Which character is often referred to with ‘Giantsbane’ in their name ?\n","tormund");

round1(" 3c)Which vegetable-related nickname is Stannis Baratheon’s right-hand man Davos Seaworth known by ?\n","onion knight");

round1(" 3d) ‘All men must serve’ translates as what term in High Valyrian ?\n","valar dohaeris");

round1(" 3e) Which character appears in more episodes than any other? (67) \n","tyrion lannister");

console.clear();

 console.log("\n\n Congratulation "+ playername +" for completing Round 3.");
console.log(" \n Your Total score : "+ score);
}
}