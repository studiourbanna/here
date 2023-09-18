/*
 * Encurtador de links
 * Autor: Camila Oliveira
 * Data: 18/09/2023
 */

const brandLinks = /ourbanna\.com|portalurbanna\.com\.br/;
var domain = "";

document.getElementById("myinput").onclick = function () {
  var link = document.getElementById("linkinput").value;
  if (!link.trim() || link < "https://" || link < "http://") {
    console.log("O link está vazio.");
    document.getElementById("message").innerHTML =
      "<div class='notification is-danger is-danger'>" +
      "<div class='icon-text'>" +
      "<span class='icon has-text-danger'><i class='fas fa-info-warning'></i></span>" +
      "<span><strong>Hm, parece que o link não existe, vamos tentar novamente?</strong></span>" +
      "</span>" +
      "</div>" +
      "</div>";
  } else {
    // Verifica se o link não contém os domínios permitidos
    if (!brandLinks.test(link)) {
      domain = "do.encurtai.com";
      console.log("O link não contém os domínios permitidos.");
    } else {
      domain = "n.ourbanna.com";
      console.log("O link contém um dos domínios permitidos.");
    }
    var data = {
      domain: domain,
      originalURL: link,
      allowDuplicates: false
    };
    fetch("https://api.short.cm/links/public", {
      method: "post",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        authorization: "FXV9LhBc44cjRRsLgyP6vg7DTUgrXvmY"
      },
      body: JSON.stringify(data)
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        document.getElementById("message").innerHTML =
          "<div class='notification is-link is-light'>" +
          "<div class='icon-text'>" +
          "<span class='icon has-text-info'><i class='fas fa-info-circle'></i></span>" +
          "<span>Seu novo link é: " +
          "<strong><a href='" +
          data.shortURL +
          "' target='_blank' class='is-white'>" +
          data.shortURL +
          "</a></strong>" +
          "</span>" +
          "</div>" +
          "</div>";
      });
    document.getElementById("linkinput").value = "";
  }
};