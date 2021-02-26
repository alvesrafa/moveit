import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.white};
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;

  border-radius: 5px;
  box-shadow: 0 0 60px ${({ theme }) => theme.boxShadow};
  text-align: center;
  position: relative;

  > header {
    font-size: 8.75rem;
    font-weight: 600;
    color: ${({ theme }) => theme.blue};
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }
  > strong {
    font-size: 2.25rem;
    color: ${({ theme }) => theme.title};
  }
  > p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.text};
    margin-top: 0.24rem;
  }
  > button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: none;
    border: 0;
    font-size: 0;
  }
`;
export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;
