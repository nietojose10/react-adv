import styles from '../styles/styles.module.css';
import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';
// import { ProductTitle } from './ProductTitle';
// import { ProductImage } from './ProductImage';
// import { ProductButtons } from './ProductButtons';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: ( args: ProductCardHandlers ) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { increaseBy, counter, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider value={{
        counter,
        increaseBy,
        product,
        maxCount
    }}>
        <div 
            
            className={ `${styles.productCard} ${className} ` }
            style={ style }
        >

            { 
                children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increaseBy,
                    reset
                }) 
            }
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