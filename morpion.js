//Au démarrage du jeu
var layer = document.querySelector(".layer");
var container = document.querySelector(".container");
var grilles = document.querySelector(".grid-container");
var Turn = null;
var clicked = 0;

//quand le jeu démarre
function start(){
    layer.style.display = 'none';
    container.style.display ="block";
    grilles.style.display ="inline-block";
    return true;
};

//initialiser la valeur du variable Turn en fonction du joueur choisi
//l'ajout de ce variable turn me servira de référence plus tard dans la fonction choiseCase car à l'aide de ce variable quand je choisi tel joueur c'est tel pion (X ou O) qui s'affiche
function startMorpion(clicked_id){
    start();
    if(clicked_id === "player1"){
        Turn = true;
        console.log("C'est au tour du player1");
    }else{
        Turn = false;
        console.log("C'est au tour du player2");
    }
}
//Vérifier : si c'est tel joueur qui a été choisi (c-à-d quel est la valeur du variable turn), afficher X ou O dans les cases cliquées
function choiseCase(clicked_id){
    Turn === true ?
    document.getElementById(clicked_id).innerHTML = "X":
    document.getElementById(clicked_id).innerHTML = "O"; 
}


////TY NY COMMENTAIRE




// var grid = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9'];
// var arr1 = [];
// var arr2 = [];
// var arr3 = [];
// var arr4 = [];
// var arr5 = [];
// var arr6 = [];
// var arr7 = [];
// var arr8 = [];
// var arr9 = [];

// var success;
// var gameOver = false;
// var arr = [];
// var clicked = 0;
// var choice = 9;
// var playerSore = 0;
// var cpuScore = 0;
// //objects définis pour mes joueurs
// var player = {
//     name : 'Player 1',
//     team : '',
//     arr : []
// };

// var cpu = {
//     name : 'Computer',
//     team : '',
//     arr : []
// };

// $('.cpu-score').html(cpuScore);
// $('.you-score').html(cpuScore);

// function findElement(check){
//     arr1 = ['item1', 'item2', 'item3'];
//     arr2 = ['item4', 'item5', 'item6'];
//     arr3 = ['item7', 'item8', 'item9'];
//     arr4 = ['item1', 'item4', 'item7'];
//     arr5 = ['item2', 'item5', 'item8'];
//     arr6 = ['item3', 'item6', 'item9'];
//     arr7 = ['item1', 'item5', 'item9'];
//     arr8 = ['item3', 'item5', 'item7'];

// success;

// switch (true) {
//     case success = arr1.every(function(val) {
//     return check.arr.indexOf(val) !== -1;    
// }): 
//     gameOver = true;
//     winning(arr1);
//     setTimeOut(on, 700, check.name);
//     break;

//     case success = arr2.every(function(val) {
//     return check.arr.indexOf(val) !== -1;
// }):
//     gameOver = true;
//     winning(arr2);
//     setTimeOut(on, 700, check.name);
//     break;

//     case success = arr3.every(function(val){
//         return check.arr.indexOf(val) !== -1;
// }):
//     gameOver = true;
//     winning(arr3);
//     setTimeOut(on, 700, check.name);
//     break;


// function winning(valeur){
//     if(clicked % 2  == 0) {
//         $('#' + valeur[0] + )
//     }
//     if('#' +)[2].html(<p class = "animated bouncein" style = "font-size: 2em; color: #3fcc664;">`+player.team+`</p>)
// }