import styled from "styled-components";

export const MovieCardContainer = styled.div`
  background-color: #fff;

  width: 309px;

  padding: 10px 11px;
  border-radius: 4px;
`;

export const MovieCardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-weight: 700;

  img {
    margin-bottom: 8px;
  }
  color: #2F2E41;

  p {
    &:nth-child(3) {
      margin-top: 2px;
      margin-bottom: 8px;
    }
  }
`;
