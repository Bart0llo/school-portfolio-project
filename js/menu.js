
function Menu() {
    const x = document.getElementById('links');

    if (x.style.display === "flex") {
        x.style.display = "none";
      } else {
        x.style.display = "flex";
      }
}