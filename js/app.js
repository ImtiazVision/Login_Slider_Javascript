// console.log('Test');

window.onload = function () {
  let emailState = false;
  // adding event listener and creating an anonymous arrow function
  let emailModal = document.getElementsByClassName("email-modal")[0];

  // console.log(emailModal);

  let closeButton = document.getElementsByClassName(
    "email-modal__close-btn"
  )[0];

  let emailInput = document.getElementsByClassName("email-modal__input")[0];

  let emailButton = document.getElementsByClassName("email-modal__button")[0];

  let thankContainers = document.getElementsByClassName("email-thank")[0];
  console.log(thankContainers);

  let declineOffer = document.getElementsByClassName(
    "email-modal__decline-offer"
  )[0];

  function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  let showModal = () => {
    if (emailState == false) {
      emailModal.classList.add("email-modal--visible");
      emailState = true;
    }
  };

  let closeModal = () => {
    emailModal.classList.remove("email-modal--visible");
  };

  let addErrors = () => {
    document
      .getElementsByClassName("email-modal__form-group")[0]
      .classList.add("email-modal__form-group--error");
    document
      .getElementsByClassName("email-modal__error-message")[0]
      .classList.add("email-modal__error-message--active");
  };

  let removeErrors = () => {
    document
      .getElementsByClassName("email-modal__form-group")[0]
      .classList.remove("email-modal__form-group--error");
    document
      .getElementsByClassName("email-modal__error-message")[0]
      .classList.remove("email-modal__error-message--active");
  };

  let showThankMessage = () => {
    thankContainers.classList.add("email-thank--success");
    setTimeout(() => {
      closeModal(); 
    }, 3000);
  };

  closeButton.addEventListener("click", () => {
    // emailModal.classList.remove('email-modal--visible');
    closeModal();
  });

  emailInput.addEventListener("click", () => {
    removeErrors();
  });

  emailButton.addEventListener("click", () => {
    if (emailIsValid(emailInput.value)) {
      // console.log(emailInput.value);
      showThankMessage();
    } else {
      // document.getElementsByClassName('email-modal__form-group')[0].classList.add('email-modal__form-group--error');
      // document.getElementsByClassName('email-modal__error-message')[0].classList.add('email-modal__error-message--active');
      // alert('This is not a valid email!!!');
      addErrors();
    }
  });

  declineOffer.addEventListener("click", () => {
    closeModal();
  });

  document.body.addEventListener("mouseleave", () => {
    showModal();
    // console.log('mouse left');
  });

  // console.log(closeModal);
  console.log(document);
};
