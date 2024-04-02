type TUser = {
    email: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    key: string
}

type TAuthTokens = {
    refresh: string,
    access: string
}

type TCProps = {
    children: ReactNode
}