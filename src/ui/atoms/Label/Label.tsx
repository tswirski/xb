type Props = {
  id: string;
  children: string;
};

export const Label = ({ id, children }: Props) => {
  return (
    <label
      htmlFor={id}
      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
    >
      {children}
    </label>
  );
};
