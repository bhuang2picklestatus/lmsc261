function checkLifeSpan(hoursUsed) {
    const maxLifeSpan = 1000;

    if (typeof hoursUsed != "number") {
        return "please enter valid number";
    } else if (hoursUsed < 800) {
        return "ur chillin bruh";
    } else if (hoursUsed < maxLifeSpan) {
        return "boy u boutta suffocate";
    } else {
        return "u dead boy";
    }
}

print(checkLifeSpan(500));
print(checkLifeSpan(850));
print(checkLifeSpan(1000));
print(checkLifeSpan("yo"));