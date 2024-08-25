document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coleta os dados do formulário
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    // Configura o pedido de envio para o Supabase
    fetch('https://gnzljxbmqmxtkrwkjhni.supabase.co/rest/v1/seu_endpoint', { // Substitua 'seu_endpoint' pelo nome da tabela ou endpoint correto
        method: 'POST',
        headers: {
            'Authorization': 'Bearer OVHBKoVFlFKwUzywnmt4wervrwJJNmZ4EdcGUIrRrDY', // Use a chave pública fornecida
            'Content-Type': 'application/json',
            'apikey': 'OVHBKoVFlFKwUzywnmt4wervrwJJNmZ4EdcGUIrRrDY', // Use a chave pública fornecida
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(error => {
                throw new Error(`Error: ${error.message}`);
            });
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        alert('Dados enviados com sucesso!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Erro ao enviar os dados.');
    });
});
