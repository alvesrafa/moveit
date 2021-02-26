import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: row;
  @media (max-width: 720px) {
    flex-direction: column;
  }
  transition: all 0.2s;
`;

export const Content = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
`;
