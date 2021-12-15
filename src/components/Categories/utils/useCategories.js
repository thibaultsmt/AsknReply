import { useState } from 'react'
import {BasketBall, FootBall, Tennis, Hockey} from '../QuestionArrays'


const useCategories = () => {

    const [sportsArrays, setSportArray] = useState([])

    const selectCategories = (id, update) => {
        let value = []
        switch (id) {
            case 1:
                value = BasketBall(update)
                setSportArray(value)
                break;
            case 2:
                value = FootBall(update)
                setSportArray(value)
                break;
            case 3:
                value = Tennis(update)
                setSportArray(value)
                break;
            case 4:
                value = Hockey(update)
                setSportArray(value)
                break;
            default:
                break;
        }
    }

    return {sportsArrays, selectCategories}
}


export default useCategories