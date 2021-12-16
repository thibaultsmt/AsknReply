import styled from 'styled-components'

const Select = ({askTab, addParams}) => {



    return (
        <Selector onChange={(e) => addParams(e.target.value) }>
            <option selected disabled hidden>select</option>
            {askTab?.map(ask =>
                <option
                    value={ask.value}
                    key={ask.value}
                >
                    {ask.name}
                </option>
            )}
        </Selector>
    )
}

const Selector = styled.select`
max-width: 4.1em;
height: 35px;
background: transparent;
color: palevioletred;
padding-left: 5px;
padding-right: 5px;
font-size: 20px;
border: none;

option {
  color: black;
  background: white;
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;
}
`;

export default Select