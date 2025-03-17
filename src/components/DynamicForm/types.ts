export type FieldType =
  | 'text'
  | 'number'
  | 'email'
  | 'password'
  | 'select'
  | 'multiselect'
  | 'checkbox'
  | 'radio'
  | 'date'
  | 'array'
  | 'object';

export interface ValidationRule {
  type: 'required' | 'min' | 'max' | 'pattern' | 'custom';
  value?: any;
  message: string;
  validator?: (value: any) => boolean | Promise<boolean>;
}

export interface FieldSchema {
  type: FieldType;
  name: string;
  label: string;
  placeholder?: string;
  defaultValue?: any;
  validation?: ValidationRule[];
  options?: Array<{ label: string; value: any }>;
  fields?: FieldSchema[]; // For nested objects and arrays
  disabled?: boolean;
  hidden?: boolean;
  dependencies?: Array<{
    field: string;
    value: any;
    action: 'show' | 'hide' | 'enable' | 'disable';
  }>;
}

export interface FormSchema {
  id: string;
  title?: string;
  description?: string;
  fields: FieldSchema[];
  submitLabel?: string;
  onSubmit?: (values: Record<string, any>) => void | Promise<void>;
}

export interface FormState {
  values: Record<string, any>;
  errors: Record<string, string[]>;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  isValid: boolean;
  submitCount: number;
}

// TODO: Implement form builder and state management
export interface FormBuilderProps {
  schema: FormSchema;
  initialValues?: Record<string, any>;
  onChange?: (values: Record<string, any>) => void;
  onSubmit?: (values: Record<string, any>) => void | Promise<void>;
  onError?: (errors: Record<string, string[]>) => void;
}
