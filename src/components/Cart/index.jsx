import React, { useEffect, useState } from "react"
import { CartBackground, CartCard, CartDescription, CartDiv, CartImg, CartName, CartTxt, Valor, ValorFinal, CartCardFlex, RemoverItem } from './style.ts'
import { useCart } from "../CartContext.js"

const Cart = () => {

    const { cartItems, openCart, setOpenCart, removeCart} = useCart();

    const [ finalPrice, setFinalPrice ] = useState(0);

    useEffect(() => {
      const totalPrice = cartItems.reduce((total, item) => {
        return total + (item.price || 0)
      }, 0);
      setFinalPrice(totalPrice)
    }, [cartItems])
    
    return (
      <>
        {openCart && (
          <>
          <CartBackground onClick={() => setOpenCart(!openCart) }/>
          <CartDiv>
            <ValorFinal>
              {finalPrice <= 0 ? 'Carrinho vazio' : `TOTAL: R$ ${(finalPrice).toFixed(2)}`}
            </ValorFinal>
            {cartItems.map((cartItem) => (
              <>
                <CartCard key={cartItem.id}>
                  <CartCardFlex>
                    <CartImg>
                      <img src={cartItem.imgSrc} alt="Imagem do Lanche" />
                    </CartImg>
                    <CartTxt>
                      <CartName>{cartItem.name}</CartName>
                      <CartDescription>{cartItem.description}</CartDescription>
                      <CartCardFlex>
                        <RemoverItem onClick={() => removeCart(cartItem.id)}>
                          <p>Remover</p>
                        </RemoverItem>
                        <Valor>
                          R$ {(cartItem.price).toFixed(2)}
                        </Valor>
                      </CartCardFlex>
                    </CartTxt>
                  </CartCardFlex>
                </CartCard>
              </>
            ))}
          </CartDiv>
          </>
        )}
      </>
    );
  }

export default Cart