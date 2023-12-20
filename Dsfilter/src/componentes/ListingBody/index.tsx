import { useEffect, useState } from 'react';
import Listing from '../Listing';
import { ProductDTO } from '../../models/product';
import * as productService from '../../services/product-service';
import Filter from '../Filter';

type QueryParams = {
  valueMin: number;
  valueMax: number;
}



export default function ListingBody() {

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const minNewPrice = 0;
  const maxNewPrice = Number.MAX_VALUE;

  const [queryParams, setQueryParams] = useState<QueryParams>({
    valueMin: minNewPrice,
    valueMax: maxNewPrice
  });

  useEffect(() => {
    const produtos = productService.findByPrice(queryParams.valueMin, queryParams.valueMax)

    setProducts(produtos);
  }, [queryParams]);

  function handleSearch(min: number, max: number) {
    const newMin = min;
    const newMax = max;

    setQueryParams({ valueMin: newMin || minNewPrice, valueMax: newMax || maxNewPrice });
  }

  return (


    <main>

      <div>
        <Filter onSearch={handleSearch} />
        <Listing products={products} />
      </div>


    </main>

  );

}