

const formEl = document.querySelector("form");
formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" ||  password.value === "") {
    return alert("всі поля повинні бути заповнені");
  }

  console.log({
    email: email.value,
    password: password.value,
  })
  // (`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

