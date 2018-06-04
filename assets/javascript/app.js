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
    apiKey: "AIzaSyAJS4YQWU5DmESeYueG1qH1NGkjv3DncEY",
    authDomain: "fir-click-counter-7cdb9.firebaseapp.com",
    databaseURL: "https://fir-click-counter-7cdb9.firebaseio.com",
    storageBucket: "fir-click-counter-7cdb9.appspot.com"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
//GLOBAL VARIABLES________________________________________________
    var options = {
        rock: "Rock",
        paper: "Paper",
        scissors:  "Scissors",
    }
    var player1 =  {
        win:  "Wins: ",
        lose:  "Losses: ",
    }

    var player2 =  {
        win:  "Wins: ",
        lose:  "Losses: ",
    }

    



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
    //show three options (rock, paper, scissors)
    //add wins and losses to the bottom of the box
});

$(".send2").on("click", function() {
    var username = $("#p2-name").val().trim();

    $("form").hide();
    $("message").html("<p>Hi " + username + "! You are Player 1.</p>");
});


//Figure out whose turn it is, and send another message telling each user whether they are waiting on the other player, or if it is their move.


//hide opponent's boxes from each other until result message displayed. 

//display result message

//on next click, clear result box and go back to hiding player box from each other. Game is reset.