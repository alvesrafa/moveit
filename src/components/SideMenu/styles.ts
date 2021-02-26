import styled from 'styled-components';

interface NewLinkProps {
  active?: boolean;
}

export const LinkMenu = styled.a<NewLinkProps>`
  cursor: pointer;
  width: 100%;
  margin: 0.25rem 0;
  font-weight: 600;
  padding: 1rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 32px;
    height: 32px;
    fill: ${({ active, theme }) => (active ? theme.blue : theme.text)};
    transition: all 0.2s;
  }
  position: relative;
  transition: all 0.2s;

  &:after {
    content: '';
    position: absolute;
    width: 10px;
    top: 0;
    left: -4px;
    height: 100%;
    border-radius: 5px;
    background: ${({ active, theme }) => (active ? theme.blue : 'none')};
    transition: all 0.2s;
  }
  @media (max-width: 720px) {
    &:after {
      left: 0;
      top: -8px;
      width: 100%;
      height: 10px;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.blue};
    > svg {
      fill: ${({ theme }) => theme.blue};
    }
  }
`;

export const Container = styled.div`
  height: 100vh;
  min-width: 5rem;
  max-width: 5rem;
  background: ${({ theme }) => theme.white};
  border-right: 1px solid ${({ theme }) => theme.grayLine};
  box-shadow: 3px 2px 20px 1px ${({ theme }) => theme.boxShadow};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  transition: all 0.2s;

  @media (max-width: 720px) {
    width: 100%;
    min-width: 100%;
    min-height: 5rem;
    max-height: 5rem;
    background: ${({ theme }) => theme.white};
    border-right: 0;
    border-bottom: 1px solid ${({ theme }) => theme.grayLine};
    box-shadow: 1px 9px 20px 1px ${({ theme }) => theme.boxShadow};

    flex-direction: row;
  }
`;
