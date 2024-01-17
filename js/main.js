let child = document.querySelectorAll("div.child");

child.forEach((elem) => {
  elem.addEventListener("click", function (e) {
    child.forEach((elem) => {
      elem.style.backgroundColor = "whitesmoke";

      RedCode = Number(Math.random() * 255);
      BlueCode = Number(Math.random() * 255);
      GreenCode = Number(Math.random() * 255);
    });

    e.target.style.backgroundColor = `rgba(${RedCode},${BlueCode},${GreenCode},0.5)`;

    if (e.target.nextElementSibling) {
      e.target.nextElementSibling.style.backgroundColor = `rgb(${RedCode},${BlueCode},${GreenCode})`;

      e.target.nextElementSibling.classList.toggle("rotate");
    }
    if (e.target.previousElementSibling) {
      e.target.previousElementSibling.style.backgroundColor = `rgb(${RedCode},${BlueCode},${GreenCode})
      `;

      e.target.previousElementSibling.classList.toggle("rotate");
    }
  });
});
