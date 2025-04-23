// Contador de tempo limitado (opcional)
function startCountdown() {
    const countdownElement = document.createElement('div');
    countdownElement.className = 'countdown';
    countdownElement.innerHTML = 'Oferta termina em: <span id="timer">30:00</span>';
    document.querySelector('.offer-details').prepend(countdownElement);

    let time = 30 * 60; // 30 minutos em segundos

    const timer = setInterval(() => {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        document.getElementById('timer').textContent = `${minutes}:${seconds}`;

        if (time <= 0) {
            clearInterval(timer);
        } else {
            time--;
        }
    }, 1000);
}

// Botão de compra
document.getElementById('buy-button').addEventListener('click', function() {
    alert('Redirecionando para a página de pagamento...');
    // Aqui você pode adicionar o redirecionamento real
    // window.location.href = "https://pagamento.com";
});

// Iniciar contador quando a página carregar
window.addEventListener('DOMContentLoaded', startCountdown);