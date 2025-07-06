const dialog = document.getElementById('dialog-box');
const openDialog = document.getElementById('open-dialogbox');
const closeDialog = document.getElementById('close-dialogbox');
const searchInput = document.getElementById('locationInput');
const dialogMessage = document.getElementById('dialog-msg');
const toggleBtn = document.getElementById('toggle-btn');
const locationLabel = document.getElementById('location-label');
const container = document.querySelector('.container');

document.body.style.backgroundColor = "#e6f7f1";

let isLight = true;

function applyResponsiveInputStyles() {
  if (!isLight && window.innerWidth <= 768) {
    searchInput.style.color = "#fff";
    searchInput.style.caretColor = "#fff";
  } else if (isLight && window.innerWidth <= 768) {
    searchInput.style.color = "#000";
    searchInput.style.caretColor = "#000";
  } else if (!isLight && window.innerWidth > 768) {
    // Dark Mode + Desktop
    searchInput.style.color = "#fff";
    searchInput.style.caretColor = "#fff";
  } else {
    searchInput.style.color = "#000";
    searchInput.style.caretColor = "#000";
  }
}

applyResponsiveInputStyles();

window.addEventListener("resize", applyResponsiveInputStyles);

toggleBtn.onclick = () => {
  if (isLight) {
    document.body.style.backgroundColor = "#2a2f38";
    document.body.style.color = "#fff";
    locationLabel.style.backgroundColor = "#2a2f38";
    locationLabel.style.color = "#fff";
    searchInput.style.backgroundColor = "#2a2f38";
    container.style.border = "2px solid #fff";
    applyResponsiveInputStyles();
  } else {
    document.body.style.backgroundColor = "#e6f7f1";
    document.body.style.color = "#000";
    locationLabel.style.backgroundColor = "#e6f7f1";
    locationLabel.style.color = "#000";
    searchInput.style.backgroundColor = "#e6f7f1";
    searchInput.style.color = "#000";
    container.style.border = "2px solid #000";
  }

  isLight = !isLight;
};

const messages = [
  "Fetching data from the clouds...",
  "Analyzing wind patterns...",
  "Checking satellite visibility...",
  "Almost there..."
];

function isEmpty(value) {
  return !value || value.trim() === "";
}

openDialog.onclick = () => {
  if (isEmpty(searchInput.value)) {
    alert("Enter Location, then proceed!");
    return;
  }

  dialog.style.display = "flex";
  dialogMessage.innerText = "";

  messages.forEach((msg, index) => {
    setTimeout(() => {
      dialogMessage.innerHTML = `<span class="dots">${msg}</span>`;
    }, index * 2000);
  });

  setTimeout(() => {
    dialogMessage.innerText = "Just check outside the window !!🫡";
  }, messages.length * 2000);

  setTimeout(() => {
    dialog.style.display = "none";
  }, messages.length * 2500);
};
