const formSubmit = document.querySelector(".login-form");
console.log(formSubmit);
formSubmit.addEventListener("submit", handleSubmitForm);

function handleSubmitForm(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (!email.value.trim() || !password.value.trim()) {
    return alert("All fields must be filled!");
  } else {
    const info = {
      email: email.value,
      password: password.value,
    };
    console.log(info);
    event.currentTarget.reset();
  }
}
