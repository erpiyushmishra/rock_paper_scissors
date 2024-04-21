var game_item=["rock", "paper", "scissors"]


$("button").click(function(){
    user=$(this).attr("id")
    computer=game_item[Math.floor(Math.random()*3)]
    check_winner(user,computer)
})




function check_winner(user_input,computer_input){
    if (user_input==="rock" && computer_input==="scissors"){
        $("#computer").text(computer_input);
        $("#your").text(user_input);
        $("#result").text("You Win")
    }
    else if (user_input==="scissors" && computer_input==="paper"){
        $("#computer").text(computer_input);
        $("#your").text(user_input);
        $("#result").text("You Win.")
    }
    else if (user_input==="paper" && computer_input==="rock"){
        $("#computer").text(computer_input);
        $("#your").text(user_input);
        $("#result").text("You Win")
    }
    else if (user_input===computer_input){
        $("#computer").text(computer_input);
        $("#your").text(user_input);
        $("#result").text("Draw")
    }
    
    else{
        $("#computer").text(computer_input);
        $("#your").text(user_input);
        $("#result").text("You loose")

    }



}