import styled from 'styled-components'

export const CartBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-color: rgb(0,0,0,0.8);
    cursor: pointer;
`

export const CartDiv = styled.div`
    z-index: 100;
    position: fixed;
    top: 96px;
    bottom: 0;
    right: 0;
    height: 800px;
    width: 500px;
    background-color: gray;
    overflow: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }

    @media ( width < 770px ) {
        height: 550px;
        width: 100%;
        border-radius: 0 0 1rem 1rem;
    }
`

export const ValorFinal = styled.div`
    background-color: green;
    width: 80%;
    margin: .4rem auto 0 auto;
    border-radius: 1rem;
    padding: .8rem .5rem;
    text-align: center;
    color: white;
    font-weight: bold;
    cursor: pointer;

    @media ( width < 820px ) {
        width: 60%;
    }
`

export const CartCard = styled.div`
    width: 80%;
    height: 7.5rem;
    padding: 1rem;
    border-radius: 1rem;
    margin: .5rem auto .5rem auto;
    background-color: white;

    @media ( width < 780px ) {
        width: 80%;
    }

    @media ( width < 350px ) {
        width: 88%;
    }
`

export const CartCardFlex = styled.div`
    display: flex;
`

export const CartImg = styled.div`
    width: 100px;
    height: 100px;
    margin-right: .5rem;

    img  {
        width: 100px;
        height: 120px;
        object-fit: cover;
    }
`

export const RemoverItem = styled.div `
    background-color: red;
    font-weight: bold;
    color: white;
    align-self: start;
    width: 4rem;
    border-radius: 5px;
    padding: .5rem;
    margin: 1rem 0 .5rem 0;
    cursor: pointer;

    p {
        margin: 0;
        padding: 0;
    }
`

export const CartTxt = styled.div`
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    
`

export const CartName = styled.div`
    font-weight: bold;
    color: #505050;
    margin-bottom: .5rem;
`

export const CartDescription = styled.div`
`

export const Valor = styled.div`
    background-color: green;
    color: white;
    font-weight: bold;
    width: 4rem;
    border-radius: 5px;
    padding: .5rem;
    margin: 1rem 0 .5rem .5rem;
    cursor: pointer;
`