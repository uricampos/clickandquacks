import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function App() {
    const { data } = useQuery({
        queryFn: async () => {
            const { data } = await axios.get('/');
            return data;
        },
    });
    return <>{data}</>;
}

export default App;
