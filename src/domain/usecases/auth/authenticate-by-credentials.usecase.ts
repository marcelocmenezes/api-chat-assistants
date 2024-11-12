export interface AuthenticateByCredentialsUsecase {
    authenticate: (params: AuthenticateByCredentialsUsecase.Params) => Promise<AuthenticateByCredentialsUsecase.Result>
}

export namespace AuthenticateByCredentialsUsecase {
    export type Params = {
        email: string
        password: string
    }

    export type Result = {
        accessToken: string
        name: string
    } | null
}