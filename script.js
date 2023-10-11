document.addEventListener("DOMContentLoaded", function () {
  const directorButton = document.getElementById("directorButton");

  directorButton.addEventListener("click", function () {
    const popupContainer = document.createElement("div");
    popupContainer.classList.add("popup-container");

    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
                  <button class="popup__close-btn" id="closeButton"> </button>
                  <h2 class="popup__title">Написать директору</h2>
                  <form class="popup__form">
                  <p class="popup__input_title">Как к Вам обращаться</p>
                  <input class="popup__input" type="text" id="nameInput" placeholder="Ваше имя или название организации">
                  <p class="popup__input_title">Контакты для связи *</p>
                  <input class="popup__input" type="tel" id="tel" placeholder="Контакты для связи" required>
                  <p class="popup__input_title">Текст сообщения</p>
                  <textarea class="popup__textarea" type="text" placeholder="Введите текст сообщения"></textarea>
                  <p class="popup__text_rules">Отправляя данные, Вы соглашаетесь с</p>
                  <a href="#" class="popup__link">Правилами обработки персональных данных</a>
                  <button class="popup__button" id="submitButton">ОТПРАВИТЬ</button>
                  </form>
              `;

    popupContainer.appendChild(popup);
    document.body.appendChild(popupContainer);

    let nameInput = document.getElementById("nameInput");

    nameInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, "");
    });

    function closePopup() {
      const popupContainer = document.querySelector(".popup-container");
      if (popupContainer) {
        document.body.removeChild(popupContainer);
        document.body.style.overflow = "auto";
      }
    }

    const closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click", closePopup);

    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", function () {
      closePopup();
    });

    window.addEventListener("click", function (event) {
      if (event.target === popupContainer) {
        closePopup();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closePopup();
      }
    });

    document.body.style.overflow = "hidden";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");

  menuButton.addEventListener("click", function () {
    const popupContainer = document.createElement("div");
    popupContainer.classList.add("popup-container");

    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
                  <button class="popup__close-btn" id="closeButton"> </button>
                  <h2 class="popup__title">Заказать звонок</h2>
                  <p class="popup__text">Оставьте свой номер, мы перезвоним в ближайшее время.</p>
                  <p class="popup__input_title">Как к Вам обращаться</p>
                  <input class="popup__input" type="text" id="nameInput" placeholder="Введите Ваше имя">
                  <p class="popup__input_title">Ваш номер телефона *</p>
                  <input class="popup__input" type="tel" id="tel" placeholder="+7 (___) ___-__-__" required>
                  <p class="popup__text_rules">Отправляя данные, Вы соглашаетесь с</p>
                  <a href="#" class="popup__link">Правилами обработки персональных данных</a>
                  <button class="popup__button" id="submitButton">ОТПРАВИТЬ</button>
              `;

    popupContainer.appendChild(popup);
    document.body.appendChild(popupContainer);

    let nameInput = document.getElementById("nameInput");

    nameInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, "");
    });

    let phoneInput = document.getElementById("tel");

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();

      let matrix = "+7 (___) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        newValue = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });

      i = newValue.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        newValue = newValue.slice(0, i);
      }

      let reg = matrix
        .substr(0, this.value.length)
        .replace(/_+/g, function (a) {
          return "\\d{1," + a.length + "}";
        })
        .replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (
        !reg.test(this.value) ||
        this.value.length < 5 ||
        (keyCode > 47 && keyCode < 58)
      )
        this.value = newValue;
      if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    phoneInput.addEventListener("input", mask, false);
    phoneInput.addEventListener("focus", mask, false);
    phoneInput.addEventListener("blur", mask, false);
    phoneInput.addEventListener("keydown", mask, false);
    phoneInput.addEventListener("mouseup", (event) => {
      event.preventDefault();
      if (phoneInput.value.length < 4) {
        phoneInput.setSelectionRange(4, 4);
      } else {
        phoneInput.setSelectionRange(
          phoneInput.value.length,
          phoneInput.value.length
        );
      }
    });

    function closePopup() {
      const popupContainer = document.querySelector(".popup-container");
      if (popupContainer) {
        document.body.removeChild(popupContainer);
        document.body.style.overflow = "auto";
      }
    }

    const closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click", closePopup);

    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", function () {
      closePopup();
    });

    window.addEventListener("click", function (event) {
      if (event.target === popupContainer) {
        closePopup();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closePopup();
      }
    });

    document.body.style.overflow = "hidden";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const buttonControl = document.getElementById("buttonControl");

  buttonControl.addEventListener("click", function () {
    const popupContainer = document.createElement("div");
    popupContainer.classList.add("popup-container");

    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
                  <button class="popup__close-btn" id="closeButton"> </button>
                  <h2 class="popup__title">Контроль качества</h2>
                  <form class="popup__form">
                  <p class="popup__input_title">Как к Вам обращаться</p>
                  <input class="popup__input" type="text" id="nameInput" placeholder="Ваше имя или название организации">
                  <p class="popup__input_title">Контакты для связи *</p>
                  <input class="popup__input" type="tel" id="tel" placeholder="Контакты для связи" required>
                  <p class="popup__input_title">Тип обращения</p>
                <select id="cities" class="popup__input" placeholder="Выберите тип обращения">
                <option value="" disabled selected>Выберите тип обращения</option>
                <option value="problem">Проблема</option>
                <option value="London">Благодарность</option>
                <option value="Berlin">Пожелание</option>
                <option value="New York">Отзыв</option>
                
            </select>
                  <p class="popup__input_title">Опишите ситуацию</p>
                  <textarea class="popup__textarea" type="text" placeholder="Опишите подробно Вашу ситуацию"></textarea>
                  <p class="popup__text_rules">Отправляя данные, Вы соглашаетесь с</p>
                  <a href="#" class="popup__link">Правилами обработки персональных данных</a>
                  <button class="popup__button" id="submitButton">ОТПРАВИТЬ</button>
                  </form>
              `;
    popupContainer.appendChild(popup);
    document.body.appendChild(popupContainer);

    let nameInput = document.getElementById("nameInput");

    nameInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, "");
    });

    function closePopup() {
      const popupContainer = document.querySelector(".popup-container");
      if (popupContainer) {
        document.body.removeChild(popupContainer);
        document.body.style.overflow = "auto";
      }
    }

    const closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click", closePopup);

    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", function () {
      closePopup();
    });

    window.addEventListener("click", function (event) {
      if (event.target === popupContainer) {
        closePopup();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closePopup();
      }
    });

    document.body.style.overflow = "hidden";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cooperationButton = document.getElementById("cooperationButton");

  cooperationButton.addEventListener("click", function () {
    const popupContainer = document.createElement("div");
    popupContainer.classList.add("popup-container");

    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
                  <button class="popup__close-btn" id="closeButton"> </button>
                  <h2 class="popup__title">Сотрудничество</h2>
                  <form class="popup__form">
                  <p class="popup__input_title">Как к Вам обращаться</p>
                  <input class="popup__input" type="text" id="nameInput" placeholder="Ваше имя или название организации">
                  <p class="popup__input_title">Контакты для связи *</p>
                  <input class="popup__input" type="tel" id="tel" placeholder="Контакты для связи" required>
                  <p class="popup__input_title">Текст сообщения</p>
                  <textarea class="popup__textarea" type="text" placeholder="Введите текст сообщения"></textarea>
                  <p class="popup__input_title">Прикрепить файл</p>
                  <input class="popup__input" type="file" id="fileInput" placeholder="Выберите файл">
                  <p class="popup__text_rules">Отправляя данные, Вы соглашаетесь с</p>
                  <a href="#" class="popup__link">Правилами обработки персональных данных</a>
                  <button class="popup__button" id="submitButton">ОТПРАВИТЬ</button>
                  </form>
              `;

    popupContainer.appendChild(popup);
    document.body.appendChild(popupContainer);

    let nameInput = document.getElementById("nameInput");

    nameInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, "");
    });

    function closePopup() {
      const popupContainer = document.querySelector(".popup-container");
      if (popupContainer) {
        document.body.removeChild(popupContainer);
        document.body.style.overflow = "auto";
      }
    }

    const closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click", closePopup);

    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", function () {
      closePopup();
    });

    window.addEventListener("click", function (event) {
      if (event.target === popupContainer) {
        closePopup();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closePopup();
      }
    });

    document.body.style.overflow = "hidden";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const headers = document.querySelectorAll('.column__header');
  const blocks = Array.from(document.querySelectorAll('.advantages__block'));
  const container = document.querySelector('.advantages__flex');

  headers.forEach(header => {
      header.addEventListener('click', function() {
          const content = this.nextElementSibling;
          if (content.style.display === 'none' || !content.style.display) {
              content.style.display = 'block';
              header.querySelector(".footer__down").style.transform = "rotate(180deg)";
          } else {
              content.style.display = 'none';
              header.querySelector(".footer__down").style.transform = "rotate(0deg)";
          }
      });
  });

  function slideRight() {
      const firstBlock = blocks.shift();
      blocks.push(firstBlock);
      container.appendChild(firstBlock);
      adjustVisibleBlocks();
  }

  function slideLeft() {
      const lastBlock = blocks.pop();
      blocks.unshift(lastBlock);
      container.insertBefore(lastBlock, blocks[0]);
      adjustVisibleBlocks();
  }

  document.getElementById('slideRight').addEventListener('click', slideRight);
  document.getElementById('slideLeft').addEventListener('click', slideLeft);

  function adjustVisibleBlocks() {
      let blocksToShow;
      if (window.innerWidth >= 1221) {
          blocksToShow = 5;
      } else if (window.innerWidth >= 769) {
          blocksToShow = 4;
      } else if (window.innerWidth >= 536) {
          blocksToShow = 3;
      } else if (window.innerWidth >= 321) {
          blocksToShow = 2;
      } else {
          blocksToShow = 1;
      }

      blocks.forEach(block => block.style.display = 'none');
      for (let i = 0; i < blocksToShow; i++) {
          blocks[i].style.display = 'flex';
      }
  }

  adjustVisibleBlocks();
  window.addEventListener('resize', adjustVisibleBlocks);
});


function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');

  const burger = document.querySelector('.header__burger');
  burger.classList.toggle('cross');
}

document.addEventListener('click', function(event) {
  const menu = document.querySelector('.menu');
  const burger = document.querySelector('.header__burger');

  if (!menu.contains(event.target) && !burger.contains(event.target) && menu.classList.contains('active')) {
      menu.classList.remove('active');
      burger.classList.remove('cross');
  }
});

document.addEventListener('keydown', function(event) {
  const menu = document.querySelector('.menu');
  const burger = document.querySelector('.header__burger');

  if (event.key === 'Escape' && menu.classList.contains('active')) {
      menu.classList.remove('active');
      burger.classList.remove('cross');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const headers = document.querySelectorAll('.column__header');
  const blocks = Array.from(document.querySelectorAll('.advantages__block'));
  const container = document.querySelector('.advantages__flex');

  headers.forEach(header => {
      header.addEventListener('click', function() {
          const content = this.nextElementSibling;
          if (content.style.display === 'none' || !content.style.display) {
              content.style.display = 'block';
              header.querySelector(".footer__down").style.transform = "rotate(180deg)";
          } else {
              content.style.display = 'none';
              header.querySelector(".footer__down").style.transform = "rotate(0deg)";
          }
      });
  });

  function slideRight() {
      const firstBlock = blocks.shift();
      blocks.push(firstBlock);
      container.appendChild(firstBlock);
      adjustVisibleBlocks();
  }

  function slideLeft() {
      const lastBlock = blocks.pop();
      blocks.unshift(lastBlock);
      container.insertBefore(lastBlock, blocks[0]);
      adjustVisibleBlocks();
  }

  document.getElementById('slideRight').addEventListener('click', slideRight);
  document.getElementById('slideLeft').addEventListener('click', slideLeft);

  function adjustVisibleBlocks() {
      let blocksToShow;
      if (window.innerWidth >= 1221) {
          blocksToShow = 5;
      } else if (window.innerWidth >= 769) {
          blocksToShow = 4;
      } else if (window.innerWidth >= 536) {
          blocksToShow = 3;
      } else if (window.innerWidth >= 490) {
          blocksToShow = 2;
      } else {
          blocksToShow = 1;
      }

      blocks.forEach(block => block.style.display = 'none');
      for (let i = 0; i < blocksToShow; i++) {
          blocks[i].style.display = 'flex';
      }
  }

  adjustVisibleBlocks();
  window.addEventListener('resize', adjustVisibleBlocks);
});

document.addEventListener('click', function(event) {
  const menu = document.querySelector('.menu');
  const burger = document.querySelector('.header__burger');

  if (!menu.contains(event.target) && !burger.contains(event.target) && menu.classList.contains('active')) {
      menu.classList.remove('active');
      burger.classList.remove('cross');
  }
});

document.addEventListener('keydown', function(event) {
  const menu = document.querySelector('.menu');
  const burger = document.querySelector('.header__burger');

  if (event.key === 'Escape' && menu.classList.contains('active')) {
      menu.classList.remove('active');
      burger.classList.remove('cross');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  let headers = document.querySelectorAll('.column__header');

  headers.forEach(function(header) {
      header.addEventListener('click', function() {
          if (this.nextElementSibling.style.display === 'none' || !this.nextElementSibling.style.display) {
              this.nextElementSibling.style.display = 'block';
              header.querySelector(".footer__down").style.transform = "rotate(180deg)";
          } else {
              this.nextElementSibling.style.display = 'none';
              header.querySelector(".footer__down").style.transform = "rotate(0deg)";
          }
      });
  });
});