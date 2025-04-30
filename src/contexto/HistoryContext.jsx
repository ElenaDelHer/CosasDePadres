//Contexto para traer las historias de padres
import { GetAllHistory } from "../../servicesHistorias";
import { useState,useEffect,createContext } from "react";

//Creacion del contexto de las historias
export const HistoryContext = createContext();

//Creacion del preveedor 
export function HistoryProvider({children }) {
    const[history, setHistory] = useState([]);
    const [search, setSearch] = useState('');
    //llamada a services
    useEffect(()=>{
        setHistory(GetAllHistory());
    },[])
    const handleSearch = (query)=>{
        setSearch(query)
    };
    const filterHistory = history.filter(
        (h) =>
          h.tematica.toLowerCase().includes(search.toLowerCase()) ||
          h.autor.toLowerCase().includes(search.toLowerCase())
      );
      
    return(
        <HistoryContext.Provider value={{history,handleSearch,filterHistory}}>
            {children}
        </HistoryContext.Provider>
    )
}