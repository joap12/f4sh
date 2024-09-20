document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name && email) {
        alert(`Obrigado por se inscrever, ${name}!`);
        document.getElementById("newsletter-form").reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
