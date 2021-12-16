

// kylian = op [wiki: 1, db: 2] / params = wiki



// Where does ${op[0]} come from ?
// Players
// Wikidata
export const COUNTRY = (op) => `SELECT ?countryLabel
WHERE {
  ${op[0]} wdt:P1532 ?country.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en".}
} `;


// How many personal distinctions did ${op[0]} get ?
// Players
// Wikidata
export const DISTINCTION = (op) => `SELECT (count(?entity) as ?nbCup) {
    ${op[0]} p:P166 [ps:P166 ?entity ; pq:P585 ?date ]
    OPTIONAL { ?entity rdfs:label ?desc FILTER((LANG(?desc)) = "en") }
}`;


// How many cup did ${op[0]} national team win ?
// NationalTeam
// Wikidata
export const AWARDS = (op) => `SELECT (count(?cup) as ?nbCup) {
    ${op[0]} p:P2522 ?cup
}`;


// How many players from ${op[0]} has already played for ${op[1]} ?
// Country Club
// dbpedia
export const CLUBS = (op) => `PREFIX db: <http://dbpedia.org/resource/>
    SELECT DISTINCT  (count(?person) as ?nbPlayers)
    WHERE{
        ?person a dbo:SoccerPlayer .
        ?person dbo:birthPlace ${op[0]}.
        ?person dbo:team ${op[1]}.
}`;


// Who won last ${op[0]} ?
// Competition
// Wikidata 
export const CUP = (op) => `SELECT ?teamLabel ?team {
    ${op[0]} wdt:P1346 ?team.
    SERVICE wikibase:label { bd:serviceParam wikibase:language "en".}
}`;
