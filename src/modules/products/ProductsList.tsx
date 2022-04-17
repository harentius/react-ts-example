import { apiClient, Product } from '@/modules/client';
import { useEffect, useState } from 'react';
export interface ProductsListProps {

};

const ProductsList = (props: ProductsListProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await apiClient.getProducts();
      setProducts(data);
    };
    loadProducts();
    console.log('Loaded products');
  }, [])

  return <div>
    {products && products[0] && products[0].description}
  </div>
};

export default ProductsList;
