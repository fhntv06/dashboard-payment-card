export interface IUser {
    data: {
        full_name: string,
        id: number,
        login: string,
        role: string,
        // Вверху данные не проверенные
        name: string,
        surname: string,
        post: string,
        nickname: string,
        avatar: string,
    }
}