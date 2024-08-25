import { createClient } from '@supabase/supabase-js'

// Inicialize o cliente do Supabase
const supabaseUrl = 'https://gnzljxbmqmxtkrwkjhni.supabase.co'
const supabaseKey = 'OVHBKoVFlFKwUzywnmt4wervrwJJNmZ4EdcGUIrRrDY' // Sua chave pública
const supabase = createClient(supabaseUrl, supabaseKey)

// Adiciona um ouvinte de evento para o formulário
document.getElementById('cadastroForm').addEventListener('submit', async function(event) {
    event.preventDefault()

    // Coleta os dados do formulário
    const formData = new FormData(this)
    const data = Object.fromEntries(formData.entries())

    // Envia os dados para o Supabase
    const { data: response, error } = await supabase
        .from('sua_tabela') // Substitua 'sua_tabela' pelo nome da sua tabela
        .insert([data])

    if (error) {
        console.error('Erro ao enviar dados:', error)
        alert('Erro ao enviar os dados.')
    } else {
        console.log('Dados enviados com sucesso:', response)
        alert('Dados enviados com sucesso!')
    }
})
