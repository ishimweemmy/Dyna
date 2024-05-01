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

type TIllustration = {
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
  id: string;
  color: string;
  description: string;
  file: File;
  imageUrl: string;
};

type TProduct = {
  id: string;
  brand: string;
  company: string;
  crossed_price: number;
  discount: number;
  inStock: number;
  manufacturer: TManufacturer;
  name: string;
  price: number;
  status: "AVAILABLE" | "UNAVAILABLE";
  categories: TCategory[];
  subCategories: TSubCategory[];
  warranty: string;
  illustrations: TIllustration[];
  reviews: [];
};

interface ControlledIllustrationField {
  color: string;
  description: string;
  file: string;
}
