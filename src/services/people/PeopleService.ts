import { Enviroment } from '../../environment/index';
import { Api } from '../api/axios-config/index';

export type TPeopleList = {
    id: number;
    email: string;
    cityId: number;
    fullName: string;
};
type TPeopleListCount = {
    data: TPeopleList[];
    totalCount: number;
};

export type TDataPeopleList = {
    data: TPeopleList[];
};

type TCitiesList = {
    id: number;
    nameCity: string;
    stateCity: string;
};
type TDataCities = {
    data: TCitiesList[];
};

const getAll = async (
    page = 1,
    filter = '',
): Promise<TPeopleListCount | Error> => {
    const relativeUrl = `/people?_page=${page}&_limit=${Enviroment.LIMITE_DE_LINHAS}&fullName_like=${filter}`;
    try {
        const { data, headers } = await Api.get(relativeUrl);
        if (data) {
            return {
                data,
                totalCount: Number(
                    headers['x-total-count'] || Enviroment.LIMITE_DE_LINHAS,
                ),
            };
        }
        return new Error('Erro ao listar registros');
    } catch (error) {
        console.error(error);
        return new Error(
            (error as { mesage: string }).mesage || 'Erro ao listar registros',
        );
    }
};
const getById = async (id: number): Promise<TDataPeopleList | Error> => {
    const relativeUrl = `/people/${id}`;
    try {
        const { data } = await Api.get(relativeUrl);
        if (data) {
            return data;
        }
        return new Error('Erro ao buscar registros por id');
    } catch (error) {
        console.error(error);
        return new Error(
            (error as { mesage: string }).mesage || 'Erro ao buscar registros por id',
        );
    }
};
const getCityById = async (id: number): Promise<TDataCities | Error> => {
    try {
        const { data } = await Api.get(`/cities?idCity=${id}`);
        if (data) {
            return data;
        }
        return new Error('Erro ao buscar cidades listadas');
    } catch (error) {
        console.error(error);
        return new Error(
            (error as { message: string }).message ||
            'Erro ao buscar cidades listadas',
        );
    }
};
const create = async (
    datas: Omit<TPeopleList, 'id'>,
): Promise<number | Error> => {
    try {
        const { data } = await Api.post<TPeopleList>(`/people`, datas);
        if (data) {
            return data.id;
        }
        throw new Error('Erro ao cadastrar novos dados');
    } catch (error) {
        console.error(error);
        throw new Error(
            (error as { message: string }).message || 'Erro ao cadastrar novos dados',
        );
    }
};
const updateById = async (
    id: number,
    datas: TPeopleList,
): Promise<void | Error> => {
    try {
        const relativeUrl = `/people/${id}`;
        await Api.put(relativeUrl, datas);
    } catch (error) {
        console.error(error);
        throw new error(
            (error as { message: string }).message || 'Erro ao atualizar dados',
        );
    }
};
const deleteById = async (id: number): Promise<void | Error> => {
    const relativeUrl = `/people/${id}`;
    try {
        await Api.delete(relativeUrl);
    } catch (error) {
        console.error(error);
        throw new error(
            (error as { message: string }).message || 'Erro ao deletar dados',
        );
    }
};

export const PeopleService = {
    getAll,
    getById,
    getCityById,
    create,
    updateById,
    deleteById,
};
