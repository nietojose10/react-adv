import styles from '../styles/styles.module.css';
import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { onChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces';
// import { ProductTitle } from './ProductTitle';
// import { ProductImage } from './ProductImage';
// import { ProductButtons } from './ProductButtons';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
}

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {

    const { increaseBy, counter } = useProduct({ onChange, product, value });

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}>
        <div 
            
            className={ `${styles.productCard} ${className} ` }
            style={ style }
        >

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