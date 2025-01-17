import { createContext, Context } from 'react';
import { NOOP } from '../_util/constant';
import { FormItemContextProps, FormContextProps, KeyType, FormInstance } from './interface';

export type FormContextType<
  FormData = any,
  FieldValue = FormData[keyof FormData],
  FieldKey extends KeyType = keyof FormData
> = Context<FormContextProps<FormData, FieldValue, FieldKey>>;

export const FormContext = createContext<FormContextProps>({
  layout: 'horizontal',
  labelCol: { span: 5, offset: 0 },
  labelAlign: 'right',
  wrapperCol: { span: 19, offset: 0 },
  requiredSymbol: true,
  getFormElementId: () => 'arco-',
  store: {
    getFieldsValue: NOOP,
    getFieldValue: NOOP,
    getFieldError: NOOP,
    getFieldsError: NOOP,
    getTouchedFields: NOOP,
    getFields: NOOP,
    setFieldValue: NOOP,
    setFieldsValue: NOOP,
    setFields: NOOP,
    resetFields: NOOP,
    submit: NOOP,
    validate: NOOP,
    scrollToField: NOOP,
    getInnerMethods: () => ({
      registerField: NOOP,
      innerGetStore: NOOP,
    }),
  } as any,
});

export type FormItemContextType<
  FormData = any,
  FieldValue = FormData[keyof FormData],
  FieldKey extends KeyType = keyof FormData
> = Context<FormItemContextProps<FormData, FieldValue, FieldKey>>;
export const FormItemContext = createContext<FormItemContextProps>({});

export const FormProviderContext = createContext<{
  register?: (name: string, form: FormInstance) => void;
  onFormValuesChange?: (id: string | undefined, changedValues) => void;
  onFormSubmit?: (id: string | undefined, values) => void;
}>({});

export const FormListContext = createContext<{
  getItemKey?: (key) => string;
}>({});
