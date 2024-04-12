type TUser = {
    email: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    id: number
}

type TAuthTokens = {
    refresh: string,
    access: string
}

type TCProps = {
    children: ReactNode
}

type TRole = {
    id: number;
    name: string;
    description: string
}

type TCategory = {
    name: string;
    description: string;
    subCategories: Omit<TCategory, "subCategories">[]
}
