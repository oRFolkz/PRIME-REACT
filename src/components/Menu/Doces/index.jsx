import React from "react"
import { MenuItem, Description, ItemName, Price, ImgDiv, TxtDiv } from "../othersStyle.ts"
import { useCart } from "../../CartContext.js"
import { useAPI } from "../../APIContext.js"

const Doces = ({ tagDocesActive }) => {

  const { addCart, clickAnimation, animationOnClick  } = useCart()
  const { listaDoces } = useAPI()

  return (
    <>
    {tagDocesActive &&
      listaDoces.map((item) => (
        <MenuItem key={item.id}>
          <ImgDiv>
            <img src={item.imgSrc} alt="" />
          </ImgDiv>
          <TxtDiv>
            <ItemName>{item.name}</ItemName>
            <Description>{item.description}</Description>
            <Price className={animationOnClick === item.id ? "fa-bounce" : ""} 
            onClick={() => {
              clickAnimation(item.id)
              addCart(item, item.price)
            }} 
            >R$: {(item.price).toFixed(2)}</Price>
          </TxtDiv>
        </MenuItem>
      ))}
    </>
  )
}

export default Doces