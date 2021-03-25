$("#contactForm").submit(function (e) {
	e.preventDefault();
	var serviceType = document.getElementById("serviceType");
	var name = document.getElementById("name");
	var phone = document.getElementById("phoneNumber");
	var message = document.getElementById("message");

	validPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

	if (!name.value || !message.value || !phone.value) {
		alert("Fill all inputs");
	} else if (!phone.value.match(validPhone)) {
		alert("Invalid phone Number");
	} else {
		$.ajax({
			url: "https://formspree.io/f/mwkaerly",
			method: "POST",
			data: $(this).serialize(),
			dataType: "Json",
		});
        alert("Thank you for your feedback.");
		$(this).get(0).reset();
        document.getElementById("cmsgSubmit").innerText = "Form submitted successfuly"
	}
});
