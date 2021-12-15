import styled from 'styled-components'
import Select from './Select'

const askTab = [
    {id:"1", name: "auto"},
    {id:"2", name: "test"},
    {id:"3", name: "aaassrgrgrgzah"},
    {id:"4", name: "nope"},
]

const Sentences = ({first, second, third}) => {
    return (
        <Wrapper>
            <Sentence>
                {first ? first : null}
                <Select askTab={askTab}/> {second ? second : null}
                {third ? <Select askTab={askTab}/> : null} {third ? third : null} <Ask>ask</Ask>
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