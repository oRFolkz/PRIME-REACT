import styled from 'styled-components';

export const MenuItem = styled.div`
    height: 10rem;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 .1rem;
    cursor: pointer;
    transition: all .2s ease;
    border-bottom: 1px solid black;

    @media ( width < 1245px ) {
        width: 49%;
        padding: 0 .2rem;
    }

    @media ( width < 940px ) {
        width: 100%;
    }
`

export const ImgDiv = styled.div`
    width: 35%;
    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: .5rem;
    }
`

export const TxtDiv = styled.div`
    width: 65%;
`

export const ItemName = styled.div`
    color: #505050;
    font-size: 1rem;
    font-weight: bold;
    padding: 0 0 0 1rem;

    @media ( width < 420px) {
        font-size: .8rem;
    }
`

export const Description = styled.div`
    padding: .5rem 0 .5rem 1rem;

    @media ( width < 420px) {
        font-size: .8rem;
    }
`

export const Price = styled.p`
    margin: .6rem 0 .6rem 1rem;
    width: 80%;
    padding: .5rem 0;
    border-radius: 10px;
    text-align: center;
    background-color: green;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;

    @media ( width < 425px) {
        font-size: .9rem;
    }
    @media ( width > 840px) {
            width: 60%;
    }
`