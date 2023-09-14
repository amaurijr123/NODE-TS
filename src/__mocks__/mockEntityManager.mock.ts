import { EntityManager } from "typeorm";

interface mockManagerArgs {
    saveReturn?: object | [object]
}

export const getMockEntityManager = async ({
    saveReturn = undefined
}:mockManagerArgs): Promise<EntityManager> => {
    const manager: Partial<EntityManager> = {}

    manager.save = jest.fn().mockImplementation(() => Promise.resolve())

    return manager as EntityManager
}