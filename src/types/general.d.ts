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

type TSelectOption<TValue> = {
  label: string;
  value: TValue[];
};

type TSelectField = Pick<
  TInputField,
  "inputStyles" | "name" | "error" | "extra" | "label" | "id" | "disabled"
> & {
  isMulti: boolean;
  options: TSelectOption[];
  control: any;
};

type TProduct = {
  id: string;
  brand: string;
  company: string;
  crossedPrice: number;
  discount: number;
  instock: number;
  manufacturer: string;
  name: string;
  price: number;
  status: "AVAILABLE" | "UNAVAILABLE";
  subCategories: string[];
  warranty: string;
  illustrations: File[];
  reviews: [];
};

interface ControlledIllustrationField {
  color: string;
  description: string;
  file: string;
}
