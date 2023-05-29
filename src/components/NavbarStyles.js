import styled from "styled-components";

export const NavbarStyled = styled.nav `
margin-bottom: 3rem;
ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    gap: 2rem;
    align-items: center;
    text-align: center;
}
li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;

    &:nth-child(1) {
    --rotate: -1.2deg;
    }

    &:nth-child(4) {
    --rotate: -2.5deg;
    }

    &:hover {
        --rotate: 3deg;
    }
}
  a {
    font-size: 3rem;
    text-decoration: none;

    &:hover {
      color: var(--red);
    }


  }

.logo {
    transform: translateY(-25%);
}
`