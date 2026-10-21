
function pickRandomActivity() {
    const dailyActivities = [
        "Do a backflip bc theres no gravity",
        "Fight off space invaders",
        "Say hi to chill aliens",
        "Fertilize potatoes",
        "Play the trombone",
        "Ignore the ufo",
        "Ignore the fact that the Earth is flat",
        "Think about space",
        "Fake moon landing"
    ];

    let randomIndex = Math.random() * dailyActivities.length;
    let randomActivity = Math.floor(randomIndex);

    return dailyActivities[randomActivity];
}

print("Today's activity is: " + pickRandomActivity());