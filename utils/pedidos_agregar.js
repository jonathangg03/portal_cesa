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
<<<<<<< HEAD
        date: date,
=======
        date: formData.get("date"),
>>>>>>> 1d51cdf055e050dc570aa388f80522bc6451a4be
        attendant: formData.get("attendant"),
        detail: formData.get("detail"),
      }),
    };

    const response = await fetch(
<<<<<<< HEAD
      "https://portal-cesa.vercel.app/api/request",
      fetchOptions
    );
    const data = await response.json();
    console.log(data);
=======
      "https://portal-cesa.vercel.app/api/contact",
      fetchOptions
    );
    const data = await response.json();
>>>>>>> 1d51cdf055e050dc570aa388f80522bc6451a4be
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

$form_btn.addEventListener("click", async (event) => {
  event.preventDefault();
  await sendContact();
});
