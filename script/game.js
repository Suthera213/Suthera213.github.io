const words = ["สัตว์", "ประเทศ", "อาหาร", "สี", "อาชีพ"];
const clues = ["มีสี่ขา", "อยู่ในทวีปเอเชีย", "มีรสหวาน", "เป็นสีแดง", "รักษาผู้ป่วย"];
let currentWord = words[Math.floor(Math.random() * words.length)];
let currentClue = clues[words.indexOf(currentWord)];

function checkGuess() {
  const guess = document.getElementById("guess").value;
  const message = document.getElementById("message");

  if (guess === currentWord) {
    message.textContent = " คุณทายถูก! ";
    currentWord = words[Math.floor(Math.random() * words.length)];
    currentClue = clues[words.indexOf(currentWord)];
    document.getElementById("clue").textContent = currentClue;
  } else {
    message.textContent = " คิดอีกนิด! ";
  }
}
