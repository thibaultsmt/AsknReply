import styled from 'styled-components'
import useCategories from './utils/useCategories'



const Categorie = () => {

    const {sportsArrays, selectCategories} = useCategories()

    return (
        <>
            <CategoriesWrapper>
                <Categories onClick={() => selectCategories(1)}>BasketBall</Categories>
                <Categories onClick={() => selectCategories(2)}>FootBall</Categories>
                <Categories onClick={() => selectCategories(3)}>Tennis</Categories>
                <Categories onClick={() => selectCategories(4)}>Hokey</Categories>
            </CategoriesWrapper>
            {sportsArrays.length > 0 ?
            <AsknReplyWarpper>
                <QuestionsWarpper>
                    {sportsArrays.map((q, idx) => <div key={idx}>{q}</div>)}
                </QuestionsWarpper>
                <AnswerWarpper>
                    Reply:
                </AnswerWarpper>
            </AsknReplyWarpper>
            : null}
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