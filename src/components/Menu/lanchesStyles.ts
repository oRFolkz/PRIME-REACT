import styled from 'styled-components';

export const MainCard = styled.div`
    width: 100%;
`

export const MenuItem = styled.div`
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    cursor: pointer;
    transition: all .2s ease;
    border-bottom: 1px solid black;

    &.active {
        flex-direction: column;
        height: auto;
        margin: .5rem auto;
        padding: 0rem;

        img {
            width: 100%;
            height: auto;
        }
    }

    &.hideBorder {
        border-bottom: 1px solid transparent;
    }
`

export const ImgDiv = styled.div`
    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: .5rem;
    }

    &.active {
        img {
            width: 480px;
            height: 350px;
        }

        @media ( width < 860px) {
            width: 90%;

            img {
                width: 100%;
            }
        }
    }
`

export const TxtDiv = styled.div`
    width: 58rem;

    @media ( width < 1255px ) {
        width: 100%;
    }
    &.active {
        width: 500px;

        @media ( width < 860px ) {
            width: 90%;
        }
    }
`


export const ItemName = styled.div`
    color: #505050;
    font-size: 1rem;
    font-weight: bold;
    padding: .5rem 0 0 .5rem;

    @media ( width < 420px) {
        font-size: .8rem;
    }
`

export const Description = styled.div`
    padding: .5rem 0 .5rem .5rem;

    @media ( width < 420px) {
        font-size: .8rem;
    }
`

export const Adicionais = styled.p`
    display: inline-block;
    color: white;
    font-size: 1.2rem;
    margin: 0 0 0 .5rem;
    padding: .2rem .6rem;
    border-radius: 5px;
    background-color: black;
    font-weight: bold;
        
    .fa-arrow-down {
        margin-left: .3rem;
    }

    &.backGroundColor {
        background-color: green;
    }
    
    @media ( width < 420px) {
        font-size: .8rem;
    }
`

export const PriceDiv = styled.div`
    width: 100%;
    border-bottom: 2px solid gray;
`

export const Price = styled.p`
    margin: .6rem 0 .6rem 1rem;
    width: 480px;
    margin: 1rem auto;
    padding: .5rem 0;
    border-radius: 10px;
    text-align: center;
    background-color: green;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;

    @media ( width < 860px) {
        width: 90%;
    }
    
    @media ( width < 425px) {
        font-size: .9rem;
    }
`

export const AcrecimosDiv = styled.div`
    height: auto;
    transition: all 1s ease;
    margin: auto;
    width: 480px;

    @media ( width < 860px) {
        width: 90%;
    }

    &.hidden {
        display: none;
    }
`

export const AcreTxtDiv = styled.div`
    margin: .5rem auto;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .4rem;
    font-weight: bold;

    span {
        font-size: 0.8rem;
        font-weight: normal;
    }
`

export const AcreTxt = styled.p`
    margin: 0;
`

export const AcreTxtIcon = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    .fa-plus {
        color: white;
        background-color: green;
        padding: .5rem .5rem .5rem .5rem;
        border-radius: .5rem;
    }
        
    .fa-minus {
        color: white;
        background-color: red;
        padding: .5rem .5rem .5rem .5rem;
        border-radius: .5rem;
    }
`