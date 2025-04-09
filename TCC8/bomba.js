function abrirPopup(role) {
  var popup = document.getElementById("popup");
  var popupText = document.getElementById("popup-text");

  if (role === "back") {
    popupText.innerText = "O desenvolvedor Back-end gerencia servidores, bancos de dados e a lógica do funcionamento do site.";
  } else if (role === "front") {
    popupText.innerText = "O desenvolvedor Front-end cria a interface e a experiência do usuário no site.";
  }

  popup.classList.add("ativo");
}

function fecharPopup() {
  var popup = document.getElementById("popup");
  popup.classList.remove("ativo");
}

document.querySelectorAll(".popup-trigger").forEach(item => {
  item.addEventListener("click", function () {
    abrirPopup(this.getAttribute("data-role"));
  });
});