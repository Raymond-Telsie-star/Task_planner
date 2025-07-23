function toggleMenu(id) {
  const menu = document.getElementById(id);
  console.log("Clicked:", id); 
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}
