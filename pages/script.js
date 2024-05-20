document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const emailWarning = document.getElementById("emailWarning");

  emailInput.addEventListener("input", function () {
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
      // Jika input kosong, sembunyikan pesan peringatan
      emailWarning.style.display = "none";
    } else {
      if (!emailRegex.test(email)) {
        // Jika format email tidak valid, tampilkan pesan peringatan
        emailWarning.style.display = "block";
      } else {
        // Jika format email valid, sembunyikan pesan peringatan
        emailWarning.style.display = "none";
      }
    }
  });
});
