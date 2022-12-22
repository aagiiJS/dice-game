//Бүх газар ашиглагдах глобал хувьсагчдыг энд зарлав
// тоглоом дууссан эсэхийг шалгах
    var isNewGame;
// идэвхтэй тоглогч
var activePlayer;
// 2 тоглогчийн цуглуулсан оноо
var scores;
// 2 тоглогчийн ээлжиндээ цуглуулсан оноо
var roundScore;
// Шооны зургийг үзүүлэх елементийг хайж олоод энд хадгалав.
var diceDom = document.querySelector(".dice");

//Тоглоомыг эхлүүлэх
initGame();

//Тоглоомыг шинээр эхлүүлэх
function initGame() {
    // Тоглоом эхэлсэн төлөвт оруулах
    isNewGame = true;
    // Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэе
    activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
    scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгааг оноог хадгалах хувьсагч
    roundScore = 0;

// Шоо аль талаараа буусныг хадгалах хувьсагч 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэнэ
    var diceNumber = Math.floor(Math.random() * 6) + 1;

//document.querySelector("#score-0").textContent = dice;
//document.querySelector("#score-1").innerHTML = "<em> Yes <em>";

// Программ эхлэхэд бэлтгэх тоглогчдын оноог тэглэх
    document.getElementById("score-0").textContent = "0";
//document.querySelector("#score-0").textContent = 0;

    document.getElementById("score-1").textContent = "0";
//document.querySelector("#score-1").textContent = 0;

// Авсан оноог тэглэх
    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = "0";

    //тоглогчдын нэрсийг гаргах
    document.getElementById("name-0").textContent = "player 1";
    document.getElementById("name-1").textContent = "player 2";

    //Та хожлоо классыг арилгах
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    //2 тоглогчийн идэвхтэй тоглогчийг устгаад, 1-р тоглогч дээр идэвхтэй тоглогчийг нэмж байна
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");

    diceDom.style.display = "none";
}

// roll dice товчийг дарж, Шоо орхих эвент листинер
document.querySelector(".btn-roll").addEventListener("click", function() {
   if(isNewGame === true) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    
    // шооны зургийг гаргах
    diceDom.style.display = "block";

    // санамсаргүй буусан тоонд харгалзах шооны зургийг вэб дээр харуулна
    diceDom.src = "dice-" + diceNumber + ".png";

// Буусан тоо 1-ээс өөр бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ
if (diceNumber !== 1) {
    //1-ээс ялгаатай тоо буусан бол буусан тоог тоглогчид нэмж өгнө
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
} else {
    // 1 буусан бол тоглогчийн ээлжийг солино. 

    swichToNextPlayer();
}
   } else {
    alert(" Тоглоом дууссан байна.  Та New game товчийг дарж тоглоомоо шинээр эхлүүлнэ үү?.");
   }
});

// Hold товчийг дарж оноогоо цуглуулах эвент листенер
document.querySelector(".btn-hold").addEventListener("click", function() {
    if(isNewGame === true) {
        // Тоглогчийн цуглуулсан оноог глобаль оноон дээр нэмэх
        //if(activePlayer=== 0) {
            //scores[0] = scores[0] + roundScore;
        //} else {
            //scores[1] = scores[1] + roundScore;
        //} гэж кодлож болох ч гэсэн дараах байдлаар бичиж болно
        scores[activePlayer] = scores[activePlayer] + roundScore;
        
        //Дэлгэц дээр оноог өөрчилнө
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    
        // Уг тоглогч хожсон эсэхийг(Оноо 100-гаас их болсон эсэх) шалгах
        if(scores[activePlayer] >= 100) {
            //Тоглоом дуусан төлөвт оруулах
            isNewGame = false;

            // Оноо 100 болгонгуут Та хожлоо бичиг гаргаж, улаан цэг(active)-ийг арилгах 
            document.getElementById("name-" + activePlayer).textContent = 'Та хожлоо';
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");

        } else {
            // Тоглогчийн ээлжийг солино.
            swichToNextPlayer();
        }
    } else {
        alert("Тоглоом дууссан байна. Та New game товчийг дарж тоглооиоо шинээр эхлүүлнэ үү?");
    }
});

function swichToNextPlayer() {
    // энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    //Хэрэв идэвхтэй тоглогч нь 0 байвал идэвхтэй тоглогчийг 1 болго
    //үгүй бол идэвхтэй тоглогчийг 0 болго.
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    
    // улаан цэгийг шилжүүлэх
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    diceDom.style.display = "none";
}

// New game товчны эвент лисэенер
document.querySelector(".btn-new").addEventListener("click", initGame);



    





