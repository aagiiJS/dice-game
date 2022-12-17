// Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэе
    var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгааг оноог хадгалах хувьсагч
var roundScore = 0;

// Шоо аль талаараа буусныг хадгалах хувьсагч 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэнэ
var dice = Math.floor(Math.random() * 6) + 1;

//document.querySelector("#score-0").textContent = dice;
//document.querySelector("#score-1").innerHTML = "<em> Yes <em>";

// Программ эхлэхэд бэлтгэх тоглогчдын оноог тэглэх
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

// Авсан оноог тэглэх
document.querySelector("#current-0").textContent = 0;
Document.querySelector("#current-1").textContent = 0;

// Шоогоо арилгах
document.getElementsByClassName("dice").style.display = "none";

// Шоо орхих
