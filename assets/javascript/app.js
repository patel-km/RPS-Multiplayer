//Multiplayer RPS

//4 main boxes
    //Displays name of Player 1, 3 options to play, and record of that user's wins and losses
    //Displays name of user who won OR "Tie!"
    //Displays name of Player 2, 3 options to play, and record of that user's wins and losses
    //Chatbox. Stores past messages even after refresh.

//Allow player to choose between 3 options ONCE every round. 

//Signal to other player:
    //if it is their turn or the other user's by:
        // 1) glow box around who's turn it is
        // 2) text message on screen above boxes

//For each player's side:
    //Name box across top of the screen -- input and enter button. 
        //After hit enter
        //the input box and button removed.
        //"Hi [input]! You are Player 1/2." reads across the screen where the input box used to be.
        //Box for this player goes from "Waiting for Player 1/2" to "[Input]" with Wins and losses on bottom rim of box.

//Firebase
var config = {
    apiKey: "AIzaSyAtVbANEtu6mVV7zCARcIVvptmH9xJyAG0",
    authDomain: "my-project-acd18.firebaseapp.com",
    databaseURL: "https://my-project-acd18.firebaseio.com",
    projectId: "my-project-acd18",
    storageBucket: "my-project-acd18.appspot.com",
    messagingSenderId: "152298488458"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();
  var player1ref = database.ref("player1");
  var player2ref = database.ref("player2");
  var turnref = database.ref("turn")
  
//GLOBAL VARIABLES________________________________________________
    var options = [
         "Rock",
        "Paper",
        "Scissors"];
    
    var player1 =  {
        win:  "Wins: ",
        lose:  "Losses: ",
    }

    var player2 =  {
        win:  "Wins: ",
        lose:  "Losses: ",
    }

    
//SEQUENCE_____________________________________________________________

//Firebase general sequence to keep in mind:
    //store in firebase
    //pull using snapshot
    //update html



//Store variables in firebase
    //if anything changes, reflect that change in the HTML (ex: wins&losses, name, )
    // database.ref().on("value", function(snapshot){
    //     var player1win = snapshot.val().player1.win;
    
    //     var player2win = snapshot.val().player2.win;
    
    // });



//When user enters their name, remove the input field option from view and greet them with these messages
$(".send1").on("click", function() {
    var username = $("#p1-name").val().trim();

    $("form").hide();
    $(".message").html("<p>Hi " + username + "! You are Player 1.</p>");
    console.log(username);

    //in P1 box, add the username to the top of the box
    $("#p1Box").append(username);

    //show three options (rock, paper, scissors)
    var rock = $("<li>").addClass("option").text("Rock");
    var paper = $("<li>").addClass("option").text("Paper");
    var scissors = $("<li>").addClass("option").text("Scissors");
    
    $("#p1options").append(rock);
    $("#p1options").append(paper);
    $("#p1options").append(scissors);

    //shows it is my turn
    turnref.set(0)
    
    //add wins and losses to the bottom of the box
});


$(document).on("click", "li", function () {
    console.log("li tag clicked");

    var clickChoice = $(this).text();
    console.log(clickChoice)

    player1ref.child("choice").set(clickChoice);

    $("#p1Box").text(clickChoice);

    turnref++;

});

if (turnref === 1) {
    $("#p2Box").style.border-color("");
}




//Player 2 click codes
$(".send2").on("click", function() {
    var username = $("#p2-name").val().trim();

    $("form").hide();
    $("message").html("<p>Hi " + username + "! You are Player 2.</p>");

    $("#p2Box").append(username);
});

$(document).on("click", "li", function () {
    console.log("li tag clicked");

    var clickChoice = $(this).text();
    console.log(clickChoice)

    player2ref.child("choice").set(clickChoice);

    $("#p1Box").text(clickChoice);
});


//Figure out whose turn it is, and send another message telling each user whether they are waiting on the other player, or if it is their move.


//hide opponent's boxes from each other until result message displayed. //active & .hide

//display result message

//on next click, clear result box and go back to hiding player box from each other. Game is reset.




//FUNCTIONS___________________________________________________________
    
   
// $(".option").on("click", function () {
//     //display big in Player's box
//     //make the visibility 0 on the other options
// });

function reset () {

};

function result () {
    //reveal both player boxes on all screens
    //print who won in the result box
    //update wins and losses for both players
};
