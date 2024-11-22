document.addEventListener("DOMContentLoaded", function() {
    // Rolagem suave para as seções ao clicar nos links de navegação
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Exibir uma mensagem ao clicar nos links de contato
    document.querySelectorAll(".img-link").forEach(contactLink => {
        contactLink.addEventListener("click", function() {
            const responseMessage = document.getElementById("responseMessage");
            responseMessage.innerText = "Link de contato acessado com sucesso!";
            responseMessage.style.color = "green";

            setTimeout(() => {
                responseMessage.innerText = ""; // Limpa a mensagem após 3 segundos
            }, 3000);
        });
    });

    // Criação do botão "Voltar ao Topo"
    const backToTopButton = document.createElement("button");
    backToTopButton.innerText = "⬆️ Topo";
    backToTopButton.id = "backToTop";
    backToTopButton.style.display = "none";
    document.body.appendChild(backToTopButton);

    // Mostrar o botão ao rolar a página para baixo
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Rolagem suave para o topo ao clicar no botão
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
