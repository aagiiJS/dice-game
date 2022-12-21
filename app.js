// Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэе
    var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгааг оноог хадгалах хувьсагч
var roundScore = 0;

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

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
// roll dice товчийг дарах Шоо орхих
document.querySelector(".btn-roll").addEventListener("click", function shooShid() {
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

    // if (activePlayer === 0) {
    //     activePlayer = 1;
    // } else {
    //     activePlayer = 0;
    // }
}

    
});


    





