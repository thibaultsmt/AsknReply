import styled from 'styled-components'
import useCategories from './utils/useCategories'
import Loader from '../../Assets/loader.gif'
import { useState } from 'react'



const Categorie = () => {

    const {sportsArrays, selectCategories} = useCategories()
    const [replyAction, setReplyAction] = useState(false)
    const [res, setRes] = useState(false)


    const update = () => {
        setReplyAction(true)
        setTimeout(() => {
            setReplyAction(false)
            setRes(true)
        }, 2000)
    }

    const reset = () => {
        setReplyAction(false)
        setRes(false)
    }

    return (
        <>
            <CategoriesWrapper>
                <Categories onClick={() => {
                    reset()
                    selectCategories(1, update)}
                }>BasketBall</Categories>
                <Categories onClick={() => {
                    reset()
                    selectCategories(2, update)}
                }>FootBall</Categories>
                <Categories onClick={() => {
                    reset()
                    selectCategories(3, update)}
                }>Tennis</Categories>
                <Categories onClick={() => {
                    reset()
                    selectCategories(4, update)}
            }>Hockey</Categories>
            </CategoriesWrapper>
            {sportsArrays.length > 0 ? <AsknReplyWarpper>
                {sportsArrays.length > 0  && replyAction === false && res === false ?
                    <QuestionsWarpper>
                        {sportsArrays.map((q, idx) => <div key={idx}>{q}</div>)}
                    </QuestionsWarpper>
                : sportsArrays.length > 0  && replyAction ? <img src={Loader} alt='loading...'/>
                : res ? <AnswerWarpper>
                    Reply:
                </AnswerWarpper> : null
                }
            </AsknReplyWarpper> : null}
        </>
    )
}

const Categories = styled.button`
  background: transparent;
  border-radius: 10px;
  border: 2px solid palevioletred;
  color: palevioletred;
  font-size: 1.5em;
  margin: 0.5em 1em;
  padding: 0.75em 1.5em;

  &:hover {
      background: palevioletred;
      color: white;
      transition: all 0.5s ease;
  }
`

const CategoriesWrapper = styled.div`
    display: flex;
`;

const AsknReplyWarpper = styled.div`
    display: flex;
    width: 100%;
    height: 53vh;
    justify-content: center;
`;

const QuestionsWarpper = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: column;
    overflow: auto;
`;

const AnswerWarpper = styled.div`
    width: 20%;
    border: solid 3px palevioletred;
    border-radius: 20px;
    align-self: center;
    margin-left: 8em;
    height: 40%;
    background-color: white;
`;

export default Categorie