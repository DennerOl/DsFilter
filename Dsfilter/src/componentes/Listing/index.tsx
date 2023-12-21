import { ProductDTO } from '../../models/product';
import './styles.css';

type Props = {
  products: ProductDTO[];
}

export default function Listing({ products }: Props) {
  return (
    <div className='card'>
      <div className='dsf-container dsf-listing'>

        {
          products.map(
            product =>
              <>
                <div className='dsf-listing-product' key={product.id}>
                  <h3 >{product.name}</h3>
                  <p>R$ {product.price.toFixed(2)}</p>
                </div>
              </>
          )
        }

      </div>


    </div>




  );

}