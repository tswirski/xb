import { useEffect, useState } from 'react';
import { fetchProducts, type ProductType } from '../services/products';
import { useApi } from '@hooks/useApi';
import { Button, Header, Text } from '@ui';
import { useQuery } from '@tanstack/react-query';

export const ProductsList = () => {
  // const { data, isError, isLoading } = useApi<ProductType[] | undefined>(fetchProducts);
  // const { data, isError, isLoading } = useApi(fetchProducts);
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  // const [data, setData] = useState<ProductType[]>([]);

  // const loadData = async () => {
  //   try {
  //     const result = await fetchProducts(); // data, success, isLoading, isError
  //     if (result) {
  //       setData(result);
  //     }
  //   } catch (error) {
  //     // if (error instanceof HttpError) {
  //     //   // api error
  //     // } else if (error instanceof ZodError) {
  //     // } else {
  //     //   console.error('');
  //     // }
  //   }
  // };

  // useEffect(() => {
  //   loadData();
  // }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  } else if (isError) {
    return <Text>Error!</Text>;
  }

  return (
    <div>
      <Header>Products</Header>
      <ul className="dark:text-slate-300">
        {data?.map((elem) => (
          <li key={elem.id}>
            {elem.fields.name}, ${elem.fields.price}
          </li>
        ))}
      </ul>
      <Button onClick={() => refetch()}>Refresh</Button>
    </div>
  );
};
