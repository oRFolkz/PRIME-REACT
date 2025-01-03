import React, { createContext, useContext, useState } from 'react'

// CERVEJAS
import StellaImg from '../../src/imgs/209.jpg'
import HeinekenImg from '../../src/imgs/254.jpg'
import BuweiserImg from '../../src/imgs/210.jpg'

// DOCES
import tridentVerde from '../../src/imgs/118.jpg'
import tridentPreto from '../../src/imgs/369.jpg'
import hallsVermelho from '../../src/imgs/150.jpg'
import hallsPreto from '../../src/imgs/372.jpg'
import hallsAzul from '../../src/imgs/374.jpg'
import tridentRosa from '../../src/imgs/505.jpg'
import bubalooAzul from '../../src/imgs/506.jpg'
import bubalooVermelho from '../../src/imgs/507.jpg'

// MOLHOS
import ketchup from '../../src/imgs/260.jpg'
import maionese from '../../src/imgs/263.jpg'
import mostarda from '../../src/imgs/266.jpg'
import picante from '../../src/imgs/218.jpg'
import especial from '../../src/imgs/217.jpg'
import maioneseDeBacon from '../../src/imgs/219.jpg'
import mostardaEMel from '../../src/imgs/399.jpg'

// PORCOES
import batata from '../../src/imgs/335.jpg'
import onionRings from '../../src/imgs/67.jpg'
import batataCrinkle from '../../src/imgs/333.jpg'
import batataPalito from '../../src/imgs/62.jpg'

// REFRI
import aguaComGasImg from '../../src/imgs/239.jpg'
import aguaSemGasImg from '../../src/imgs/240.jpg'
import Coca1LZero from '../../src/imgs/496.jpg'
import Coca1L from '../../src/imgs/340.jpg'
import lataCoca from '../../src/imgs/196.jpg'
import lataFanta from '../../src/imgs/211.jpg'
import lataGuarana from '../../src/imgs/377.jpg'
import lataSprite from '../../src/imgs/213.jpg'

// SUCOS
import Fruitz900ML from '../../src/imgs/510.jpg'
import Prats900ML from '../../src/imgs/322.jpg'
import Polpa1L from '../../src/imgs/146.jpg'
import Polpa500ML from '../../src/imgs/87.jpg'

//LANCHES
import baconpiry from '../../src/imgs/77.jpg'
import carneQueijo from '../../src/imgs/55.jpg'
import toscana from '../../src/imgs/56.jpg'
import costela from '../../src/imgs/60.jpg'
import double from '../../src/imgs/73.jpg'
import frango from '../../src/imgs/74.jpg'
import philadelphia from '../../src/imgs/75.jpg'
import prime from '../../src/imgs/54.jpg'

const APIContext = createContext()

export const useAPI = () => {
    return useContext(APIContext)
}

export const APIProvider = ({ children }) => {

    const listaCervejas = [
        {
        id: 1,
        imgSrc: StellaImg,
        name: "STELLA ARTOIS 275ML",
        description: "",
        price: 8.00,
        },
        {
        id: 2,
        imgSrc: HeinekenImg,
        name: "HEINEKEN  275ML",
        description: "",
        price: 9.00,
        },
        {
        id: 3,
        imgSrc: BuweiserImg,
        name: "BUDWEISER 330ML",
        description: "",
        price: 8.00,
        },
        {
        id: 4,
        imgSrc: StellaImg,
        name: "STELLA ARTOIS 275ML",
        description: "",
        price: 8.00,
        },
        {
        id: 5,
        imgSrc: HeinekenImg,
        name: "HEINEKEN  275ML",
        description: "",
        price: 9.00,
        },
        {
        id: 6,
        imgSrc: BuweiserImg,
        name: "BUDWEISER 330ML",
        description: "",
        price: 8.00,
        },
        {
        id: 7,
        imgSrc: StellaImg,
        name: "STELLA ARTOIS 275ML",
        description: "",
        price: 8.00,
        },
        {
        id: 8,
        imgSrc: HeinekenImg,
        name: "HEINEKEN  275ML",
        description: "",
        price: 9.00,
        },
        {
        id: 9,
        imgSrc: BuweiserImg,
        name: "BUDWEISER 330ML",
        description: "",
        price: 8.00,
        },
    ];
    const listaDoces = [
        {
          id: 1,
          imgSrc: tridentVerde,
          name: "TRIDENT MENTA VERDE",
          description: "",
          price: 3.00,
        },
        {
          id: 2,
          imgSrc: tridentPreto,
          name: "TRIDENTE X",
          description: "",
          price: 3.00,
        },
        {
          id: 3,
          imgSrc: hallsVermelho,
          name: "HALLS MORANGO",
          description: "",
          price: 2.00,
        },
        {
            id: 4,
            imgSrc: hallsPreto,
            name: "HALLS EXTRA FORTE",
            description: "",
            price: 2.00,
          },
          {
            id: 5,
            imgSrc: hallsAzul,
            name: "HALLS MENTOL",
            description: "",
            price: 2.00,
          },
          {
            id: 6,
            imgSrc: tridentRosa,
            name: "TRIDENT TUTTI FRUTTI",
            description: "",
            price: 3.00,
          },
          {
            id: 7,
            imgSrc: bubalooAzul,
            name: "BUBBALOO HORTELÃ MENTA",
            description: "",
            price: 0.50,
          },
          {
            id: 8,
            imgSrc: bubalooVermelho,
            name: "BUBBALOO MORANGO",
            description: "",
            price: 0.50,
          },
          {
            id: 9,
            imgSrc: tridentVerde,
            name: "TRIDENT MENTA VERDE",
            description: "",
            price: 3.00,
          },
    ];
    const listaMolhos = [
        {
          id: 1,
          imgSrc: ketchup,
          name: "HEINZ SACHÊ - KETCHUP",
          description: "",
          price: 0.50,
        },
        {
          id: 2,
          imgSrc: maionese,
          name: "HEINZ SACHÊ - MAIONESE",
          description: "",
          price: 0.50,
        },
        {
          id: 3,
          imgSrc: mostarda,
          name: "HEINZ SACHÊ - MOSTARDA",
          description: "",
          price: 0.50,
        },
        {
            id: 4,
            imgSrc: picante,
            name: "MOLHO - PICANTE",
            description: "",
            price: 1.99,
          },
          {
            id: 5,
            imgSrc: especial,
            name: "MOLHO - BARBECUE",
            description: "",
            price: 1.99,
          },
          {
            id: 6,
            imgSrc: maioneseDeBacon,
            name: "MOLHO - MAIONESE DE BACON",
            description: "",
            price: 1.99,
          },
          {
            id: 7,
            imgSrc: mostardaEMel,
            name: "MOLHO - MOSTARDA E MEL",
            description: "",
            price: 1.99,
          },
          {
            id: 8,
            imgSrc: ketchup,
            name: "HEINZ SACHÊ - KETCHUP",
            description: "",
            price: 0.50,
          },
          {
            id: 9,
            imgSrc: maionese,
            name: "HEINZ SACHÊ - MAIONESE",
            description: "",
            price: 0.50,
          },
    ];
    const listaPorcoes = [
        {
          id: 1,
          imgSrc: batata,
          name: "BATATA CRINKLE GRANDE ESPECIAL",
          description: "",
          price: 8.90,
        },
        {
          id: 2,
          imgSrc: batata,
          name: "BATATA CRINKLE MÉDIA ESPECIAL",
          description: "",
          price: 9.90,
        },
        {
          id: 3,
          imgSrc: onionRings,
          name: "ANÉIS DE CEBOLA (ONION RINGS) GRANDE",
          description: "",
          price: 3.90,
        },
        {
            id: 4,
            imgSrc: onionRings,
            name: "ANÉIS DE CEBOLA (ONION RINGS) MÉDIA",
            description: "",
            price: 6.90,
          },
          {
            id: 5,
            imgSrc: batataCrinkle,
            name: "BATATA CRINKLE MÉDIA SIMPLES",
            description: "",
            price: 5.90,
          },
          {
            id: 6,
            imgSrc: batataCrinkle,
            name: "BATATA CRINKLE PEQUENA SIMPLES",
            description: "",
            price: 8.50,
          },
          {
            id: 7,
            imgSrc: batataPalito,
            name: "BATATA PALITO MÉDIA SIMPLES",
            description: "",
            price: 5.90,
          },
          {
            id: 8,
            imgSrc: batataPalito,
            name: "BATATA PALITO PEQUENA SIMPLES",
            description: "",
            price: 8.50,
          },
          {
            id: 9,
            imgSrc: batata,
            name: "BATATA CRINKLE GRANDE ESPECIAL",
            description: "",
            price: 8.90,
          },
    ];
    const listaRefrigerantes = [
        {
          id: 1,
          imgSrc: aguaComGasImg,
          name: "ÁGUA COM GÁS",
          description: "",
          price: 4.00,
        },
        {
          id: 2,
          imgSrc: aguaSemGasImg,
          name: "ÁGUA SEM GÁS",
          description: "",
          price: 3.00,
        },
        {
          id: 3,
          imgSrc: Coca1LZero,
          name: "COCA COLA 1L",
          description: "",
          price: 9.00,
        },
        {
            id: 4,
            imgSrc: Coca1L,
            name: "COCA COLA 1L ZERO",
            description: "",
            price: 9.00,
          },
          {
            id: 5,
            imgSrc: lataCoca,
            name: "COCA COLA LATA",
            description: "",
            price: 6.00,
          },
          {
            id: 6,
            imgSrc: lataFanta,
            name: "FANTA LARANJA LATA",
            description: "",
            price: 6.00,
          },
          {
            id: 7,
            imgSrc: lataGuarana,
            name: "GUARANÁ ANTARCTICA LATA",
            description: "",
            price: 6.00,
          },
          {
            id: 8,
            imgSrc: lataSprite,
            name: "SPRITE LATA",
            description: "",
            price: 6.00,
          },
          {
            id: 9,
            imgSrc: aguaSemGasImg,
            name: "ÁGUA SEM GÁS",
            description: "",
            price: 3.00,
          },
    ];
    const listSucos = [
        {
          id: 1,
          imgSrc: Fruitz900ML,
          name: "SUCO DE LARANJA INTEGRAL FRUITZ 900ML",
          description: "",
          price: 13.00,
        },
        {
          id: 2,
          imgSrc: Prats900ML,
          name: "SUCO DE LARANJA INTEGRAL PRATS 900ML",
          description: "",
          price: 15.00,
        },
        {
          id: 3,
          imgSrc: Polpa1L,
          name: "SUCO DE POLPA 1L",
          description: "",
          price: 15.00,
        },
        {
          id: 4,
          imgSrc: Polpa500ML,
          name: "SUCO DE POLPA 500ML",
          description: "",
          price: 10.00,
        }
        ,
        {
          id: 5,
          imgSrc: Fruitz900ML,
          name: "SUCO DE LARANJA INTEGRAL FRUITZ 900ML",
          description: "",
          price: 13.00,
        }
        ,
        {
          id: 6,
          imgSrc: Prats900ML,
          name: "SUCO DE LARANJA INTEGRAL PRATS 900ML",
          description: "",
          price: 15.00,
        },
        {
          id: 7,
          imgSrc: Polpa500ML,
          name: "SUCO DE POLPA 500ML",
          description: "",
          price: 10.00,
        },
        {
          id: 8,
          imgSrc: Fruitz900ML,
          name: "SUCO DE LARANJA INTEGRAL FRUITZ 900ML",
          description: "",
          price: 13.00,
        },
        {
          id: 9,
          imgSrc: Prats900ML,
          name: "SUCO DE LARANJA INTEGRAL PRATS 900ML",
          description: "",
          price: 15.00,
        }
    ];
    const [adicionaisValorFinal, setAdicionaisValorFinal] = useState(Number)
    const [menuItems, setMenuItems] = useState([
        {
          id: 1,
          imgSrc: baconpiry,
          name: "BACONPIRY",
          description: "Burger Bovino de 150gr, Catupiry, Alho frito, Bacon em tiras, Rúcula no Pão Tradicional.",
          price: adicionaisValorFinal <= 0 
          ? 31.50 : (31.50 * adicionaisValorFinal),
          mostrarAdicionais: false,
          adicionais : [{
            adicionalID: 1,
            adicionalNome: "TOMATE",
            adicionalQuantidade: 0,
            adicionalValor: 0.15,
          },
          {
            adicionalID: 2,
            adicionalNome: "CEBOLA",
            adicionalQuantidade: 0,
            adicionalValor: 0.10,
          },
          {
            adicionalID: 3,
            adicionalNome: "PICLES",
            adicionalQuantidade: 0,
            adicionalValor: 0.25,
          }]
        },
        {
          id: 2,
          imgSrc: carneQueijo,
          name: "CARNE E QUEIJO",
          description: "Burger Bovino de 120g recheado com queijo Cheddar no Pão Tradicional",
          price: adicionaisValorFinal <= 0 
          ? 27.90 : (27.90 * adicionaisValorFinal),
          mostrarAdicionais: false,
          adicionais : [{
              adicionalID: 1,
              adicionalNome: "TOMATE",
              adicionalQuantidade: 0,
              adicionalValor: 0.15,
            },
            {
              adicionalID: 2,
              adicionalNome: "CEBOLA",
              adicionalQuantidade: 0,
              adicionalValor: 0.10,
            },
            {
              adicionalID: 3,
              adicionalNome: "PICLES",
              adicionalQuantidade: 0,
              adicionalValor: 0.25,
            }]
        },
        {
          id: 3,
          imgSrc: toscana,
          name: "TOSCANA",
          description: "Burger Bovino de 120g recheado com queijo Mussarela no Pão Tradicional",
          price: adicionaisValorFinal <= 0 
          ? 28.90 : (28.90 * adicionaisValorFinal),
          mostrarAdicionais: false,
          adicionais : [{
              adicionalID: 1,
              adicionalNome: "TOMATE",
              adicionalQuantidade: 0,
              adicionalValor: 0.15,
            },
            {
              adicionalID: 2,
              adicionalNome: "CEBOLA",
              adicionalQuantidade: 0,
              adicionalValor: 0.10,
            },
            {
              adicionalID: 3,
              adicionalNome: "PICLES",
              adicionalQuantidade: 0,
              adicionalValor: 0.25,
            }]
        },
        {
            id: 4,
            imgSrc: costela,
            name: "COSTELA 120G",
            description: "Burger de Costela Bovina de 120g, Bacon, queijo Mussarela, anéis de Cebola empanada",
            price: adicionaisValorFinal <= 0 
            ? 31.50 : (31.50 * adicionaisValorFinal),
            mostrarAdicionais: false,

            adicionais : [{
              adicionalID: 1,
              adicionalNome: "TOMATE",
              adicionalQuantidade: 0,
              adicionalValor: 0.15,
            },
            {
              adicionalID: 2,
              adicionalNome: "CEBOLA",
              adicionalQuantidade: 0,
              adicionalValor: 0.10,
            },
            {
              adicionalID: 3,
              adicionalNome: "PICLES",
              adicionalQuantidade: 0,
              adicionalValor: 0.25,
            }]
          },
          {
            id: 5,
            imgSrc: double,
            name: "DOUBLE",
            description: "Dois Burgers BovinoS de 120gr, 2X Cheddar, 2x Bacon em tiras e Molho no Pão Tradicional",
            price: adicionaisValorFinal <= 0 
            ? 39.90 : (39.90 * adicionaisValorFinal),
            mostrarAdicionais: false,

            adicionais : [{
              adicionalID: 1,
              adicionalNome: "TOMATE",
              adicionalQuantidade: 0,
              adicionalValor: 0.15,
            },
            {
              adicionalID: 2,
              adicionalNome: "CEBOLA",
              adicionalQuantidade: 0,
              adicionalValor: 0.10,
            },
            {
              adicionalID: 3,
              adicionalNome: "PICLES",
              adicionalQuantidade: 0,
              adicionalValor: 0.25,
            }]
          },
          {
            id: 6,
            imgSrc: frango,
            name: "FRANGO",
            description: "Burger de Frango de 150g, Mussarela, Alface, Tomate, Cebola Crispy e Cream Cheese no Pão Tradicional",
            price: adicionaisValorFinal <= 0 
            ? 31.90 : (31.90 * adicionaisValorFinal),
            mostrarAdicionais: false,

            adicionais : [{
              adicionalID: 1,
              adicionalNome: "TOMATE",
              adicionalQuantidade: 0,
              adicionalValor: 0.15,
            },
            {
              adicionalID: 2,
              adicionalNome: "CEBOLA",
              adicionalQuantidade: 0,
              adicionalValor: 0.10,
            },
            {
              adicionalID: 3,
              adicionalNome: "PICLES",
              adicionalQuantidade: 0,
              adicionalValor: 0.25,
            }]
          },
          {
            id: 7,
            imgSrc: philadelphia,
            name: "PHILADELPHIA",
            description: "Burger Bovino de 150gr, Queijo Cheddar, tiras de Bacon, anéis de Cebola empanada",
            price: adicionaisValorFinal <= 0 
            ? 35.90 : (35.90 * adicionaisValorFinal),
            mostrarAdicionais: false,

            adicionais : [{
              adicionalID: 1,
              adicionalNome: "TOMATE",
              adicionalQuantidade: 0,
              adicionalValor: 0.15,
            },
            {
              adicionalID: 2,
              adicionalNome: "CEBOLA",
              adicionalQuantidade: 0,
              adicionalValor: 0.10,
            },
            {
              adicionalID: 3,
              adicionalNome: "PICLES",
              adicionalQuantidade: 0,
              adicionalValor: 0.25,
            }]
          },
          {
            id: 8,
            imgSrc: prime,
            name: "PRIME",
            description: "Burger Bovino de 150gr, Cheddar, Bacon, Cebola Roxa, Tomate, Alface e Molho especial no Pão Tradicional",
            price: adicionaisValorFinal <= 0 
            ? 29.90 : (29.90 * adicionaisValorFinal),
            mostrarAdicionais: false,
            adicionais : [{
              adicionalID: 1,
              adicionalNome: "TOMATE",
              adicionalQuantidade: 0,
              adicionalValor: 0.15,
            },
            {
              adicionalID: 2,
              adicionalNome: "CEBOLA",
              adicionalQuantidade: 0,
              adicionalValor: 0.10,
            },
            {
              adicionalID: 3,
              adicionalNome: "PICLES",
              adicionalQuantidade: 0,
              adicionalValor: 0.25,
            }]
          },
    ]);

    // Soma o valor dos adicionais
    const getAddsPrice = () => {
      const total = menuItems.reduce((menuTotal, menuItem) => {
        const adicionaisTotal = menuItem.adicionais.reduce((adicionalTotal, adicional) => {
          return adicionalTotal + (adicional.adicionalQuantidade || 0) * (adicional.adicionalValor || 0)
        }, 0)
        return menuTotal + adicionaisTotal;
      }, 0)
      setAdicionaisValorFinal(total)
      return total
    };

    // Adiciona adicionais
    const addAdicional = (menuItemId, adicionalId) => {
      setMenuItems((prevMenuItems) =>
        prevMenuItems.map((menuItem) =>
          menuItem.id === menuItemId
            ? {
                ...menuItem,
                adicionais: menuItem.adicionais.map((adicional) =>
                  adicional.adicionalID === adicionalId
                    ? {
                        ...adicional,
                        adicionalQuantidade: (adicional.adicionalQuantidade || 0) + 1,
                      }
                    : adicional
                ),
              }
            : menuItem
        )
      )
      getAddsPrice()
    }

    // Remove adicionais
    const removeAdicional = (menuItemId, adicionalId) => {
      setMenuItems((prevMenuItems) =>
        prevMenuItems.map((menuItem) =>
          menuItem.id === menuItemId
            ? {
                ...menuItem,
                adicionais: menuItem.adicionais.map((adicional) =>
                  adicional.adicionalID === adicionalId
                    ? {
                        ...adicional,
                        adicionalQuantidade: Math.max((adicional.adicionalQuantidade || 0) - 1, 0),
                      }
                    : adicional
                ),
              }
            : menuItem
        )
      )
      getAddsPrice()
    }

    return (
        <APIContext.Provider 
            value={{ 
                listaCervejas,
                listaDoces,
                listaMolhos,
                listaPorcoes,
                listaRefrigerantes,
                listSucos,
                menuItems,
                setMenuItems,
                addAdicional,
                removeAdicional,
                getAddsPrice,
                }}>
            {children}
        </APIContext.Provider>
    );
};