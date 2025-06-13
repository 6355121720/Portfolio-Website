import {createContext} from 'react'
import {useState, useEffect} from 'react'

export const leetcodeContext = createContext();

export const LeetcodeProvider = ({children}) => {

    const [loading, setLoading] = useState(true)
    const [leetcodeData, setLeetcodeData] = useState(null)

    useEffect(() => {
        fetch("https://leetcode-api-faisalshohag.vercel.app/viraldobariya33")
        .then((data) => data.json())
        .then((data) => setLeetcodeData(data))
        .finally(() => {
        setLoading(false);
        });
    }, [])

    return (
        <leetcodeContext.Provider value={{loading, leetcodeData}}>
            {children}
        </leetcodeContext.Provider>
    )

}