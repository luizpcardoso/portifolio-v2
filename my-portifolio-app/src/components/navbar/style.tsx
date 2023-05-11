import styled from "styled-components";

export const Container = styled.div`
  height: 10vh;
  width: 100vw;
  background-color: #212336;
  position: fixed;
  top: 0;
  box-shadow: 0px 1px 5px -1px #000000;

  nav {
    height: 100%;
    width: 100%;
    max-width: 1024px;

    margin: 0 auto;

    ul {
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 120px;

      li {
        list-style: none;
        font-size: 1.2rem;
        color: #c5c5c5;
        font-family: "Inter", sans-serif;
        font-weight: bold;
      }
      li:hover {
        text-decoration: underline;
        color: #ffffff;
        transition: 0, 3s;
      }
    }
  }

  @media (max-width: 600px) {
    padding-left: 20px;
    nav ul {
      gap: 10px;
    }
  }
`;
