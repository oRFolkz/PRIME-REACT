import React from "react"
import { MainCard, MenuItem, Description, ItemName, Price, ImgDiv, TxtDiv, AcrecimosDiv, AcreTxt, AcreTxtDiv, AcreTxtIcon, Adicionais, PriceDiv } from "../lanchesStyles.ts"
import { useCart } from '../../CartContext.js';
import { useAPI } from "../../APIContext.js";


const Lanches = ({ tagLanchesActive }) => {

    const { addCart, clickAnimation, animationOnClick  } = useCart()
    const { menuItems, setMenuItems, addAdicional, removeAdicional, getAddsPrice} = useAPI()

    const toggleMostrarAdicionais = (id) => {
      setMenuItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id
            ? { ...item, mostrarAdicionais: !item.mostrarAdicionais }
            : item
        )
      );
    }

  return (
    <>
      {tagLanchesActive &&
        menuItems.map((item) => (
          <MainCard key={item.id}>
            <MenuItem 
            className={item.mostrarAdicionais ? 'hideBorder active' : ''}
            onClick={() => {toggleMostrarAdicionais(item.id)}}>
              <ImgDiv className={`lanches ${item.mostrarAdicionais ? 'active' : ''}`}>
                <img src={item.imgSrc} alt="Imagem do Lanche" />
              </ImgDiv>
              <TxtDiv className={`lanches ${item.mostrarAdicionais ? 'active' : ''}`}>
                <ItemName>{item.name}</ItemName>
                <Description>{item.description}</Description>
                <Adicionais className={item.mostrarAdicionais ? "" : "backGroundColor"}>
                  {item.mostrarAdicionais ?
                  (<span>ADICIONAIS<i className="fa-solid fa-arrow-down"></i></span>) :
                  (<span>R$ {(item.price).toFixed(2)}</span>)}
                </Adicionais>
              </TxtDiv>
            </MenuItem>
            {item.mostrarAdicionais && 
            item.adicionais.map((itemsAdicionais) => (
            <AcrecimosDiv 
            key={itemsAdicionais.adicionalID}
            className={item.mostrarAdicionais ? 'active' : ''}>
              <AcreTxtDiv>
                <AcreTxt>
                  {itemsAdicionais.adicionalNome} 
                  <br /><span>
                  (R$ {(itemsAdicionais.adicionalValor).toFixed(2)})</span>
                </AcreTxt> 
                <AcreTxtIcon>
                  <i
                    className="fa-solid fa-minus"
                    onClick={() => {
                    clickAnimation(item.id)
                    removeAdicional(item.id, itemsAdicionais.adicionalID)
                    }}
                  ></i>
                  {itemsAdicionais.adicionalQuantidade}
                  <i
                    className="fa-solid fa-plus"
                    onClick={() => {
                      clickAnimation(item.id)
                      addAdicional(item.id, itemsAdicionais.adicionalID)
                    }}
                  ></i>
                </AcreTxtIcon>
              </AcreTxtDiv>
            </AcrecimosDiv>
            ))}
            {item.mostrarAdicionais && (
            <PriceDiv>
              <Price 
              className={animationOnClick === item.id ? "fa-bounce" : ""}
              onClick={() => {
                clickAnimation(item.id)
                addCart(item, (item.price + getAddsPrice()))
              }}>
              ADICIONAR : R$ {(item.price + getAddsPrice()).toFixed(2)}
              </Price>
            </PriceDiv>
            )}
          </MainCard>
        ))}
    </>
  )
}

export default Lanches