import { useState } from 'react'
import SparqlClient from 'sparql-http-client'
import {BasketBall, FootBall, HandBall, Hockey} from '../QuestionArrays'


const useCategories = () => {

    const [sportsArrays, setSportArray] = useState([])
    const [replyAction, setReplyAction] = useState(false)
    const [response, setResponse] = useState('')
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

    const Answers = (id, res) => {
        let value = []
        switch (id) {
            case 1:
                value = `He comes from ${res}.`
                setResponse(value)
                break;
            case 2:
                value = `He got ${res} personal distinctions.`
                setResponse(value)
                break;
            case 3:
                value = `They won ${res} times.`
                setResponse(value)
                break;
            case 4:
                value = `${res} players has already played for this club.`
                setResponse(value)
                break;
            case 5:
                value = `${res} players got an award.`
                setResponse(value)
                break;
            case 6:
                value = `They won ${res} cups.`
                setResponse(value)
                break;
            case 7:
                value = `${res} won this competition.`
                setResponse(value)
                break;
            case 8:
                value = `${res} players play at this positions in this club.`
                setResponse(value)
                break;
            case 9:
                value = `${res} players played for both teams.`
                setResponse(value)
                break;
            case 10:
                value = `${res} players of this team use this hand.`
                setResponse(value)
                break;
            default:
                break;
        }
    }

    const request = async(query, endpoint, idval) => {

        console.log('Endpoint: ', endpoint ? endpoint : "dbpedia")

        const endpointUrl = endpoint === 'wiki' ? 'https://query.wikidata.org/sparql' :
        'https://dbpedia.org/sparql'

        const client = new SparqlClient({ endpointUrl })
        const stream = await client.query.select(query)

        stream.on('data', row => {
          Object.entries(row).forEach(([_key,value]) => {
            console.log(value.value)
            Answers(idval, value.value)
          })
        })

        stream.on('error', err => {
          console.error(err)
        })
    }

    const update = async(query, endpoint, idval) => {
        setReplyAction(true)
        await request(query, endpoint, idval)
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
        response,
        update
    }
}

export default useCategories