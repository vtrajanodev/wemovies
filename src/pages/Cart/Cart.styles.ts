import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 960px;
  background-color: #fff;
  border-radius: 4px;
  font-weight: 700;

  margin: 24px auto;

  table {
    color: #2F2E41;
    width: 100%;
    text-align: left;
    border-spacing: 24px 21px;

    button {
      width: 18px;
      height: 18px;
      background-color: transparent;
      border: none;
    }

    th {
      color: #999999;
      font-size: 14px;

      &:last-child {
        min-width: 100px;
      }
    }
  }

  hr {
    max-width: 910px;
    margin: 0 auto;
    color: #999999;
  }
`;

export const FooterCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 21px 24px;
  padding-bottom: 24px;

  div {
    display: flex;
    align-items: center;
  }

  div > span:first-child {
    color: #999999;
    font-size: 14px;
    margin-right: 24px;
  }

  div > span:last-child {
    font-size: 24px;
    color: #2f2e41;
  }
`;
