// Seleciona todas as seções que começam ocultas
const sections = document.querySelectorAll('.escondido');

// Cria o observador que vigia a entrada dos elementos na tela
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Se o elemento estiver visível na tela
    if (entry.isIntersecting) {
      entry.target.classList.add('aparecer');
      
      // Opcional: Se quiser que a animação aconteça APENAS UMA VEZ, 
      // desative a linha abaixo. Caso contrário, ela some e aparece de novo.
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.15 // Dispara quando 15% da seção estiver visível na tela
});

// Passa o observador em cada uma das seções
sections.forEach((section) => observer.observe(section));
