import { useState } from 'react'
import {BasketBall, FootBall, HandBall, Hockey} from '../SelectArray'


const useSelect= () => {

    const [askTab, setAskTab] = useState([])
    const [paramsQuery1, setParamsQuery1] = useState('')
    const [paramsQuery2, setParamsQuery2] = useState('')

    const choiceSelect = (id) => {
        switch (id) {
            case 1:
                setAskTab(BasketBall)
                break;
            case 2:
                setAskTab(FootBall)
                break;
            case 3:
                setAskTab(HandBall)
                break;
            case 4:
                setAskTab(Hockey)
                break;
            default:
                break;
        }
    }

    const addParams1 = (newValue) => {
        console.log(newValue)
        setParamsQuery1(newValue)
    }

    const addParams2 = (newValue) => {
        console.log(newValue)
        setParamsQuery2(newValue)
    }

    return {
        askTab,
        choiceSelect,
        paramsQuery: [paramsQuery1, paramsQuery2],
        addParams: [addParams1, addParams2]
    }
}


export default useSelect