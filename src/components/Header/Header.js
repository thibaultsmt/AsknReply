import styled from 'styled-components'

const Header = ({title}) => {
    return (
        <Title>
          {title}
        </Title>
    )
}

const Title = styled.h1`
    color: palevioletred;
    font-size: 5em;
  `;

export default Header