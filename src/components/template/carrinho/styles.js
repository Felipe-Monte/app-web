import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const CircleCart = styled.div`
  background-color: red;
  position: absolute;
  top: -5px;
  right: -10px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 22px;
  height: 22px;

  font-size: 14px;
  font-weight: bold;

  border-radius: 50%;
`;
