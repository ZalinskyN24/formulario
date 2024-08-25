document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coleta os dados do formulário
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    // Configura o pedido de envio
    fetch('https://api.example.com/submit', { // Substitua com o endpoint da sua API
        method: 'POST',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImduemxqeGJtcW14dGtyd2tqaG5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1NTUyMDcsImV4cCI6MjA0MDEzMTIwN30.OVHBKoVFlFKwUzywnmt4wervrwJJNmZ4EdcGUIrRrDY',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Dados enviados com sucesso!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Erro ao enviar os dados.');
    });
});
