import { useState } from 'react'
import {BasketBall, FootBall, Tennis, Hockey} from '../SelectArray'


const useSelect= () => {

    const [askTab, setAskTab] = useState([])

    const choiceSelect = (id) => {
        switch (id) {
            case 1:
                setAskTab(BasketBall)
                break;
            case 2:
                setAskTab(FootBall)
                break;
            case 3:
                setAskTab(Tennis)
                break;
            case 4:
                setAskTab(Hockey)
                break;
            default:
                break;
        }
    }

    return {askTab, choiceSelect}
}


export default useSelect