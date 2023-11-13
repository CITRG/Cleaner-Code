const generateButton = document.querySelector(".generate-button");

const generateMessage = () => {
  const messageTable = [
    "This is cool",
    "Isn't this great?",
    "What a game changer",
  ];

  return messageTable[Math.floor(Math.random() * messageTable.length)];
};

generateButton.addEventListener("click", () => {
  document.querySelector(".random-message").innerHTML = generateMessage();
});
