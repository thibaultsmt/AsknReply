import { useEffect } from 'react'
import styled from 'styled-components'
import Select from './Select'
import useSelect from './utils/useSentences'


const Sentences = ({id, idval, update, first, second, third, query, choice, endpoint}) => {

    const {askTab, choiceSelect, addParams, paramsQuery} = useSelect(id)

    useEffect(() => {
        choiceSelect(id)
    }, [choiceSelect, id])


    return (
        <Wrapper>
            <Sentence>
                {first ? first : null}
                <Select askTab={askTab.find(e => e)?.[choice[0]]} addParams={addParams[0]}/> {second ? second : null}
                {third ? <Select askTab={askTab.find(e => e)?.[choice[1]]} addParams={addParams[1]}/> : null} {third ? third : null}
                {paramsQuery[0].length > 0  && paramsQuery[1].length > 0?
                <Ask onClick={() => update(query(paramsQuery), endpoint, idval)}>
                    ask
                </Ask> : paramsQuery[0].length > 0 && !third?
                <Ask onClick={() => update(query(paramsQuery), endpoint, idval)}>
                    ask
                </Ask>  : null }
            </Sentence>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    padding: 5px;
    &:hover {
        border-radius: 10px;
        border: solid 1.5px lightgrey;
    }
`

const Sentence = styled.p`
    height: 35px;
    color: white;
    font-size: 20px;
    flex-wrap: wrap;
`

const Ask = styled.button`
  background: palevioletred;
  border-radius: 10px;
  border: 2px solid palevioletred;
  color: white;
  font-size: 20px;
  margin-left: 10px;
  padding: 0.50em 0.50em;

  &:hover {
      background: palevioletred;
      border-color: white;
      color: white;
  }
`;

export default Sentences