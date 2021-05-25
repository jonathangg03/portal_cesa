const $form = document.getElementById("add__form");
const $form_btn = document.getElementById("add__button");

const sendContact = async () => {
  const formData = new FormData($form);
  const date = formData.get("date").replace("T", " - ");
  try {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client: formData.get("client"),
        name: formData.get("name"),
        phone: formData.get("phone"),
        date: formData.get("date"),
        attendant: formData.get("attendant"),
        detail: formData.get("detail"),
      }),
    };

    const response = await fetch(
      "https://portal-cesa.vercel.app/api/contact",
      fetchOptions
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

$form_btn.addEventListener("click", async (event) => {
  event.preventDefault();
  await sendContact();
});
