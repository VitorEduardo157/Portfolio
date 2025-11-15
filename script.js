// ========== 1. Scroll suave ==========
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
    });
});


// ========== 2. Navbar que muda ao rolar ==========
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("nav-active");
    } else {
        navbar.classList.remove("nav-active");
    }
});


// ========== 3. Animação de fade-in para elementos comuns ==========
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

fadeElements.forEach(el => observer.observe(el));


// ========== 4. Botão "Voltar ao Topo" ==========
const topBtn = document.createElement("button");
topBtn.innerText = "↑";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "flex" : "none";
});


// ========== 5. Atualizar ano automaticamente ==========
const footer = document.querySelector("footer");
if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} - Feito por Vitor`;
}


// ========== 6. Tooltip automático no email ==========
const email = document.querySelector(".email-link");

if (email) {
    email.addEventListener("mouseenter", () => {
        email.setAttribute("title", "Clique para enviar um e-mail");
    });
}
