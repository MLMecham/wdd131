//Questions for the quiz website. 
//Difficulty will range from 1-5.
//There are three question types; Free response, Multiple choice, or true and false
//Each question will be worth a set amount of points.
//The question will be each object
//The answer will also be in each object. only one answer per question, not case sensitive.
const questions = [
    // Difficulty 1
    {   
        number: 1,
        difficulty: 1,
        question: "The Earth is round. True or False?",
        type: "true-false",
        points: 4,
        answer: "true"
    },
    {
        number: 2,
        difficulty: 1,
        question: "What is the chemical symbol for water?",
        type: "multiple-choice",
        points: 5,
        answer: "h2o",
        options: ["O2", "H2O", "CO2", "O3"]
    },
    {
        number: 3,
        difficulty: 1,
        question: "The Sun rises in the West. True or False?",
        type: "true-false",
        points: 4,
        answer: "false"
    },
    {
        number: 4,
        difficulty: 1,
        question: "Which color is a banana?",
        type: "multiple-choice",
        points: 5,
        answer: "yellow",
        options: ["Green", "Yellow", "Red", "Blue"]
    },
    {
        number: 5,
        difficulty: 1,
        question: "The moon is a planet. True or False?",
        type: "true-false",
        points: 4,
        answer: "false"
    },
    {
        number: 6,
        difficulty: 1,
        question: "Which of these is the smallest continent?",
        type: "multiple-choice",
        points: 5,
        answer: "australia",
        options: ["Africa", "Asia", "Australia", "Europe"]
    },
    {
        number:7,
        difficulty: 1,
        question: "Mount Everest is the tallest mountain. True or False?",
        type: "true-false",
        points: 4,
        answer: "true"
    },
    {
        number:8,
        difficulty: 1,
        question: "Which animal is known as the King of the Jungle?",
        type: "multiple-choice",
        points: 5,
        answer: "lion",
        options: ["Elephant", "Lion", "Tiger", "Bear"]
    },
    {
        number:9,
        difficulty: 1,
        question: "The Pacific Ocean is the largest ocean. True or False?",
        type: "true-false",
        points: 4,
        answer: "true"
    },
    {
        number:10,
        difficulty: 1,
        question: "Which planet is known as the Red Planet?",
        type: "multiple-choice",
        points: 5,
        answer: "mars",
        options: ["Venus", "Earth", "Mars", "Jupiter"]
    },

    // Difficulty 2
    {
        number:11,
        difficulty: 2,
        question: "What is the capital of Canada?",
        type: "multiple-choice",
        points: 6,
        answer: "ottawa",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"]
    },
    {
        number:12,
        difficulty: 2,
        question: "Which of the following is the longest river in the world?",
        type: "multiple-choice",
        points: 6,
        answer: "nile",
        options: ["Amazon", "Yangtze", "Nile", "Mississippi"]
    },
    {
        number:13,
        difficulty: 2,
        question: "Is the Eiffel Tower located in Paris? True or False?",
        type: "true-false",
        points: 4,
        answer: "true"
    },
    {
        number:14,
        difficulty: 2,
        question: "Who wrote the play 'Romeo and Juliet'?",
        type: "multiple-choice",
        points: 6,
        answer: "shakespeare",
        options: ["Dickens", "Shakespeare", "Hemingway", "Twain"]
    },
    {
        number:15,
        difficulty: 2,
        question: "Is the Earth the fourth planet from the Sun? True or False?",
        type: "true-false",
        points: 4,
        answer: "false"
    },
    {
        number:16,
        difficulty: 2,
        question: "Which country is known as the Land of the Rising Sun?",
        type: "multiple-choice",
        points: 6,
        answer: "japan",
        options: ["China", "Japan", "South Korea", "India"]
    },
    {
        number:17,
        difficulty: 2,
        question: "Who was the first woman to fly solo across the Atlantic?",
        type: "multiple-choice",
        points: 6,
        answer: "amelia earhart",
        options: ["Amelia Earhart", "Valentina Tereshkova", "Bessie Coleman", "Sally Ride"]
    },
    {
        number:18,
        difficulty: 2,
        question: "Is a tomato a fruit? True or False?",
        type: "true-false",
        points: 4,
        answer: "true"
    },
    {
        number:19,
        difficulty: 2,
        question: "In which year did World War II end?",
        type: "multiple-choice",
        points: 6,
        answer: "1945",
        options: ["1940", "1945", "1950", "1960"]
    },
    {
        number:20,
        difficulty: 2,
        question: "What is the currency used in Japan?",
        type: "multiple-choice",
        points: 6,
        answer: "yen",
        options: ["Yuan", "Won", "Yen", "Ringgit"]
    },

    // Difficulty 3
    {
        number:21,
        difficulty: 3,
        question: "Who developed the theory of general relativity?",
        type: "multiple-choice",
        points: 7,
        answer: "einstein",
        options: ["Newton", "Einstein", "Tesla", "Curie"]
    },
    {
        number:22,
        difficulty: 3,
        question: "Which element has the atomic number 79?",
        type: "multiple-choice",
        points: 7,
        answer: "gold",
        options: ["Gold", "Silver", "Copper", "Platinum"]
    },
    {
        number:23,
        difficulty: 3,
        question: "What year did the Titanic sink?",
        type: "multiple-choice",
        points: 6,
        answer: "1912",
        options: ["1905", "1910", "1912", "1920"]
    },
    {
        number:24,
        difficulty: 3,
        question: "Who was the first person to travel into space?",
        type: "multiple-choice",
        points: 8,
        answer: "yuri gagarin",
        options: ["Neil Armstrong", "Yuri Gagarin", "John Glenn", "Buzz Aldrin"]
    },
    {
        number:25,
        difficulty: 3,
        question: "Which country has the most official languages?",
        type: "multiple-choice",
        points: 7,
        answer: "south africa",
        options: ["India", "South Africa", "Switzerland", "Belgium"]
    },
    {
        number:26,
        difficulty: 3,
        question: "Who wrote the famous novel '1984'?",
        type: "multiple-choice",
        points: 7,
        answer: "george orwell",
        options: ["George Orwell", "Aldous Huxley", "J.K. Rowling", "Mark Twain"]
    },
    {
        number:27,
        difficulty: 3,
        question: "What is the largest desert in the world?",
        type: "multiple-choice",
        points: 6,
        answer: "antarctic",
        options: ["Sahara", "Kalahari", "Arctic", "Antarctic"]
    },
    {
        number:28,
        difficulty: 3,
        question: "Who was the 16th president of the United States?",
        type: "multiple-choice",
        points: 7,
        answer: "abraham lincoln",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "Andrew Johnson"]
    },
    {
        number:29,
        difficulty: 3,
        question: "Which philosopher is known for his work 'The Republic'?",
        type: "multiple-choice",
        points: 7,
        answer: "plato",
        options: ["Aristotle", "Socrates", "Plato", "Descartes"]
    },
    {
        number:30,
        difficulty: 3,
        question: "Who developed the first successful polio vaccine?",
        type: "multiple-choice",
        points: 7,
        answer: "jonas salk",
        options: ["Edward Jenner", "Louis Pasteur", "Jonas Salk", "Albert Sabin"]
    },
    // Difficulty 4 (Super Hard)
    {
        number:31,
        difficulty: 4,
        question: "Which particle was first discovered by Ernest Rutherford in his gold foil experiment?",
        type: "multiple-choice",
        points: 10,
        answer: "nucleus",
        options: ["Electron", "Proton", "Neutron", "Nucleus"]
    },
    {
        number:32,
        difficulty: 4,
        question: "In 1939, what was the name of the first artificial satellite to be launched into orbit?",
        type: "multiple-choice",
        points: 10,
        answer: "sputnik 1",
        options: ["Explorer 1", "Vanguard 1", "Sputnik 1", "Luna 1"]
    },
    {
        number:33,
        difficulty: 4,
        question: "Who formulated the uncertainty principle in quantum mechanics?",
        type: "multiple-choice",
        points: 10,
        answer: "heisenberg",
        options: ["Einstein", "Heisenberg", "Bohr", "Schrodinger"]
    },
    {
        number:34,
        difficulty: 4,
        question: "What is the longest-living organism on Earth?",
        type: "multiple-choice",
        points: 10,
        answer: "posidonia oceanica",
        options: ["Redwood trees", "Quaking Aspen trees", "Posidonia Oceanica", "Giant Sequoia trees"]
    },
    {
        number:35,
        difficulty: 4,
        question: "Who developed the first modern periodic table of elements?",
        type: "multiple-choice",
        points: 10,
        answer: "mendeleev",
        options: ["Lavoisier", "Mendeleev", "Bohr", "Curie"]
    },
    {
        number:36,
        difficulty: 4,
        question: "Which Nobel laureate's discovery of the structure of DNA won the Nobel Prize in Physiology or Medicine in 1962?",
        type: "multiple-choice",
        points: 10,
        answer: "watson and crick",
        options: ["Maurice Wilkins", "James Watson and Francis Crick", "Rosalind Franklin", "Barbara McClintock"]
    },
    {number:37,
        difficulty: 4,
        question: "Which is the rarest naturally occurring element on Earth?",
        type: "multiple-choice",
        points: 10,
        answer: "astatine",
        options: ["Plutonium", "Astatine", "Rhodium", "Osmium"]
    },
    {
        number:38,
        difficulty: 4,
        question: "What is the name of the mathematical conjecture that has remained unproven since 1900, related to the distribution of prime numbers?",
        type: "multiple-choice",
        points: 10,
        answer: "riemann hypothesis",
        options: ["Fermat's Last Theorem", "Goldbach Conjecture", "Riemann Hypothesis", "P vs NP Problem"]
    },
    {
        number:39,
        difficulty: 4,
        question: "What is the most distant galaxy discovered by astronomers as of 2023?",
        type: "multiple-choice",
        points: 10,
        answer: "gn-z11",
        options: ["NGC 4889", "GN-z11", "MACS0647-JD", "HD1"]
    },
    {
        number:40,
        difficulty: 4,
        question: "Which scientist is known for his work in electromagnetic theory, and his equations are fundamental to classical physics?",
        type: "multiple-choice",
        points: 10,
        answer: "james clerk maxwell",
        options: ["Isaac Newton", "Albert Einstein", "James Clerk Maxwell", "Nikola Tesla"]
    },
    // Difficulty 5 (Borderline Impossible)
    {
        number:41,
        difficulty: 5,
        question: "What is the name of the hypothetical particle that would mediate the force of gravity in quantum mechanics, still unobserved but predicted by theories of quantum gravity?",
        type: "multiple-choice",
        points: 15,
        answer: "graviton",
        options: ["Graviton", "Higgs Boson", "Photon", "Neutrino"]
    },
    {
        number:42,
        difficulty: 5,
        question: "What is the solution to the Navier-Stokes existence and smoothness problem in fluid dynamics, one of the seven Millennium Prize Problems?",
        type: "multiple-choice",
        points: 15,
        answer: "unsolved",
        options: ["Solved", "Unsolved", "Partially solved", "Pending proof"]
    },
    {
        number:43,
        difficulty: 5,
        question: "What is the longest non-repeating sequence of digits discovered within Pi (π) as of 2023?",
        type: "multiple-choice",
        points: 15,
        answer: "unsolved",
        options: ["The first 100 digits", "The first 1,000 digits", "Longest non-repeating sequence", "Unsolved"]
    },
    {
        number:44,
        difficulty: 5,
        question: "Which mathematical conjecture, formulated by Andrew Wiles, proved the statement that every elliptic curve is modular, resolving a centuries-old problem?",
        type: "multiple-choice",
        points: 15,
        answer: "modularity theorem",
        options: ["Fermat's Last Theorem", "Riemann Hypothesis", "Modularity Theorem", "Poincaré Conjecture"]
    },
    {
        number:45,
        difficulty: 5,
        question: "What is the most massive black hole discovered to date, and how many times the mass of the Sun is it estimated to have?",
        type: "multiple-choice",
        points: 15,
        answer: "ton 618",
        options: ["Sagittarius A*", "TON 618", "M87*", "NGC 4889"]
    },
    {
        number:46,
        difficulty: 5,
        question: "Which unsolved problem in mathematics concerns whether P = NP, asking whether every problem whose solution can be verified quickly can also be solved quickly?",
        type: "multiple-choice",
        points: 15,
        answer: "p vs np problem",
        options: ["P vs NP Problem", "Fermat's Last Theorem", "Riemann Hypothesis", "Hilbert's 23 Problems"]
    },
    {
        number:47,
        difficulty: 5,
        question: "In quantum mechanics, what is the phenomenon in which particles can be in multiple states at once, only collapsing to a specific state when observed?",
        type: "multiple-choice",
        points: 15,
        answer: "superposition",
        options: ["Entanglement", "Wavefunction collapse", "Superposition", "Quantum tunneling"]
    },
    {
        number:48,
        difficulty: 5,
        question: "What is the largest prime number discovered as of 2023, and how many digits does it contain?",
        type: "multiple-choice",
        points: 15,
        answer: "merseine prime",
        options: ["Mersenne prime", "Fermat prime", "Prime number theorem", "Unsolved"]
    },
    {
        number:49,
        difficulty: 5,
        question: "What is the theory that predicts the existence of a multiverse, consisting of multiple universes with different physical laws?",
        type: "multiple-choice",
        points: 15,
        answer: "string theory",
        options: ["String theory", "Quantum mechanics", "Supergravity", "Loop quantum gravity"]
    },
    {
        number:50,
        difficulty: 5,
        question: "What is the largest known structure in the observable universe, consisting of a massive collection of galaxies and galaxy clusters?",
        type: "multiple-choice",
        points: 15,
        answer: "hercules–corona borealis great wall",
        options: ["The Great Attractor", "Hercules–Corona Borealis Great Wall", "Laniakea Supercluster", "Virgo Cluster"]
    },
    {
        number:51,
        difficulty: 5,
        question: "Which ancient mathematical paradox, associated with the Greek philosopher Zeno, asserts that a moving object will never reach its destination because it must first reach the halfway point, and then the halfway point of the halfway point, and so on infinitely?",
        type: "multiple-choice",
        points: 15,
        answer: "zeno's paradox",
        options: ["Achilles and the Tortoise", "Zeno's Paradox", "Mandelbrot Set", "Hilbert's Hotel"]
    },
    {
        number:52,
        difficulty: 5,
        question: "In the field of cosmology, what is the name of the hypothetical boundary that marks the limit beyond which information about a black hole is lost, and nothing, not even light, can escape?",
        type: "multiple-choice",
        points: 15,
        answer: "event horizon",
        options: ["Singularity", "Event Horizon", "Schwarzschild Radius", "Quantum Singularity"]
    },
    {
        number:53,
        difficulty: 5,
        question: "What is the largest structure in the Milky Way galaxy, which was discovered in 2020, stretching over 40,000 light-years and containing dense molecular gas?",
        type: "multiple-choice",
        points: 15,
        answer: "the dangerous ring",
        options: ["The Dangerous Ring", "The Oort Cloud", "The Galactic Halo", "The Milky Way Supermassive Disk"]
    },
    {
        number:54,
        difficulty: 5,
        question: "What is the mathematical conjecture that claims there are infinitely many twin primes, or pairs of primes that differ by exactly 2?",
        type: "multiple-choice",
        points: 15,
        answer: "twin prime conjecture",
        options: ["Goldbach's Conjecture", "Twin Prime Conjecture", "Bertrand's Postulate", "Fermat's Last Theorem"]
    },
    {
        number:55,
        difficulty: 5,
        question: "What is the name of the theory that predicts that all of the forces of nature, including gravity, electromagnetism, and the nuclear forces, are different manifestations of a single fundamental force?",
        type: "multiple-choice",
        points: 15,
        answer: "grand unified theory",
        options: ["String Theory", "Grand Unified Theory", "Theory of Everything", "Quantum Gravity"]
    },
    {
        number:56,
        difficulty: 5,
        question: "What is the largest star by volume ever discovered, located in the constellation of Cepheus, that is estimated to be over 1,500 times the size of the Sun?",
        type: "multiple-choice",
        points: 15,
        answer: "uy scuti",
        options: ["Betelgeuse", "UY Scuti", "VY Canis Majoris", "Antares"]
    },
    // Riddles

     // Level 1: Easy
     {
        number:57,
        difficulty: 1,
        question: "I’m tall when I’m young, and I’m short when I’m old. What am I?",
        type: "multiple-choice",
        points: 5,
        answer: "Candle",
        options: ["Candle", "Tree", "Mountain", "Tower"]
    },
    {
        number:58,
        difficulty: 1,
        question: "What has keys but can't open locks?",
        type: "multiple-choice",
        points: 5,
        answer: "Piano",
        options: ["Piano", "Map", "Computer", "Phone"]
    },
    {
        number:59,
        difficulty: 1,
        question: "What can travel around the world while staying in the corner?",
        type: "multiple-choice",
        points: 5,
        answer: "Stamp",
        options: ["Stamp", "Plane", "Postcard", "Sun"]
    },
    {
        number:60,
        difficulty: 1,
        question: "What gets wetter as it dries?",
        type: "multiple-choice",
        points: 5,
        answer: "Towel",
        options: ["Towel", "Sponge", "Rain", "Cloth"]
    },

    // Level 2: Medium
    {
        number:61,
        difficulty: 2,
        question: "I have cities but no houses, forests but no trees, and rivers but no water. What am I?",
        type: "multiple-choice",
        points: 10,
        answer: "Map",
        options: ["Map", "Globe", "Puzzle", "Drawing"]
    },
    {
        number:62,
        difficulty: 2,
        question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
        type: "multiple-choice",
        points: 10,
        answer: "The letter M",
        options: ["The letter M", "A second", "A moment", "The moon"]
    },
    {
        number:63,
        difficulty: 2,
        question: "The more you take, the more you leave behind. What am I?",
        type: "multiple-choice",
        points: 10,
        answer: "Footsteps",
        options: ["Footsteps", "Time", "Steps", "Memories"]
    },
    {
        number:64,
        difficulty: 2,
        question: "I am not alive, but I grow; I don’t have lungs, but I need air; I don’t have a mouth, but water kills me. What am I?",
        type: "multiple-choice",
        points: 10,
        answer: "Fire",
        options: ["Fire", "Plant", "Cloud", "Wind"]
    },

    // Level 3: Hard
    {
        number:65,
        difficulty: 3,
        question: "I speak without a mouth and hear without ears. I have nobody, but I come alive with the wind. What am I?",
        type: "multiple-choice",
        points: 12,
        answer: "Echo",
        options: ["Echo", "Cloud", "Shadow", "Wind"]
    },
    {
        number:66,
        difficulty: 3,
        question: "What can you break, even if you never pick it up or touch it?",
        type: "multiple-choice",
        points: 12,
        answer: "Promise",
        options: ["Promise", "Glass", "Stick", "Vow"]
    },
    {
        number:67,
        difficulty: 3,
        question: "I am always hungry, I must always be fed. The finger I touch, will soon turn red. What am I?",
        type: "multiple-choice",
        points: 12,
        answer: "Fire",
        options: ["Fire", "Lion", "Shark", "Ghost"]
    },
    {
        number:68,
        difficulty: 3,
        question: "What comes down but never goes up?",
        type: "multiple-choice",
        points: 12,
        answer: "Rain",
        options: ["Rain", "Leaf", "Sunlight", "Snow"]
    },

    // Level 4: Very Hard
    {
        number:69,
        difficulty: 4,
        question: "I can be cracked, made, told, and played. What am I?",
        type: "multiple-choice",
        points: 15,
        answer: "Joke",
        options: ["Joke", "Code", "Ball", "Film"]
    },
    {
        number:70,
        difficulty: 4,
        question: "I am not alive, but I can grow. I don’t have lungs, but I need air. I don’t have a mouth, but I can drown. What am I?",
        type: "multiple-choice",
        points: 15,
        answer: "Fire",
        options: ["Fire", "Cloud", "Shadow", "Time"]
    },
    {
        number:70,
        difficulty: 4,
        question: "I’m light as a feather, yet the strongest man can’t hold me for more than five minutes. What am I?",
        type: "multiple-choice",
        points: 15,
        answer: "Breath",
        options: ["Breath", "Air", "Time", "Water"]
    },
    {
        number:72,
        difficulty: 4,
        question: "The more of this there is, the less you see. What is it?",
        type: "multiple-choice",
        points: 15,
        answer: "Darkness",
        options: ["Darkness", "Fog", "Blindness", "Time"]
    },

    // Level 5: Genius
    {
        number:73,
        difficulty: 5,
        question: "I have no legs, but I can still run. What am I?",
        type: "multiple-choice",
        points: 20,
        answer: "Water",
        options: ["Water", "Wind", "Lightning", "Time"]
    },
    {
        number:74,
        difficulty: 5,
        question: "What has a heart that doesn’t beat?",
        type: "multiple-choice",
        points: 20,
        answer: "Artichoke",
        options: ["Artichoke", "Clock", "Robot", "Stone"]
    },
    {
        number:75,
        difficulty: 5,
        question: "The more you have of me, the less you see. What am I?",
        type: "multiple-choice",
        points: 20,
        answer: "Darkness",
        options: ["Darkness", "Fog", "Mist", "Blindness"]
    },
    {
        number:76,
        difficulty: 5,
        question: "I am a rock that’s never been touched by a human hand. What am I?",
        type: "multiple-choice",
        points: 20,
        answer: "Moon",
        options: ["Moon", "Comet", "Meteor", "Asteroid"]
    }
];

export default questions