document.addEventListener('DOMContentLoaded', function () {
    // Crear el botón del bot
    const botButton = document.createElement('div');
    botButton.id = 'bot-button';
    botButton.innerHTML = '<img src="./assets/bot.png" alt="Chatbot Icon">';
    document.body.appendChild(botButton);

    // Crear el iframe del bot
    const botIframe = document.createElement('iframe');
    botIframe.id = 'bot-iframe';
    botIframe.src = "https://console.dialogflow.com/api-client/demo/embedded/d529186b-6a62-4397-9296-3d19ca57edf5";
    botIframe.style.display = 'none'; // Ocultar el iframe inicialmente
    botIframe.style.position = 'fixed';
    botIframe.style.bottom = '90px';
    botIframe.style.right = '20px';
    botIframe.style.width = '350px';
    botIframe.style.height = '500px';
    botIframe.style.border = 'none';
    botIframe.style.borderRadius = '10px';
    botIframe.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    botIframe.style.backgroundColor = '#F6F6F6'; // Color de fondo
    botIframe.style.zIndex = '999';
    document.body.appendChild(botIframe);

    // Mostrar/ocultar el iframe al hacer clic en el botón
    botButton.addEventListener('click', function () {
        if (botIframe.style.display === 'none') {
            botIframe.style.display = 'block';
        } else {
            botIframe.style.display = 'none';
        }
    });

     // --- LÓGICA DEL CARRUSEL (sin cambios) ---
     const container = document.querySelector('.card-container');
     const prevBtn = document.getElementById('prevBtn');
     const nextBtn = document.getElementById('nextBtn');
 
     if (container) {
         const getScrollAmount = () => {
             const firstCard = container.querySelector('.card');
             return firstCard ? firstCard.offsetWidth + 25 : 345;
         };
         
         nextBtn.addEventListener('click', () => {
             container.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
         });
 
         prevBtn.addEventListener('click', () => {
             container.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
         });
     }
});