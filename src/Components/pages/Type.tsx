import "../../App.css"

// take api's
import axios from 'axios'

import {FC, useState, useEffect} from "react";



const Type=()=> {
    const [words, setWords] = useState<string>('')
    const [index,setIndex]=useState<number>(0)
    const [mistakes,setMistakes]=useState<string[]>([])
    const [time, setTime] = useState<number>(60)
    const [wpm,setWpm]=useState<number>(0)
    const [suggestionUrl,setSuggestionUrl]=useState<string>('')

    const script = "heyoois"

    const handleNewTest =()=>{
        // resetting the url based on suggested from test results then refreshes
        // navigate(suggestionUrl) 
        // navigate(0)
    }
    
        return(
            <div className="display">
                <input className="type" placeholder={script}>
                
                </input>
            </div>
        )
}
export default Type