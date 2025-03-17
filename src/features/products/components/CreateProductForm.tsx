import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, Input } from '@ui';
import { type CreateProductDto, createProductSchema } from '@apptypes/ProductDto';

interface Props {
  onSubmit: (data: CreateProductDto) => void;
}

export const CreateProductForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductDto>({
    resolver: zodResolver(createProductSchema),
  });
  // createRef

  const handleRegistrationForm: SubmitHandler<CreateProductDto> = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleRegistrationForm)}>
      <Input {...register('name')} label="Name" error={errors.name} />
      <Input {...register('description')} label="Description" error={errors.description} />
      <Input {...register('price', { valueAsNumber: true })} label="Price" error={errors.price} />

      <div>
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
};
