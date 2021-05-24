const $form = document.getElementById("add__form");
const $form_btn = document.getElementById("add__button");

const sendContact = async () => {
  const formData = new FormData($form);
  try {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: formData.get("firstName"),
        secondName: formData.get("secondName"),
        firstLastname: formData.get("firstLastname"),
        secondLastname: formData.get("secondLastname"),
        email: formData.get("email"),
        prefix: formData.get("prefix"),
        phone: formData.get("phone"),
        cellphone: formData.get("cellphone"),
        extension: formData.get("extension"),
        tags: formData.get("tags"),
      }),
    };

    const response = await fetch(
      "http://localhost:3000/api/contact",
      fetchOptions
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

$form_btn.addEventListener("click", async (event) => {
  event.preventDefault();
  await sendContact();
});
