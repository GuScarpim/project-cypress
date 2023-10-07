import React, { useState } from 'react'
import './formulario.css'

function Formulario() {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  })

  // Função para lidar com as alterações nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode adicionar lógica para processar os dados do formulário
    alert('Dados do formulário:', formData)
  }

  return (
    <div className='App'>
      <h1>Formulário de Cadastro</h1>
      <form onSubmit={handleSubmit}>
        {/* Campo de Nome */}
        <div>
          <label htmlFor='nome'>Nome:</label>
          <input
            type='text'
            id='nome'
            name='nome'
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campo de Email */}
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campo de Senha */}
        <div>
          <label htmlFor='senha'>Senha:</label>
          <input
            type='password'
            id='senha'
            name='senha'
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </div>

        {/* Botão de Envio */}
        <button type='submit'>Cadastrar</button>
      </form>
    </div>
  )
}

export default Formulario
