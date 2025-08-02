    const form = document.getElementById("contact-form");
    const result = document.getElementById("result");

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      const object = {};
      formData.forEach((value, key) => {
        object[key] = value;
      });
      const json = JSON.stringify(object);
      result.textContent = "Please wait...";

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json
      })
      .then(async (response) => {
        let json = await response.json();
        if (response.status === 200) {
          result.textContent = json.message;
          result.style.color = "green";
        } else {
          result.textContent = json.message;
          result.style.color = "red";
        }
      })
      .catch((error) => {
        result.textContent = "Something went wrong!";
      })
      .finally(() => {
        form.reset();
        setTimeout(() => {
          result.textContent = "";
        }, 5000);
      });
    });
      const phoneInput = document.getElementById('phone');
  phoneInput.addEventListener('input', () => {
    phoneInput.value = phoneInput.value.replace(/\D/g, '');
  });