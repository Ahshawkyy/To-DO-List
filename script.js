const input = document.querySelector("input");
const button = document.querySelector("button");
const container = document.getElementById("container");
const form = document.querySelector("form");
const upfav = document.querySelector(".iconfav");


container.addEventListener("click", (eo) => {
  // if (eo.target.className == "fa-solid fa-trash-can") {
  //   eo.target.parentElement.parentElement.parentElement.remove();
  // } else if (eo.target.className == "fa-solid fa-check") {
  //   eo.target.parentElement.parentElement.parentElement.classList.add("done");

  //   eo.target.parentElement.classList.add("del");

  //   const tumb = `
  //     <span class="icohou icon" style="opacity: 1;">
  //     <i class="fa-solid fa-thumbs-up"></i>
  //     </span>
  //     `;

  //   eo.target.parentElement.parentElement.innerHTML += tumb;
  // } else if (eo.target.className == "fa-solid fa-up-long") {
  //   eo.target.classList.add("del");
  //   const fav = `
  //     <span class="icohou icon" style="opacity: 1; color: yellow">
  //     <i class="fa-solid fa-star"></i>
  //     </span>
  //     `;
  //   eo.target.parentElement.classList.remove("icon");
  //   container.prepend(eo.target.parentElement.parentElement);
  //   eo.target.parentElement.innerHTML += fav;
  // }



switch (eo.target.className) {
  case "fa-solid fa-trash-can":
    eo.target.parentElement.parentElement.parentElement.remove();
    break;

    case "fa-solid fa-check":
      eo.target.parentElement.parentElement.parentElement.classList.add("done");

      eo.target.parentElement.classList.add("del");
  
      const tumb = `
        <span class="icohou icon" style="opacity: 1;">
        <i class="fa-solid fa-thumbs-up"></i>
        </span>
        `;
  
      eo.target.parentElement.parentElement.innerHTML += tumb;;
    break;

    case "fa-solid fa-up-long":
      eo.target.classList.add("del");
      const fav = `
        <span class="icohou icon" style="opacity: 1; color: yellow">
        <i class="fa-solid fa-star"></i>
        </span>
        `;
      eo.target.parentElement.classList.remove("icon");
      container.prepend(eo.target.parentElement.parentElement);
      eo.target.parentElement.innerHTML += fav;;
    break;
  
  default:
    break;
}




























});

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const task = `
  
      <div class="task">
        <span class="iconfav icon" id="tumb">
          <i class="fa-solid fa-up-long"></i>
        </span>
        <p>${input.value}</p>
        <div>
          <span class="icotrash icon">
            <i class="fa-solid fa-trash-can"></i>
          </span>
          <span class="icohou icon">
            <i class="fa-solid fa-check"></i>
          </span>
        </div>
      </div>
  `;
  container.innerHTML += task;
  input.value = "";
});

//  <i class="fa-solid fa-thumbs-up"></i>
