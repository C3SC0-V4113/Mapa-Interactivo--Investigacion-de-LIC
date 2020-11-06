function switchSheet() {
  let theme = document.getElementById("theme");

  if (theme.getAttribute("href") == "css/light-mode.css") {
    console.log('modo oscuro')
    theme.href = "css/dark-mode.css";
  } else {
    console.log('modo claro')
    theme.href = "css/light-mode.css";
  }
}
function switchSheet1() {
  let theme = document.getElementById("theme");

  if (theme.getAttribute("href") == "../css/light-mode.css") {
    console.log('modo oscuro')
    theme.href = "../css/dark-mode.css";
  } else {
    console.log('modo claro')
    theme.href = "../css/light-mode.css";
  }
}