import Sentences from '../Sentences/Sentences'
import {COUNTRY, DISTINCTION, AWARDS, CLUBS, CUP} from '../../Queries/football'
import {LEAGUE, CLUBSCITY, AWARD} from '../../Queries/basketball'
import {POSITION} from '../../Queries/handball'
import {BOTHCLUB, HAND} from '../../Queries/hockey'


const BasketBall = (update) => {
    return [
        <Sentences id={1} update={update} first="Where does" second="come from ?" third="" query={COUNTRY} choice={["Players"]} endpoint="wiki"/>,
        <Sentences id={1} update={update} first="How many personal distinctions did" second="get ?" third="" query={DISTINCTION} choice={["Players"]} endpoint="wiki"/>,
        <Sentences id={1} update={update} first="How many NBA championships did" second="win ?" third="" query={LEAGUE} choice={["Club"]} endpoint=""/>,
        <Sentences id={1} update={update} first="How many players from" second="has already played for" third="?" query={CLUBSCITY} choice={["Place", "Club"]} endpoint=""/>,
        <Sentences id={1} update={update} first="How many players drafted in" second="got an award ?" third="" query={AWARD} choice={["Year"]} endpoint="wiki"/>,
    ]
}

const FootBall = (update) => {
   return  [
        <Sentences id={2} update={update} first="Where does" second="come from ?" third="" query={COUNTRY} choice={["Players"]} endpoint="wiki"/>,
        <Sentences id={2} update={update} first="How many personal distinctions did" second="get ?" third="" query={DISTINCTION} choice={["Players"]} endpoint="wiki"/>,
        <Sentences id={2} update={update} first="How many cup did" second="national team win ?" third="" query={AWARDS} choice={["NationalTeam"]} endpoint="wiki"/>,
        <Sentences id={2} update={update} first="How many players from" second="has already played for" third="?" query={CLUBS} choice={["Country", "Club"]} endpoint=""/>,
        <Sentences id={2} update={update} first="Who won last" second="?" third="" query={CUP} choice={["Competition"]} endpoint="wiki"/>,
    ]
}

const HandBall = (update) => {
    return [
        <Sentences id={3} update={update} first="Where does" second="come from ?" third="" query={COUNTRY} choice={["Players"]} endpoint="wiki"/>,
        <Sentences id={3} update={update} first="How many personal distinctions did" second="get ?" third="" query={DISTINCTION} choice={["Players"]} endpoint="wiki"/>,
        <Sentences id={3} update={update} first="How many cup did" second="national team win ?" third="" query={AWARDS} choice={["NationalTeam"]} endpoint="wiki"/>,
        <Sentences id={3} update={update} first="Who already played as" second="in" third="?" query={POSITION} choice={["Position", "Club"]} endpoint=""/>,
        <Sentences id={3} update={update} first="Who won last" second="?" third="" query={CUP} choice={["Competition"]} endpoint="wiki"/>,
    ]
}

const Hockey = (update) =>  {
   return [
        <Sentences id={4} update={update} first="Where does" second="come from ?" third="" query={COUNTRY} choice={["Players"]} endpoint="wiki"/>,
        <Sentences id={4} update={update} first="How many personal distinctions did" second="get ?" third="" query={DISTINCTION} choice={["Players"]} endpoint="wiki"/>,
        <Sentences id={4} update={update} first="How many cup did" second="national team win ?" third="" query={AWARDS} choice={["NationalTeam"]} endpoint="wiki"/>,
        <Sentences id={4} update={update} first="How many players already played for" second="and" third="?" query={BOTHCLUB} choice={["Club", "Club"]} endpoint="wiki"/>,
        <Sentences id={4} update={update} first="How many players of" second="are" third="?" query={HAND} choice={["Club", "Hand"]} endpoint="wiki"/>,
    ]
}

export { BasketBall, FootBall, HandBall, Hockey}