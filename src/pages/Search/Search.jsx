import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

const fetchDocs = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/doctors');
    return res.json();
}   



const Search = () => {
    const {data , status} = useQuery('doctors' , fetchDocs)
    console.log(data)

    return (
      <div>
        hi
      </div>
    )

 
}

export default function wraped(){
  return (

    <QueryClientProvider client={queryClient}  contextSharing={true}>
      <Search />
   </QueryClientProvider>
     
   )
}
