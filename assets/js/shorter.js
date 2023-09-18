//Encurtador

document.getElementById("myinput").onclick = function () {
    var link = document.getElementById("linkinput").value;
    if (link == "") {
      document.getElementById("message").innerHTML =
          "<div class='notification is-danger is-danger'>" +
          "<div class='icon-text'>" +
          "<span class='icon has-text-danger'><i class='fas fa-info-warning'></i></span>" +
          "<span> Hm, parece que o link não existe, vamos tentar novamente?</span>" +
          "</span>" +
          "</div>" +
          "</div>";
    } else if (link == "ourbanna.com" || link == "portalurbanna.com.br/") {
      var data = {
        domain: "n.ourbanna.com",
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
    } else {
      var data = {
      domain: "do.encurtai.com",
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
  };