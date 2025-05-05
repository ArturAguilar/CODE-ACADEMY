document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    // Número de WhatsApp para onde a mensagem será enviada (substitua pelo seu número)
    let telefone = "5521976838012"; // Exemplo: 5581999999999 (código do país + DDD + número)

    // Formata a mensagem para o WhatsApp
    let texto = `Olá! Meu nome é ${nome}.\nMeu e-mail: ${email}\n\n${mensagem}`;

    // Codifica a mensagem para a URL
    let url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    // Redireciona para o WhatsApp
    window.open(url, "_blank");
});