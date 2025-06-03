// Importa StrictMode do React - ajuda a identificar problemas no código durante desenvolvimento
import { StrictMode } from 'react'
// Importa createRoot - função moderna do React 18 para renderizar aplicações
import { createRoot } from 'react-dom/client'
// Importa o componente principal da aplicação
import App from './App.jsx'
// Importa os estilos globais da aplicação
import GlobalStyle from './globalStyles.js'

// Ponto de entrada da aplicação React
// Busca o elemento HTML com id 'root' e renderiza a aplicação dentro dele
createRoot(document.getElementById('root')).render(
  // StrictMode ativa verificações extras durante desenvolvimento
  <StrictMode>
    {/* Componente que aplica estilos CSS globais em toda aplicação */}
    <GlobalStyle />
    {/* Componente principal que contém toda lógica da aplicação */}
    <App />
  </StrictMode>,
)
