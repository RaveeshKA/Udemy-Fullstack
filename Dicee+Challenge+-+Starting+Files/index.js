let n1 = 0;
let n2 = 0;

n1 = Math.floor(Math.random() * 6) + 1;
n2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", `images/dice${n1}.png`);
document.querySelector(".img2").setAttribute("src", `images/dice${n2}.png`);    


if (n1 > n2) {
    document.querySelector("h1").innerText = "🚩 Player 1 Wins!";
} else if (n1 < n2) {
    document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerText = "Draw!";
}       