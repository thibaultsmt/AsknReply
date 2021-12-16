

// kylian = op [wiki: 1, db: 2] / params = wiki



// Where does ${op[0]} come from ?
// Players
// Wikidata


// How many personal distinctions did ${op[0]} get ?
// Players
// Wikidata



// How many NBA championships did ${op[0]} national team win ?
// Club
// DBPedia
export const LEAGUE = (op) => `SELECT ?nb  WHERE {
    ${op[0]} dbp:leagueChamps ?nb.
}`;


// How many players from ${op[0]} has already played for ${op[1]} ?
// Place Club
// dbpedia
export const CLUBSCITY = (op) => `PREFIX db: <http://dbpedia.org/resource/>
    SELECT DISTINCT  (count(?person) as ?nbPlayers)
    WHERE{
        ?person a dbo:BasketballPlayer.
        ?person dbo:birthPlace ${op[0]}.
        ?person dbo:team ${op[1]}.
}`;


// How many players drafted in ${op[0]} got an award ?
// Year
// Wikidata
export const AWARD = (op) => `SELECT DISTINCT   (count(?person) AS ?nbOfPlayers)  WHERE{
    ?person a dbo:BasketballPlayer;
    dbo:award ?award;
    dbp:draftYear ${op[0]}.
}
`;