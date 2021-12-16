

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


// How many players already played for ${op[0]} and ${op[1]}  ?
// Club
// Wikidata
export const BOTHCLUB = (op) => `
    SELECT (count(?player) as ?nbPlayer) {
        ?player wdt:P54 wd:Q503739.
        ?player wdt:P54 wd:Q1422772.
}`;


// How many players of ${op[0]} are ${op[1]} ?
// Club Hand
// Wikidata
export const HAND = (op) => `
    SELECT (count(?player) as ?nbPlayer) {
        ?player wdt:P54 ${op[0]}.
        ?player wdt:P423 ${op[1]}.
}`;