import { useState } from 'react'
import SparqlClient from 'sparql-http-client'
import {BasketBall, FootBall, HandBall, Hockey} from '../QuestionArrays'


const useCategories = () => {

    const [sportsArrays, setSportArray] = useState([])
    const [replyAction, setReplyAction] = useState(false)
    const [res, setRes] = useState(false)

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
                value = HandBall(update)
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

    const request = async(query, endpoint) => {

        console.log('Endpoint: ',endpoint)

        const endpointUrl = endpoint === 'wiki' ? 'https://query.wikidata.org/sparql' :
        'https://dbpedia.org/sparql'

        const client = new SparqlClient({ endpointUrl })
        const stream = await client.query.select(query)

        stream.on('data', row => {
          Object.entries(row).forEach(([key, value]) => {
            console.log(`${key}: ${value.value} (${value.termType})`)
          })
        })

        stream.on('error', err => {
          console.error(err)
        })
    }

    const update = async(query, endpoint) => {
        setReplyAction(true)
        await request(query, endpoint)
        setTimeout(() => {
            setReplyAction(false)
            setRes(true)
        }, 2000)
    }

    const reset = () => {
        setReplyAction(false)
        setRes(false)
    }

    return {
        sportsArrays,
        selectCategories,
        replyAction,
        res,
        reset,
        update
    }
}

export default useCategories