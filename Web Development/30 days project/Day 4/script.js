const passwordBox = document.getElementById("password");
const button = document.getElementById("btn");
const copyButton = document.getElementById("copy-btn");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()[]{}:<>?,./;=-";

const allchars = upperCase + lowerCase + number + symbol;
function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allchars[Math.floor(Math.random() * allchars.length)];
  }

  passwordBox.value = password;
}

copyButton.onclick = () => {
    if (passwordBox.value) {
        navigator.clipboard.writeText(passwordBox.value)
            .then(() => alert("Password copied to clipboard!"))
            .catch(err => console.error("Failed to copy: ", err));
    } else {
        alert("Generate a password first!");
    }
};


button.onclick = () => createPassword();
