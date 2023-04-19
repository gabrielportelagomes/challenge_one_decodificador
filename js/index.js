let inputHasChanged = false;
const newInput = document.querySelector(".input");

function handleInput() {
  if (!inputHasChanged) {
    inputHasChanged = true;

    const outputContainer = document.querySelector(".outputContainer");
    const noContentContainer = document.querySelector(".noContent");
    const messageContainer = document.querySelector(".message");
    const copyButton = document.querySelector(".copyButton");
    const copyInfo = document.querySelector(".copyInfo");

    noContentContainer.classList.remove("none");
    outputContainer.classList.remove("flex");
    messageContainer.classList.remove("show");
    copyButton.classList.remove("show");
    copyInfo.classList.remove("show");
  }
}

newInput.addEventListener("input", handleInput);
newInput.addEventListener("click", handleInput);

function showMessage(message) {
  const outputContainer = document.querySelector(".outputContainer");
  const noContentContainer = document.querySelector(".noContent");
  const messageContainer = document.querySelector(".message");
  const copyButton = document.querySelector(".copyButton");
  messageContainer.textContent = message;
  noContentContainer.classList.add("none");
  outputContainer.classList.add("flex");
  messageContainer.classList.add("show");
  copyButton.classList.add("show");
}

function encrypt() {
  const inputText = document.querySelector(".input").value;

  const encryptMap = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };
  let encryptedText = "";
  for (let i = 0; i < inputText.length; i++) {
    const letter = inputText[i];
    const encryption = encryptMap[letter] || letter;
    encryptedText += encryption;
  }

  showMessage(encryptedText);
  document.querySelector(".input").value = "";
  inputHasChanged = false;
}

function decrypt() {
  const inputText = document.querySelector(".input").value;

  const decryptionMap = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  let decryptedText = inputText.replace(
    /enter|imes|ai|ober|ufat/g,
    (match) => decryptionMap[match]
  );

  showMessage(decryptedText);
  document.querySelector(".input").value = "";
  inputHasChanged = false;
}

const input = document.querySelector(".input");

input.addEventListener("input", function (e) {
  const inputValue = e.target.value;

  const normalizedInput = inputValue
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const lowercaseInput = normalizedInput.toLowerCase();

  e.target.value = lowercaseInput;
});

function copyMessage() {
  const messageText = document.querySelector(".message").textContent;
  const copyInfo = document.querySelector(".copyInfo");
  copyInfo.classList.add("show");
  navigator.clipboard.writeText(messageText);
}
