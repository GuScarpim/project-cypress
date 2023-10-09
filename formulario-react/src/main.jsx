/**
 * React: Biblioteca principal do React para criar componentes e trabalhar com a sua sintaxe JSX.
 * ReactDOM: Biblioteca do React para interação com a camada de visualização do DOM.
 * Formulario: Componente React importado de um arquivo chamado formulario.js (provavelmente localizado no mesmo diretório).
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import Formulario from './formulario'

/**
 * ReactDOM.createRoot: Método que cria uma "raiz" para a aplicação React.
 * A raiz é o ponto de entrada para renderizar componentes na árvore de componentes do React.
 * document.getElementById('root'): Obtém o elemento do DOM com o id 'root'. Este é o local onde o aplicativo React será montado.
 */

/**
 * .render(): Método que inicia o processo de renderização dos componentes React.
 * <React.StrictMode>: Um componente especial que envolve os componentes filhos e realiza verificações adicionais durante o desenvolvimento. Isso ajuda a identificar e corrigir práticas desencorajadas antes de uma futura versão do React.
 * <Formulario />: O componente Formulario que foi importado e será renderizado. Este componente representa o formulário da aplicação.
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Formulario />
  </React.StrictMode>
)
