class Park {
    constructor(name, buildYear, treesNumber, area) {
        this.name = name;
        this.buildYear = buildYear;
        this.treesNumber = treesNumber;
        this.area = area;
    }
}

class Street {
    constructor(name, buildYear, length) {
        this.name = name;
        this.buildYear = buildYear;
        this.length = length;
    }
}

var lengthClassification = new Map();
lengthClassification.set(300, "Tiny");
lengthClassification.set(500, "Small");
lengthClassification.set(700, "Normal");
lengthClassification.set(1000, "Big");
lengthClassification.set(2000, "Big");

var parks = [];
parks.push(new Park("Halyavina Kazok", 2006, 1111));
parks.push(new Park("Park Alkasha", 2000, 4));
parks.push(new Park("Park Na Chaike", 2003, 90));

var averageAge;
{
    let totalAge = 0;
    for (let {
            name,
            buildYear,
            treesNumber
        } of parks) {

            totalAge += new Date().getFullYear() - buildYear;
    }
    averageAge = totalAge/parks.length;
}

var treeDensity = parks.forEach(el => el.treesNumber / el.area);

var parkWithMoreThen1000Trees = parks.findIndex(el => el.treesNumber>=1000);



