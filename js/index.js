function showMessage(message) {
  const outputContainer = document.querySelector(".outputContainer");
  const noContentContainer = document.querySelector(".noContent");
  const messageContainer = document.querySelector(".message");
  messageContainer.textContent = message;
  noContentContainer.classList.add("none");
  outputContainer.classList.add("flex");
  messageContainer.classList.add("show");
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
