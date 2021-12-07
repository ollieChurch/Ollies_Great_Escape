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
        room: "Into The Reliquary",
        company: "Darkmaster",
        location: "Crowborough, UK",
        description: "Highly immersive set design which required entering a tomb, exploring the depths by rope ladder and even navigating a river cave by inflatable boat! But what truly earns this room a place on the top 10 is it's totally unique 'moving sands' effect which made me question reality for more than a second."
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
        room: "Questionable Ethics",
        company: "Hounds",
        location: "Crawley, UK",
        description: "Questionable Ethics has a brilliant asthetic throughout. A well paced and, at times frantic, puzzling experience which provided the three of us with lots to do, despite all being experienced players. Genuine excitement with each new big discovery and a fun fast paced ending."
    }
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
    
    entryText.append(roomName, roomDetailsContainer, roomDescription)
    entryText.classList.add("room-container-text")
    
    const number = i + 1
    chartNumber.textContent = number + "."
    chartNumberContainer.append(chartNumber)
    chartNumberContainer.classList.add("room-container-number")
    
    newEntry.append(chartNumberContainer, entryText)
    newEntry.classList.add("room-container")
    
    if (topData.length % 2 === 0) {
        if (i === 0 || i === (topData.length - 1)) {
            newEntry.classList.add("room-container-wide")
        }
    }
    
    chartsList.append(newEntry)
}