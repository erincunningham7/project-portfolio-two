let questions = [{
        question: "How many kids does Angelina Jolie have?",
        choices: ["8", "6", "10", "5"],
        answer: 2
    },

    {
        question: "Who did Kim Kardashian call 'the least interesting look at'?",
        choices: ["Kylie", "Khloe", "Rob", "Kourtney"],
        answer: 4
    },

    {
        question: "Who played the role of Elvis Presley in the 2022 movie Elvis?",
        choices: ["Austin Butler", "Timothee Chalamet", "Leonardo DiCaprio", "Theo James"],
        answer: 1
    },

    {
        question: "Who was exposed for having a secret love child in a diss track by Pusha T in 2018?",
        choices: ["Tristan Thompson", "Robin Thicke", "Drake", "Kanye West"],
        answer: 3
    },

    {
        question: "Who played Tanya in season two of the hit show White Lotus?",
        choices: ["Zendaya", "Jennifer Coolidge", "Aubrey Plaza", "Connie Britton"],
        answer: 2
    },

    {
        question: "Real Housewives of Beverly Hills star Taylor Armstrong become a viral meme that depicted her screaming at what animal?",
        choices: ["Cat", "Turtle", "Seal", "Frog"],
        answer: 1
    },

    {
        question: "Which beauty Youtuber was infamously exposed in 2019 for selling mouldy lipsticks?",
        choices: ["James Charles", "Jeffree Star", "Kat Von D", "Jaclyn Hill"],
        answer: 4
    },

    {
        question: "What did Molly Mae and Tommy Fury name their baby girl?",
        choices: ["Halo", "Nephele", "Bambi", "Cloud"],
        answer: 4
    },

    {
        question: "When did Aaron ask Cady what day was it in Mean Girls?",
        choices: ["October 3", "March 29", "January 1", "May 4"],
        answer: 1
    },

    {
        question: "Which music video was the first to be played on MTV?",
        choices: ["Never Gonna Give You Up", "Walking On Sunshine", "Video Killed The Radio Star", "Highway To Hell"],
        answer: 4
    },
];

for ( let i = 0; i < questions.length; i++ ) {
    let question = questions[i].question;
    document.write ( question );
    let options = questions[i].choices;
    document.body.appendChild(document.createElement("br"));
     let name = "radio"+i; 

     for ( let opt in options ) {
        
        let radioEle = document.createElement("input");
        radioEle.type = "radio";          
        radioEle.value = options[opt];
        radioEle.name = name;
        document.body.appendChild(radioEle);
        let label = document.createElement("Label");
        label.innerHTML = options[opt];
        document.body.appendChild(label);
        document.body.appendChild(document.createElement("br"));
      }
      
      document.body.appendChild(document.createElement("br"));
}