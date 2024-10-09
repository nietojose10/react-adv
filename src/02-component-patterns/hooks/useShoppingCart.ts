import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
    
        //ProductInCart Object Example
    // {
    //     '1': { ...product1, count: 10 },
    //     '2': { ...product2, count: 2 },
    // }

    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: {count : number, product: Product }) => {


        setShoppingCart( oldShoppingCart => {

            console.log({count});
            if ( count === 0 ) {
                //*My way
                // delete oldShoppingCart[product.id]
                // return { ...oldShoppingCart }
                //*Video's way
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                return rest;
            } 

            return {
                ...oldShoppingCart,
                [ product.id ]: { ...product, count }
            }


        })

    }

    return {
        //*Properties
        shoppingCart,
        //*Methods
        onProductCountChange,

    }
}
