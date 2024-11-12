export interface GetIdByTokenUsecase {
    load: (params: GetIdByTokenUsecase.Params) => Promise<GetIdByTokenUsecase.Result>
}

export namespace GetIdByTokenUsecase {
    export type Params = {
        accessToken: string
        role?: string
    }

    export type Result = {
        id: string
    }
}