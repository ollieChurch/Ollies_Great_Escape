let totalRoomCount = 0;
let totalSuccessCount = 0;
let totalFailCount = 0;

// !! ROOM LIST !!
let roomData = [
    {
        company: "Mystery Rooms UK",
        location: "Camberley, UK",
        coordinates: "GU15 3PQ",
        success: [
            "The Suspect"
        ],
        fail: []
    },
    {
        company: "Cryptic Escapes",
        location: "Norwich, UK",
        coordinates: "NR3 1HF",
        success: [],
        fail: [
            "The Treasure Of Green Beard",
            "The Haunted"
        ]
    },
    {
        company: "Paradox Parlours",
        location: "Guildford, UK",
        coordinates: "GU1 4AP",
        success: [
            "The Case Of The Missing Gun",
            "Venus"
        ],
        fail: []
    },
    {
        company: "Paradox Parlours",
        location: "Dorking, UK",
        coordinates: "RH5 6AA",
        success: [
            "Missing In Action"
        ],
        fail: []
    },
    {
        company: "Deadlocked",
        location: "Reading, UK",
        coordinates: "RG1 7RG",
        success: [
            "The Phoenix Research",
            "The Testing Chamber"
        ],
        fail: []
    },
    {
        company: "Escape Reading",
        location: "Reading, UK",
        coordinates: "RG1 7QF",
        success: [
            "The Library",
            "The Bank Robbery",
            "Vampire",
            "Kidnapped",
            "Blown Away",
            "The Bank Robbery (new)"
        ],
        fail: []
    },
    {
        company: "Knockout",
        location: "Reading, UK",
        coordinates: "RG1 8LG",
        success: [
            "9 to 5 Assasin",
            "Prison Break",
            "Mad Scientist"
        ],
        fail: []
    },
    {
        company: "Time Trap",
        location: "Reading, UK",
        coordinates: "RG1 1DB",
        success: [
            "Rebellion",
            "Imaginarium",
            "The Divide",
            "Station X"
        ],
        fail: []
    },
    {
        company: "Containment",
        location: "Guildford, UK",
        coordinates: "GU3 3PE",
        success: [
            "The Vault",
            "The Bomb",
        ],
        fail: []
    },
    {
        company: "Exciting Escapes",
        location: "Basingstoke, UK",
        coordinates: "RG21 7NE",
        success: [
            "Murder At The Movies",
            "Dark Deeds and Groceries",
        ],
        fail: []
    },
    {
        company: "Tulley's Farm",
        location: "Crawley, UK",
        coordinates: "RH10 4PE",
        success: [
            "Mutiny",
            "Outfitters",
            "Dodge"
        ],
        fail: [
            "Nethercott Manor"
        ]
    },
    {
        company: "Escape Rooms",
        location: "London, UK",
        coordinates: "SE1 2TU",
        success: [],
        fail: [
            "Pharaoh's Chamber"
        ]
    },
    {
        company: "Clue Quest",
        location: "London, UK",
        coordinates: "N1 0SL",
        success: [
            "Operation Blacksheep",
            "Revenge Of The Sheep"
        ],
        fail: []
    },
    {
        company: "Pier Pressure",
        location: "Brighton, UK",
        coordinates: "BN1 3FG",
        success: [
            "Modrophenia",
            "Raver Quest"
        ],
        fail: []
    },
    {
        company: "Bewilderbox",
        location: "Brighton, UK",
        coordinates: "BN1 4GU",
        success: [
            "The Bewilderbox Initiavtive",
            "Judgement D.A.V.E."
        ],
        fail: []
    },
    {
        company: "Handmade Mysteries",
        location: "Brighton, UK",
        coordinates: "BN1 4JE",
        success: [
            "Lady Chastity's Reserve"
        ],
        fail: []
    },
    {
        company: "ExCLUEsive Games",
        location: "Newbury, UK",
        coordinates: "BN1 4JE",
        success: [
            "Lost Island Escape",
            "Wild Wild West"
        ],
        fail: []
    },
    {
        company: "The Escape Game",
        location: "Orlando, FL, USA",
        coordinates: "32819",
        success: [
            "Special Ops: Mysterious Market",
            "Prison Break"
        ],
        fail: []
    },
    {
        company: "Aroom",
        location: "Budapest, Hungary",
        coordinates: "1061",
        success: [
            "The Metro",
            "The Heist"
        ],
        fail: []
    },
    {
        company: "Mars Mission",
        location: "Budapest, Hungary",
        coordinates: "1014",
        success: [
            "Mars Mission"
        ],
        fail: []
    },
    {
        company: "Mystique Room",
        location: "Budapest, Hungary",
        coordinates: "1055",
        success: [
            "Pirate Bay",
            "The Tower Of Wollongong",
            "Time Machine",
            "The Iron Throne",
            "The Pharaoh's Burial Chamber",
            "Shogun's Shadow",
            "The Cathedral"
        ],
        fail: []
    },
    {
        company: "Neverland",
        location: "Budapest, Hungary",
        coordinates: "1074",
        success: [
            "Prison Break"
        ],
        fail: []
    },
    {
        company: "Goszdu Mission",
        location: "Budapest, Hungary",
        coordinates: "1072",
        success: [
            "The White Room",
            "Prison Mission",
            "Mafia Mission"
        ],
        fail: []
    },
    {
        company: "E-Exit",
        location: "Budapest, Hungary",
        coordinates: "1072",
        success: [
            "Secret Subway",
            "1984",
            "Heaven And Hell",
            "Santa Muerte"
        ],
        fail: []
    },
    {
        company: "Locked Room",
        location: "Budapest, Hungary",
        coordinates: "1061",
        success: [
            "Serial Killer",
            "Research Base",
        ],
        fail: []
    },
    {
        company: "Clue Cracker",
        location: "Tunbridge Wells, UK",
        coordinates: "TN4 9PE",
        success: [
            "Jail Break",
        ],
        fail: []
    },
    {
        company: "Clued Up",
        location: "Norwich, UK",
        coordinates: "NR1 1LT",
        success: [
            "Nuclear Countdown",
        ],
        fail: []
    },
    {
        company: "Escapement",
        location: "Margate, UK",
        coordinates: "CT9 2RJ",
        success: [
            "Pirates Of Polaris",
            "The Pit",
            "Egyptian Exodus"
        ],
        fail: []
    },
    {
        company: "Panic Rooms",
        location: "Gravesend, UK",
        coordinates: "DA12 2AH",
        success: [
            "Dino Land",
            "Loop",
        ],
        fail: []
    },
    {
        company: "Mind Maze",
        location: "Prague, Czech Republic",
        coordinates: "Prague 2",
        success: [
            "Galactic Pioneers",
        ],
        fail: []
    },
    {
        company: "The Chamber",
        location: "Prague, Czech Republic",
        coordinates: "Prague 5",
        success: [
            "Wonderland",
        ],
        fail: []
    },
    {
        company: "A.I. Escapes",
        location: "London, UK",
        coordinates: "SE16 4DG",
        success: [
            "M.A.D.",
            "Project Delta"
        ],
        fail: []
    },
    {
        company: "Houdini's",
        location: "Southampton, UK",
        coordinates: "SO14 0JD",
        success: [
            "Titanic",
            "Escape From Alcatraz",
            "Extinct"
        ],
        fail: []
    },
]
roomData.sort((a, b) => (a.company > b.company) ? 1 : -1)
const roomsContainer = document.getElementById("rooms")

for (let i = 0; i < roomData.length; i++) {
    const newCompany = document.createElement("div")
    const companyName = document.createElement("h3")
    const companyLocationContainer = document.createElement("p")
    const companyLocation = document.createElement("em")
    const companyRooms = document.createElement("ul")
    
    newCompany.classList.add("company-container")
    
    companyName.textContent = roomData[i].company
    companyName.classList.add("company-name")
    
    companyLocation.textContent = roomData[i].location
    companyLocationContainer.append(companyLocation)
    companyLocationContainer.classList.add("company-location")
    
    companyRooms.classList.add("company-room-list")
    
    roomData[i].success.forEach(name => {
        const newRoom = document.createElement("li")
        newRoom.textContent = name
        newRoom.classList.add("company-room")
        companyRooms.append(newRoom)
        totalRoomCount ++
        totalSuccessCount ++
    })
    
    roomData[i].fail.forEach(name => {
        const newRoom = document.createElement("li")
        newRoom.textContent = name + " [FAIL]"
        newRoom.classList.add("company-room")
        newRoom.classList.add("company-room-fail")
        companyRooms.append(newRoom)
        totalRoomCount ++
        totalFailCount ++
    })
    
    newCompany.append(companyName)
    newCompany.append(companyLocationContainer)
    newCompany.append(companyRooms)

    roomsContainer.append(newCompany)
}

// !! ROOM COUNT !!
let count = 0
let successRoomCount = 0
let failRoomCount = 0

const countTimer = setInterval(countUp, 40)
const failCountTimer = setInterval(failCountUp, 500)

function countUp() {
    const numberDisplay = document.getElementById("room-count-number")
    
    if (count < totalRoomCount) {
        if (count < totalSuccessCount) {
            successRoomCount ++
            document.getElementById("success-count").textContent = successRoomCount + " succesful escapes"
        }

        count ++
        numberDisplay.textContent = count
    } else {
        clearInterval(countTimer)
        numberDisplay.classList.add("count-finished")
    }
}

function failCountUp() {
    if (failRoomCount < totalFailCount) {
        failRoomCount ++
        document.getElementById("fail-count").textContent = failRoomCount + " failed escapes"
    } else {
        clearInterval(failCountUp)
    }
}

// !! ROOM SEARCH !!
const roomSearch = document.getElementById("room-search")
const searchInput = document.getElementById("room-search-input")
const companies = document.getElementsByClassName("company-container")

roomSearch.addEventListener("submit", function(event) {
    event.preventDefault()
})

searchInput.addEventListener("keyup", function() {
    const searchError = document.getElementById("room-search-error")
    const searchValue = searchInput.value.toLowerCase()
    
    
    for (let i = 0; i < companies.length; i++) {
        const company = roomData[i]
        const name = company.company.toLowerCase()
        const location = company.location.toLowerCase()
        
        let rooms = []
        company.success.forEach(room => {
            const newRoom = room.toLowerCase()
            rooms.push(newRoom)
        })
        company.fail.forEach(room => {
            const newRoom = room.toLowerCase()
            rooms.push(newRoom)
        })
        
        let roomMatch = false
        rooms.forEach(room => {
            if (room.includes(searchValue)) {
                roomMatch = true
            }
        })
                
        if (name.includes(searchValue) || location.includes(searchValue) || roomMatch) {
            companies[i].style.display = "block"
        } else {
            companies[i].style.display = "none"
        }
    }
    
    for (let i = 0; i < companies.length; i++) {
        if (companies[i].style.display === "block") {
            searchError.style.display = "none"
            break
        } else {
            searchError.style.display = "block"
        }
    }
})








