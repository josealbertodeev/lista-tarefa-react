// Importa a função createGlobalStyle da biblioteca styled-components
import { createGlobalStyle } from 'styled-components';

// createGlobalStyle cria estilos que se aplicam em toda a aplicação
// É como um "reset CSS" ou estilos base que afetam todos os elementos
const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;     /* Remove margem padrão do navegador */
        padding: 0;    /* Remove espaçamento interno padrão */
        box-sizing: border-box; /* Faz com que padding e border sejam incluídos no tamanho total */
        font-family: 'Roboto', sans-serif; /* Define fonte padrão para toda aplicação */
    }
`;

// Exporta o componente de estilo global para ser usado em outros arquivos
export default GlobalStyle;