import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }
  > div {
    margin: 0 1.7rem;

    > strong {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${(props) => props.theme.title};
    }
    > p {
      font-size: 1rem;
      margin-top: 0.5rem;
      > img {
        margin-right: 0.5rem;
      }
    }
  }
`;
