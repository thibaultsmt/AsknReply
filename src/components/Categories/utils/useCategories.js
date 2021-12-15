import { useState } from 'react'
import {BasketBall, FootBall, Tennis, Hokey} from '../QuestionArrays'


const useCategories = () => {

    const [sportsArrays, setSportArray] = useState([])

    const selectCategories = (id) => {
        switch (id) {
            case 1:
                setSportArray(BasketBall)
                console.log('BasketBall:', BasketBall)
                break;
            case 2:
                setSportArray(FootBall)
                console.log('FootBall:', FootBall)
                break;
            case 3:
                setSportArray(Tennis)
                console.log('Tennis:', Tennis)
                break;
            case 4:
                setSportArray(Hokey)
                console.log('Hokey:', Hokey)
                break;
            default:
                break;
        }
    }

    return {sportsArrays, selectCategories}
}


export default useCategories