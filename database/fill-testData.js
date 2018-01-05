var faker = require("faker");
var fs = require('fs');

var createEvent = function(){
    var event = {
            name: faker.commerce.department(),
            description: faker.lorem.sentences(faker.random.number({min: 3, max: 7})),
            imageUrl: faker.image.avatar(),
            date: faker.date.future().toISOString(),
            location: {
                latitude: faker.address.latitude(),
                longitude: faker.address.longitude()
            },
            source: "custom"
        };
    return event;
}

var events = {};
for (let index = 0; index < 100; index++) {
    events[faker.random.uuid()] = createEvent();
}

var data = {events: events};

fs.writeFileSync("dummyData.json", JSON.stringify(data));