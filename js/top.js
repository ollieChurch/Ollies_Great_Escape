const topData = [
    {
        room: "Secret Subway",
        company: "E-Exit",
        location: "Budapest, Hungary",
        description: "A MOVING TRAIN CARRIAGE! Not that anything else really needs to be said but this room was full of surprises and a great flow, everything made sense and there was a palpable excitement from everyone on the team. Brilliant concept of having to take our power generator with us between rooms as well."
    },
    {
        room: "Galactic Pioneers",
        company: "Mind Maze",
        location: "Prague, Czech Republic",
        description: "Played as a two and it was a whole lot of fun. Puzzles required some thinking and working out but nothing extensively difficult and we managed to smash it without worrying too much about time. The whole experience was extremely story led and immersive in design and finished with a Space Team-esque puzzle that was fun and frantic. Good, characterful clue system as well."
    },
    {
        room: "Special Ops: Mysterious Market",
        company: "The Escape Game",
        location: "Orlando, FL, USA",
        description: "This was a beautifully decorated room with high tech puzzles, immersive atmosphere, and several twist endings. Let down by two major tech malfunctions but still hugely impressive and co-operative puzzling. This really demonstrated what a big budget has the potential to create."
    },
    {
        room: "The Case Of The Missing Gun",
        company: "Paradox Parlours",
        location: "Guildford, UK",
        description: "My third escape room, highly immersive and story driven. Puzzle structure played to my strengths and loved the secret room and compartment surprises. Mad and energetic excitement and fun throughout and excellent hosting."
    },
    {
        room: "Rebellion",
        company: "Time Trap",
        location: "Reading, UK",
        description: "Creating a castle inside some fairly standard modern day rooms is no easy task but Time Trap smashed it. I loved all of the physical analogue mechanics that made this room work and the non-linear puzzles which ended up linking together."
    },
    {
        room: "Venus",
        company: "Paradox Parlours",
        location: "Guildford, UK",
        description: "Even as the first team to test this room the potential behind it was huge. Excellent puzzles which go deeper and require more careful thought than most. But the standout is Venus herself, a fully interactive and hilarious A.I. I could have spent the whole time just chatting to her."
    },
    {
        room: "Pirate Bay",
        company: "Mystique Room",
        location: "Budapest, Hungary",
        description: "This has to be the most impressive set I have ever walked into. Looking up at a full size pirate ship while stood on the dock, climbing up onto the deck, down into the ship, up on top of the ship. An experience not rivalled by any other room."
    },
    {
        room: "The Bank Robbery (new)",
        company: "Escape Reading",
        location: "Reading, UK",
        description: "Bursting out of the back of a van into a convincingly modern day bank, cracking a giant classic looking vault door as well as ripping an ATM open by chaining it to the van. This room was a lot of fun in so many places."
    },
    {
        room: "Jail Break",
        company: "Clue Cracker",
        location: "Tunbridge Wells, UK",
        description: "A room with heavy attention to detail. Small on size but big on heart. One puzzle with a leap of logic and an interesting clue system that does not have the flexibility often required but intends to keep the immersion of the story. A classic room very well executed and hosted well."
    },
    {
        room: "Judgement Dave",
        company: "Bewilderbox",
        location: "Brighton, UK",
        description: "Small space, beautifully immersive from ceiling to floor. Strong story and interesting moral choice at the end. Added interactive A.I./clue system an excellent concept but not quite executed to match (Venus is better). The room felt like a whole other world from the pub it was based in."
    },
]
const chartsList = document.getElementById("top-charts")

for (let i = 0; i < topData.length; i++) {
    const newEntry = document.createElement("div")
    const chartNumberContainer = document.createElement("div")
    const chartNumber = document.createElement("h3")
    const entryText = document.createElement("div")
    const roomName = document.createElement("h3")
    const roomDetailsContainer = document.createElement("p")
    const roomDetails = document.createElement("em")
    const roomDescription = document.createElement("p")
    
    roomDescription.textContent = topData[i].description
    
    roomDetails.textContent = topData[i].company + " | " + topData[i].location
    roomDetailsContainer.append(roomDetails)
    roomDetailsContainer.classList.add("top-details")
    
    roomName.textContent = topData[i].room
    roomName.classList.add("top-name")
    
    entryText.append(roomName)
    entryText.append(roomDetailsContainer)
    entryText.append(roomDescription)
    entryText.classList.add("room-container-text")
    
    const number = i + 1
    chartNumber.textContent = number + "."
    chartNumberContainer.append(chartNumber)
    chartNumberContainer.classList.add("room-container-number")
    
    newEntry.append(chartNumberContainer)
    newEntry.append(entryText)
    newEntry.classList.add("room-container")
    
    if (topData.length % 2 === 0) {
        if (i === 0 || i === (topData.length - 1)) {
            newEntry.classList.add("room-container-wide")
        }
    }
    
    chartsList.append(newEntry)
}