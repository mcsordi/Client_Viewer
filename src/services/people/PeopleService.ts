import { Enviroment } from "../../environment/index.ts"
import { Api } from "../api/axios-config/index.ts"

type TPeopleList = {
    id: number;
    email: string;
    IdCity: number;
    fullName: string;

}
type TPeopleListCount = {
    data: TPeopleList[];
    totalCount: number;

}
type TDataPeopleList = {
    data: TPeopleList[];
}

const getAll = async (page = 1): Promise<TPeopleListCount | Error> => {

    const relativeUrl = `/people?_page=${page}&_per_page=${Enviroment.LIMITE_DE_LINHAS}`
    try {
        const { data, headers } = await Api.get(relativeUrl)
        if (data) {
            return {
                data, totalCount: Number(headers['x-total-count'] || Enviroment.LIMITE_DE_LINHAS)
            }
        }
        return new Error("Erro ao listar registros")
    } catch (error) {
        console.error(error)
        return new Error((error as { mesage: string }).mesage || "Erro ao listar registros")
    }

}
const getByFullName = async (filter = ""): Promise<TDataPeopleList | Error> => {
    const relativeUrl = `/people?nomeCompleto=${filter}`
    try {
        const { data } = await Api.get(relativeUrl)
        if (data) {
            return data
        }
        return new Error("Error ao listar por nome completo")
    } catch (error) {
        console.error(error)
        return new Error((error as { message: string }).message || "Error ao listar por nome completo")
    }
}
const getById = async (id: number): Promise<TDataPeopleList | Error> => {
    const relativeUrl = `/people/${id}`
    try {
        const { data } = await Api.get(relativeUrl)
        if (data) {
            return data
        }
        return new Error("Erro ao buscar registros por id")
    } catch (error) {
        console.error(error)
        return new Error((error as { mesage: string }).mesage || "Erro ao buscar registros por id")
    }

}
const create = async (datas: Omit<TPeopleList, 'id'>): Promise<number | Error> => {
    try {
        const { data } = await Api.post<TPeopleList>(`/people`, datas)
        if (data) {
            return data.id
        }
        throw new Error("Erro ao cadastrar novos dados")
    } catch (error) {
        console.error(error)
        throw new Error((error as { message: string }).message || "Erro ao cadastrar novos dados")
    }

}
const updateById = async (id: number, datas: TPeopleList): Promise<void | Error> => {
    try {
        const relativeUrl = `/people/${id}`
        await Api.put(relativeUrl, datas)
    } catch (error) {
        console.error(error)
        throw new error((error as { message: string }).message || "Erro ao atualizar dados")
    }
}
const deleteById = async (id: number): Promise<void | Error> => {
    const relativeUrl = `/people/${id}`
    try {
        await Api.delete(relativeUrl)
    } catch (error) {
        console.error(error)
        throw new error((error as { message: string }).message || "Erro ao deletar dados")
    }

}

export const PeopleService = {
    getAll,
    getById,
    getByFullName,
    create,
    updateById,
    deleteById,
}

