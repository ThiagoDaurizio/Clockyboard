import styled from "styled-components";


export const Container = styled.div`
  width: 50px;
  min-height: 100vh;
  position: relative;

`

export const Sidebar = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100%;
  width: 50px;
  
  .sidebar{
    background-color: ${(props) => props.theme.sidebarBackground};
    width: 100%;
    padding: 1rem;
    transition: 0.35s;
    height: 100%;
    overflow: hidden;
    border-right: 1px solid ${(props) => props.theme.lineColor};
  }

  .sidebar ul{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sidebar ul li{
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    height: 40px;
    width: 40px;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.15s;
  }

  .sidebar ul li.active{
    background-color: ${(props) => props.theme.primaryColor};
    border: 1px solid ${(props) => props.theme.lineLighter};
  }

  .sidebar ul li.active a svg{
    filter: drop-shadow(0 0 1px ${(props) => props.theme.shadowLighter});
  }
  
  .sidebar ul li:hover{
    border: 3px solid ${(props) => props.theme.lineColor};
    transform: translateX(5px);
    background-color: ${(props) => props.theme.neutralLighter};

    svg{
      color: ${(props) => props.theme.textColor};
    }

    p{
      color: ${(props) => props.theme.textDarker};
    }
  }

  .sidebar ul li:hover.active{
    border: 3px solid ${(props) => props.theme.lineColor};
    transform: translateX(5px);
    background-color: ${(props) => props.theme.primaryColor};

    svg{
      color: ${(props) => props.theme.textLighter};
    }

    p{
      color: ${(props) => props.theme.textDarker};
    }
  }

  .sidebar ul li.active a{
    color: ${(props) => props.theme.textDarker};
  }

  .sidebar ul li a{
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.textColor};
    text-decoration: none;
  }

  .sidebar ul li svg{
    font-size: 2em;
    transform: translateY(2px);
  }

  .sidebar ul li p{
    display: none;
    font-weight: 700;
    text-transform: uppercase;
  }

  .sidebar:hover{
    width: 250px;
    border-radius: 0 15px 15px 0;
    box-shadow: 0 2px 25px black;
  }

  .sidebar:hover ul li{
    display: flex;
    justify-content: flex-start;
    width: 90%;
    padding: 0 10px;
  }

  .sidebar:hover ul li p{
    display: block;
    margin-left: 20px;
  }
`