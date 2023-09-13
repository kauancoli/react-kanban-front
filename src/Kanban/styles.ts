import styled from "styled-components";

export const Layout = styled.div`
  padding: 3rem;

  background-color: ${(props) => props.theme.colors.backgroundColor};

  height: 100vh;
`;

export const Header = styled.div`
  padding: 0 0 3rem 0;
  font-size: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${(props) => props.theme.colors.HeaderFooterColor};

  div {
    display: flex;
    gap: 2rem;
  }

  button {
    padding: 1rem 2rem;
    border-radius: 4px;
    border: 2px solid ${(props) => props.theme.colors.columnColor};
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.taskColor};
  }

  button:hover {
    background-color: ${(props) => props.theme.colors.columnColor};
  }
`;

export const Buttons = styled.div``;

export const MainContainer = styled.div`
  height: calc(100% - 12rem);
  gap: 2.4rem;
  padding-bottom: 2.4rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  user-select: none;

  @media (max-width: 768px) {
    grid-template-columns: repeat(
      1,
      1fr
    ); /* Apenas uma coluna quando a tela for menor que 768px */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ColumnCard = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  gap: 2rem;

  border-radius: 16px;
  background: ${(props) => props.theme.colors.columnColor};
`;

export const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  color: ${(props) => props.theme.colors.titleColor};
  font-size: 1.6rem;
  font-weight: bold;
`;

export const TaskCard = styled.div`
  display: flex;
  padding: 1rem 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.taskColor};

  opacity: 1;
  cursor: grab;
  position: relative;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`;

export const TaskHeader = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  font-size: 1.2rem;
  font-weight: bold;

  color: ${(props) => props.theme.colors.textColor};
`;

export const TaskBottom = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;

  justify-content: space-between;

  font-size: 1rem;

  .date-low {
    font-weight: bold;

    color: white;

    padding: 0.8rem;
    border-radius: 8px;
    background-color: blue;
  }
  .date-medium {
    font-weight: bold;

    color: white;

    padding: 0.8rem;
    border-radius: 8px;
    background-color: yellow;
  }
  .date-high {
    font-weight: bold;

    color: white;

    padding: 0.8rem;
    border-radius: 8px;
    background-color: red;
  }

  p {
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.textColor};
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  padding: 1rem 2rem;
  flex-direction: column;
  gap: 1rem;

  border-radius: 12px;
  background-color: #f4f2ff;

  font-size: 1.2rem;

  label {
    font-size: 2rem;
  }

  select {
    width: 100%;
    padding: 0.4rem;
    border-radius: 4px;
    border: 2px solid #d5ccff;
  }

  option {
    font-size: 1.6rem;
    padding: 0.4rem;
    border-radius: 4px;
    border: 2px solid #d5ccff;
  }

  input {
    width: 100%;
    padding: 0.8rem;
    border-radius: 4px;
    border: 2px solid #d5ccff;
  }

  input:hover {
    border: 2px solid #c5bcff;
  }
`;

export const ModalForm = styled.form`
  display: flex;
  padding: 1rem 2rem;
  flex-direction: column;
  gap: 1rem;
`;

export const ModalSelect = styled.div`
  display: flex;

  gap: 1rem;
  font-size: 2rem;
`;

export const ModalButton = styled.div`
  font-size: 1.8rem;

  display: flex;
  gap: 1rem;

  button {
    padding: 1rem 2rem;
    border-radius: 4px;
    border: 2px solid #d5ccff;
    background-color: #d5ccff;
    cursor: pointer;
    width: 100%;
  }

  button:hover {
    background-color: #c5bcff;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;

  font-size: 1.8rem;

  color: ${(props) => props.theme.colors.HeaderFooterColor};
`;
