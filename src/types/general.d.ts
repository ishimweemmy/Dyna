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

type TManufacturer = Omit<TCategory, "subCategories"> & { file: File };
