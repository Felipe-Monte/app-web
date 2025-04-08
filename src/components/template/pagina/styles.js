import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100dvh;
`;

export const Container = styled.main`
  flex: 1; /* ocupa todo o espaço restante */
  overflow-y: auto;

  width: 1200px;
  margin: auto;

  border: 1px solid white;
`;
