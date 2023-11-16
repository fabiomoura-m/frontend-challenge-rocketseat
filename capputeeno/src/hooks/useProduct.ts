'use client'

import { ProductFetchResponse } from '@/types/product';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (productID: string): AxiosPromise<ProductFetchResponse> => {
    return axios.post(API_URL, {
        query: `
        query{
            Product(id: "${productID}"){
                name
                price_in_cents
                image_url
                description
                category
            }
        } 
        `
    });
};
export function useProduct(id: string) {
    const { data } = useQuery({
        queryFn: () => fetcher(id),
        queryKey: ['product', id],
        enabled: !!id,
        staleTime: 1000 * 60 * 5
    });

    return {
        data: data?.data?.data?.Product
    };
}
