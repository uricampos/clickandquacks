import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useQuack = () => {
    return useQuery({
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:6000/quacks');
            return data;
        },
    });
};
