import styled from 'styled-components';
import config from 'config';

export default styled.header`
  position: fixed;
  width: 100%;
  background: ${config.primaryColor};
  a { 
    display: block;
    color: #fff;
    text-decoration: none;
    padding: 17px 18px;
    background: ${config.primaryColor};
    transition: background-color 0.3s;
    &:hover {
      background: ${config.primaryColorLight};
    }
  }
  ul {
    margin: 0;
    list-style: none;
  }
    li {
      display: inline-block;
    }
  img {
    width: 40px;
    height: 40px;
  }
`;
