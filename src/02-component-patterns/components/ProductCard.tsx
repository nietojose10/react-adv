import styles from '../styles/styles.module.css';
import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';
// import { ProductTitle } from './ProductTitle';
// import { ProductImage } from './ProductImage';
// import { ProductButtons } from './ProductButtons';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ children, product }: ProductCardProps) => {

    const { increaseBy, counter } = useProduct();

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}>
        <div className={ styles.productCard }>

            { children }
            {/* {
                <ProductImage img={ product.img }/>
                <ProductTitle title={ product.title } />
                <ProductButtons incrementFn={ increasedBy} counter={ counter } />
            } */}

        </div>
    </Provider>
    
  )
}

//*Creating new properties to the ProductCard Component and adding to this properties the respective components
// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;