import React, { createContext, useState, useEffect } from 'react'

// API
import { getQuestions } from '../api/api';

export const QuestionsContext = createContext();

const QuestionsContextProvider = (props) => {

    const [Questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setQuestions(await getQuestions());
        }

        fetchAPI();

    }, []);

    return ( 
        <QuestionsContext.Provider value={Questions}>
            {props.children}
        </QuestionsContext.Provider>
     );
}
 
export default QuestionsContextProvider;