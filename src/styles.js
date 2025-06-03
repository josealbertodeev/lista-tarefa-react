// Importa a biblioteca styled-components para criar componentes estilizados
import styled from 'styled-components';

// Container principal que ocupa toda a tela
export const Container = styled.div`
  width: 100vw;  /* Largura total da viewport (tela) */
  height: 100vh; /* Altura total da viewport (tela) */
  background: linear-gradient(90deg,#383838 0%, #000000 81.25%); /* Gradiente cinza para preto */
  display: flex; /* Usa flexbox para organizar elementos */
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  
`;

// Caixa branca que contém a lista de tarefas
export const TodoList = styled.div`
  background: #fff; /* Fundo branco */
  padding: 20px;    /* Espaçamento interno de 20px */
`;

// Lista não ordenada para as tarefas
export const List = styled.ul`
  padding: 0;      /* Remove espaçamento interno padrão */
  margin-top: 30px; /* Espaço de 30px no topo */
`;

// Cada item individual da lista de tarefas
export const Item = styled.li`
  font-weight: 400;    /* Peso da fonte normal */
  color: #000000;      /* Texto preto */
  font-size: 15px;     /* Tamanho da fonte */
  background: #e4e4e4; /* Fundo cinza claro */
  box-shadow: 1px 4px 1px rgba(0,0,0,0.3); /* Sombra para dar profundidade */
  border-radius: 5px;  /* Cantos arredondados */
  height: 60px;        /* Altura fixa de 60px */
  list-style: none;    /* Remove os pontinhos da lista */
  margin-bottom: 20px; /* Espaço entre os itens */
  display: flex;       /* Usa flexbox */
  align-items: center; /* Centraliza o texto verticalmente */
  justify-content: center; /* Centraliza o texto horizontalmente */
`;

// Campo de entrada de texto estilizado
export const Input = styled.input` 
  border: 2px solid rgba(209,211,212,0.4); /* Borda cinza transparente */
  border-radius: 5px; /* Cantos arredondados */
  height: 40px;       /* Altura do campo */
  font-size: 15px;    /* Tamanho da fonte */
  font-weight: 400;   /* Peso da fonte normal */
  outline: none;      /* Remove contorno azul padrão quando clicado */
  margin-left: 10px;  /* Espaço à esquerda */
`;

// Botão estilizado para adicionar tarefas
export const Button = styled.button`
  background: #8052ec; /* Cor roxa de fundo */
  border-radius: 5px;  /* Cantos arredondados */
  height: 40px;        /* Altura do botão */
  border: none;        /* Remove borda padrão */
  color: #fff;         /* Texto branco */
  cursor: pointer;     /* Muda cursor para "mãozinha" ao passar por cima */
  margin-left: 20px;   /* Espaço à esquerda */

  /* Efeito quando o mouse passa por cima */
  &:hover{
    background: #6f3edc; /* Roxa mais escura */
  }

  /* Efeito quando o botão é clicado */
  &:active{
    background: #5f2ecb; /* Roxa ainda mais escura */
  }
`;