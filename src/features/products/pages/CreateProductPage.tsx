import { CreateProductForm } from '../components/CreateProductForm';
import { CreateProductDto, createProductSchema } from '@apptypes/ProductDto';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const CreateProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (data: CreateProductDto): void => {
    // console.log({ data }); // POST -> API
    // registrationSchema.parse(data) // throw an error
    const { success, error } = createProductSchema.safeParse(data); // { success: true }
    if (success) {
      // API call
      toast.success('Done! Calling dispatch');
      console.info(data);
      dispatch({ type: 'CREATE_PRODUCT_REQUESTED', payload: data });
      navigate('/products');
    } else {
      // validation error
      console.log(error);
      toast.error('Validation error');
    }
  };

  return <CreateProductForm onSubmit={handleSubmit} />;
};
