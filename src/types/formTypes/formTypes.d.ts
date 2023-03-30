interface IPropsForm {
  onFinish: (value: any) => void;
  onFinishFailed: (value: any) => void;
  defaultValue: {
    title?: string;
    price?: string;
    category?: string;
    description?: string;
  };
}
