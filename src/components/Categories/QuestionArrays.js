import Sentences from '../Sentences/Sentences'

const BasketBall = (update) => {
    return [
        <Sentences id={1} update={update} first="How many" second="has" third="won"/>,
        <Sentences id={1} update={update} first="How many" second="he won"/>,
        <Sentences id={1} update={update} first="How many" second="he won"/>,
        <Sentences id={1} update={update} first="How many" second="he won"/>,
        <Sentences id={1} update={update} first="How many" second="he won"/>,
        <Sentences id={1} update={update} first="How many" second="he won"/>,
        <Sentences id={1} update={update} first="How many" second="he won"/>,
        <Sentences id={1} update={update} first="How many" second="he won"/>,
    ]
}

const FootBall = (update) => {
   return  [
    <Sentences id={2} update={update} first="How many" second="he won"/>,
    <Sentences id={2} update={update} first="How many" second="he won"/>,
    ]
}

const Tennis = (update) => {
    return [
    <Sentences id={3} update={update} first="How many" second="has" third="won"/>,
    <Sentences id={3} update={update} first="How many" second="he won"/>,
    <Sentences id={3} update={update} first="How many" second="he won"/>,
    ]
}

const Hockey = (update) =>  {
   return [
    <Sentences id={4} update={update} first="How many" second="he won"/>,
    <Sentences id={4} update={update} first="How many" second="he won"/>,
    <Sentences id={4} update={update} first="How many" second="he won"/>,
    <Sentences id={4} update={update} first="How many" second="he won"/>,
    ]
}

export { BasketBall, FootBall, Tennis, Hockey}