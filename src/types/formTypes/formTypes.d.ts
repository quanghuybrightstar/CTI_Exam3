// import { FormInstance } from 'antd/lib/form';

declare namespace Form {
  interface IFormProps {
    onFinish: (value: any) => void;
    onFinishFailed: (value: any) => void;
    forms: FormInstance;
  }
}
