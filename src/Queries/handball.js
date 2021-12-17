

// kylian = op [wiki: 1, db: 2] / params = wiki



// Where does ${op[0]} come from ?
// Players
// Wikidata


// How many personal distinctions did ${op[0]} get ?
// Players
// Wikidata


// How many cup did ${op[0]} national team win ?
// NationalTeam
// Wikidata


// Who already played as ${op[0]} in ${op[1]} ?
// Position Club
// dbpedia
export const POSITION = (op) => `PREFIX db: <http://dbpedia.org/resource/>
SELECT DISTINCT (count(?person) as ?nbPerson)
WHERE{
?person a dbo:HandballPlayer.
?person dbp:position ${op[0]}.
?person dbp:clubs ${op[1]}.
}`;


// Who won last ${op[0]} ?
// Competition
// Wikidata
