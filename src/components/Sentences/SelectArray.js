const BasketBall = [{
    Players: [
        {value:"wd:Q36159", name: "LeBron James"},
        {value:"wd:Q8991894", name: "Giannis Antetokounmpo"},
        {value:"wd:Q193108", name: "Tony Parker"},
        {value:"wd:Q348618", name: "Kyrie Irving"}
    ],
    Place: [
        {value:"db:Chicago", name: "Chicago"},
        {value:"db:Philadelphia", name: "Philadelphia"},
        {value:"db:Toronto", name: "Toronto"},
        {value:"db:Paris", name: "Paris"}
    ],
    Club: [
        {value:"dbr:Los_Angeles_Lakers", name: "Los Angeles Lakers"},
        {value:"dbr:Chicago_Bulls", name: "Chicago Bulls"},
        {value:"dbr:San_Antonio_Spurs", name: "San Antonio Spurs"},
        {value:"dbr:Toronto_Raptors.", name: "Toronto Raptors"}
    ],

    Year: [
        {value:"2021", name: "2021"},
        {value:"2020", name: "2020"},
        {value:"2019", name: "2019"},
        {value:"2018", name: "2018"}
    ]
}]

const FootBall = [{
    Players: [
        {value:"wd:Q21621995", name: "Kylian Mbaclé"},
        {value:"wd:Q11571", name: "Cristiano Ronaldo"},
        {value:"wd:Q615", name: "Lionel Messi"},
        {value:"wd:Q46896", name: "Zlatan Ibrahimović"}
    ],
    NationalTeam: [
        {value:"wd:Q47774", name: "France"},
        {value:"wd:Q43310", name: "Germany"},
        {value:"wd:Q676899", name: "Italy"},
        {value:"wd:Q160826", name: "Sweden"}
    ],
    Country: [
        {value:"dbr:France_national_football_team", name: "France"},
        {value:"dbr:England_national_football_team", name: "England"},
        {value:"dbr:Sweden_national_football_team", name: "Sweden"},
        {value:"dbr:Spain_national_football_team", name: "Spain"}
    ],
    Club: [
        {value:"dbr:Olympique_de_Marseille", name: "Olympique de Marseille"},
        {value:"dbr:Malmö_FF", name: "Malmö"},
        {value:"dbr:Real_Madrid_CF", name: "Real Madrid"},
        {value:"dbr:Manchester_United_F\\.C\\.", name: "Manchester United"}
    ],
    Competition: [
        {value:"wd:Q373501", name: "Euro"},
        {value:"wd:Q63088790", name: "Champions League"},
        {value:"wd:Q170645", name: "World Cup"},
        {value:"wd:Q63088818", name: "Europa League"}
    ]
}]

const Hockey = [{
    Players: [
        {value:"wd:Q209518", name: "Wayne Gretzky"},
        {value:"wd:Q348017", name: "Bobby Orr"},
        {value:"wd:Q295345", name: "Jaromír Jágr"},
        {value:"wd:Q1912556", name: "Max Friberg"}
    ],
    NationalTeam: [
        {value:"wd:Q461503", name: "Canada"},
        {value:"wd:Q913643", name: "Sweden"},
        {value:"wd:Q754410", name: "Czech Republic"},
        {value:"wd:Q913651", name: "United States"}
    ],
    Position: [
        {value:'"Goalkeeper"@en', name: "Goalkeeper"},
        {value:'"Pivot"@en', name: "Pivot"},
        {value:'"Left back"@en', name: "Left back"},
        {value:'"Right back"@en', name: "Right back"}
    ],
    Club :[
        {value:"wd:Q188984", name: "New York Rangers"},
        {value:"wd:Q503739", name: "Indianapolis Racers"},
        {value:"wd:Q1142013", name: "Frölunda HC"},
        {value:"wd:Q1422772", name: "Luleå HF"}
    ],
    Hand: [
        {value:"wd:Q10927615", name: "Left Handed"},
        {value:"wd:Q10927630", name: "Right Handed"}
    ]

}]

const HandBall = [{
    Players: [
        {value:"wd:Q157809", name: "Nikola Karabatic"},
        {value:"wd:Q365077", name: "Mikkel Hansen"},
        {value:"wd:Q310526", name: "Ivano Balić"},
        {value:"wd:Q312403", name: "Magnus Wislander"}
    ],
    NationalTeam: [
        {value:"wd:Q457107", name: "France"},
        {value:"wd:Q185686", name: "Sweden"},
        {value:"wd:Q728491", name: "Denmark"},
        {value:"wd:Q161047", name: "Germany"}
    ],
    Position: [
        {value:'"Goalkeeper"@en', name: "Goalkeeper"},
        {value:'"Pivot"@en', name: "Pivot"},
        {value:'"Left back"@en', name: "Left back"},
        {value:'"Right back"@en', name: "Right back"}
    ],
    Club :[
        {value:"dbr:FC_Barcelona_Handbol", name: "FC Barcelona"},
        {value:"dbr:Paris_Saint-Germain_Handball", name: "Paris Saint Germain"},
        {value:"dbr:THW_Kiel", name: "THW Kiel"},
        {value:"dbr:Montpellier_Handball", name: "Montpellier"}
    ],
    Competition: [
        {value:"wd:Q16577784", name: "Euro"},
        {value:"wd:Q64813818", name: "Champions League"},
        {value:"wd:Q13592528", name: "World Cup"}
    ]
}]

export { BasketBall, FootBall, HandBall, Hockey}