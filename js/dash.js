let dashboard = document.querySelector(".dashboard"),
  links = Array.from(dashboard.querySelectorAll(".links ul li a"));

window.onload = function () {
  if (localStorage.getItem("linkIndex")) {
    links[localStorage.getItem("linkIndex")].classList.add("active");
  }
};
links.forEach((link, index) => {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    links.forEach((link) => {
      link.classList.remove("active");
    });
    this.classList.add("active");
    localStorage.setItem("linkIndex", index);
  });
});
//
//
// setting
let icons = document.querySelectorAll(".toggle-icon");

window.onload = function () {
  icons.forEach((icon, index) => {
    if (localStorage.getItem(index) === null) {
      localStorage.setItem(index, "active");
    }
    if (localStorage.getItem(index) === "active") {
      icon.classList.add("active");
    }
  });
};

//
icons.forEach((icon, index) => {
  icon.addEventListener("click", function (e) {
    this.classList.toggle("active");
    if (this.classList.contains("active")) {
      localStorage.setItem(index, "active");
    } else {
      localStorage.setItem(index, "inactive");
    }
  });
});
//
//
//
// checkboxes

document.addEventListener("DOMContentLoaded", function () {
  let setting = document.querySelector(".check"),
    allboxes = setting.querySelectorAll("input[type = 'checkbox']"),
    isFristVisit = !localStorage.getItem("initialize");
  console.log(isFristVisit);
  if (isFristVisit) {
    if (allboxes.length > 0) {
      localStorage.setItem(allboxes[0].id, "active");
      localStorage.setItem(allboxes[1].id, "active");
      localStorage.setItem("initialize", "true");
    }
  }
  allboxes.forEach((cb) => {
    // if (localStorage.getItem(cb.id) === null) {
    //   localStorage.setItem(cb.id, "active");
    // }
    if (localStorage.getItem(cb.id) === "active") {
      cb.classList.add("active");
      cb.checked = true;
    } else {
      cb.checked = false;
    }
  });

  allboxes.forEach((cb, index) => {
    cb.addEventListener("click", function (e) {
      this.classList.toggle("active");
      if (this.classList.contains("active")) {
        localStorage.setItem(this.id, "active");
      } else {
        localStorage.setItem(this.id, "inactive");
      }
    });
  });
});

//
//
//
// radio boxes

document.addEventListener("DOMContentLoaded", function () {
  let backup = document.querySelector(".back-radio"),
    allRadios = backup.querySelectorAll("input[type = 'radio']"),
    isFristVisit = !localStorage.getItem("initializeRadio");
  if (isFristVisit) {
    if (allRadios.length > 0) {
      localStorage.setItem("slected-radio", allRadios[1].id);
      localStorage.setItem("initializeRadio", "true");
    }
  }
  allRadios.forEach((radio) => {
    if (localStorage.getItem("slected-radio") === radio.id) {
      radio.classList.add("active");
      radio.checked = true;
    }
  });
  console.log(allRadios);
  allRadios.forEach((radio) => {
    radio.addEventListener("change", function (e) {
      localStorage.setItem("slected-radio", radio.id);
    });
  });
});
//
//
//

document.addEventListener("DOMContentLoaded", function () {
  const storeBox = document.querySelector(".store"),
    allboxes = storeBox.querySelectorAll(".box");
  allboxes.forEach((box) => {
    box.classList.remove("active");
    if (localStorage.getItem("slected-store")) {
      allboxes[parseInt(localStorage.getItem("slected-store"))].classList.add(
        "active"
      );
    }
  });

  allboxes.forEach((box, index) => {
    box.addEventListener("click", function (e) {
      allboxes.forEach((box) => {
        box.classList.remove("active");
      });
      this.classList.add("active");
      localStorage.setItem("slected-store", index);
    });
  });
});

//
//
//

document.addEventListener("DOMContentLoaded", function () {
  let iconsPro = document.querySelectorAll(".toggle-icon-pro"),
    isFristVisit = !localStorage.getItem("initialize3");
  if (isFristVisit) {
    if (iconsPro.length > 0) {
      localStorage.setItem(iconsPro[0].id, "active");
      localStorage.setItem(iconsPro[1].id, "active");
      localStorage.setItem("initialize3", "true");
    }
  }
  iconsPro.forEach((icon) => {
    if (localStorage.getItem(icon.id) === "active") {
      icon.classList.add("active");
    }
  });

  iconsPro.forEach((icon) => {
    icon.addEventListener("click", function (e) {
      this.classList.toggle("active");
      if (icon.classList.contains("active")) {
        localStorage.setItem(icon.id, "active");
      } else {
        localStorage.setItem(icon.id, "inactive");
      }
    });
  });
});
// localStorage.clear();

document.addEventListener("DOMContentLoaded", function () {
  let friendBox = document.querySelector(".all-friends"),
    removeFriend = friendBox.querySelectorAll(".remove");
  removeFriend.forEach((friend) => {
    friend.addEventListener("click", function (e) {
      let colElement = this.closest(".col");
      colElement.remove();
    });
  });
  console.log(removeFriend);
});
