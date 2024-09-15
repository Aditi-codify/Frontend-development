const max = prompt("enter the max number/enter 'quit' in this and the next prompt box to read instructions");

const random = Math.floor(Math.random()*max)+1;
let guess = prompt("quess the number");

while(true){
    if (guess=="quit"){
        console.log("user quit");
    break;
    }

    if (guess == random){
        console.log("you are right! congrats!! random numer was",random);
        break;
    }else{
        guess = prompt("your guess was wrong.please try again");
    }
}
