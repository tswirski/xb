import { useDispatch, useStore } from 'react-redux';
import { ProductsList } from '../components/ProductsList';
import { useEffect } from 'react';

export const ProductsListPage = () => {
  const dispatch = useDispatch();

   
  useEffect(() => {
    dispatch({ type: 'PRODUCTS_FETCH_REQUESTED' });
  }, []);

  return <ProductsList />;
};
