import styled from "styled-components";

export const Container = styled.main`
    background-color: #2e2b2b;
    display: flex;
    flex-wrap: wrap;

    width: 100%;
    height: 100%;
`;

export const Header = styled.header`
    display: block;
    height: 50px;
    width: 100%;
    background: #080707;
    align-items: center;
    position: fixed;
    top:0;
    left: 0;
`;

export const Main = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;

    img {
        height: 50px;
    }

    input {
        height: 25px;
        width: 200px;
    }
`;

export const Title = styled.text`
    margin-right: 8px;
    color: #f1f1f1;
`;

export const Menu = styled.div`
    display: flex;
    justify-content: center;
    height: 20px;
    background-color: #f1f1f1;
    justify-content: space-around;

    .link {
        text-decoration: none;
    }
`;

export const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 70px;
`;

export const Card = styled.div`
   
    background: #4d4949;
    height: 450px;
    width: 300px;
    margin: 10px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 2px 2px 10px 1px rgba(0,0,0,0.3);

    img#img {
        height: 450px;
        width: 100%;
        background: url(${(props) => props.src}) no-repeat center;
        background-size: cover;

        transition: all 1s;
    }
    
    &:hover {
        img#img {
            height: 300px;
        }
    }
`;

export const ButtonMore = styled.div`
    background: #f1f1f1;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    cursor: pointer;
    box-shadow: 2px 2px 10px 1px rgba(0,0,0,0.3);
    margin: 20px auto;
    padding: 0 50px;
    border-radius: 0;
    transition: all 0.3ss;

    &:hover {
        background: #ec1d24;
    }

    svg {
        margin: 0 10px;
    }
`;