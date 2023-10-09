import { useState } from 'react'
//useState: Um hook do React que permite adicionar estado a componentes de função.

// improtacao css
import './formulario.css'

// Declaração de um componente funcional chamado Formulario.

function Formulario() {
  // Estado para armazenar os dados do formulário
  // Utilização do hook useState para criar um estado formData que armazenará os dados do formulário. O estado inicial inclui campos vazios para 'nome', 'email' e 'senha'.
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  })

  // Função para lidar com as alterações nos campos do formulário
  // Uma função que lida com as alterações nos campos do formulário. Ela é chamada sempre que um campo é alterado e atualiza o estado formData com os novos valores.
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Função para lidar com o envio do formulário
  // Uma função que lida com o envio do formulário.
  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode adicionar lógica para processar os dados do formulário
    alert(
      `Dados do formulário:\nNome: ${formData.nome}\nEmail: ${formData.email}\nSenha: ${formData.senha}`
    )
  }

  return (
    // O JSX retornado pelo componente, que representa a estrutura do formulário e sua aparência na interface do usuário. Está envolvido em uma div com a classe CSS 'App'.
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

// Exporta o componente Formulario para que possa ser importado e utilizado em outros lugares.s
export default Formulario
