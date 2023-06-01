document.getElementById("myinput").onclick = function () {
    var link = document.getElementById("linkinput").value;
    var data = {
        "domain": "do.encurtai.com",
        "originalURL": link,
        "allowDuplicates": false
    };
    fetch('https://api.short.cm/links/public', {
        method: 'post',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': 'FXV9LhBc44cjRRsLgyP6vg7DTUgrXvmY'
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        return response.json();
    })
        .then(function (data) {
            document.getElementById("message").innerHTML =
                "<div class='notification is-link is-light'>"+
                  "<div class='icon-text'>"+
                    "<span class='icon has-text-info'><i class='fas fa-info-circle'></i></span>"+
                    "<span>Seu novo link é: " +
                    "<strong><a href='" + data.shortURL + "' target='_blank' class='is-white'>"
                      + data.shortURL + "</a></strong>"+
                    "</span>" +
                  "</div>"+
              "</div>"
        })
    document.getElementById("linkinput").value = '';
}

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});