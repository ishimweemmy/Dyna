type TUser = {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  id: number;
};

type TAuthTokens = {
  refresh: string;
  access: string;
};

type TCProps = {
  children: ReactNode;
};

type TRole = {
  id: number;
  name: string;
  description: string;
};

type TSubCategory = Omit<TCategory, "subCategories">;

type TCategory = {
  id: string;
  name: string;
  description: string;
  subCategories: TSubCategory[];
};

type TManufacturer = Omit<TCategory, "subCategories"> & { logoUrl: string };

type TInputField = {
  id: string;
  label: string;
  extra?: string;
  placeholder: string;
  variant: string;
  state?: string;
  disabled?: boolean;
  type?: string;
  name: string;
  value?: string;
  error?: FieldError | any;
  register: UseFormRegister<any>;
  inputStyles?: string;
};
