import { User, UserService } from "./UserService"

describe('UserService', () => {
    const mockDb: User[] = []
    const userService = new UserService(mockDb);

    it('Deve adicionar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createUser('amauri', 'amauri@gmail.com')
        expect(mockConsole).toHaveBeenCalledWith('Db Atualizado', mockDb)
    })
})