var faker = require("faker");
var fs = require('fs');

var createEvent = function(){
    var event = {
            name: faker.commerce.department(),
            description: faker.lorem.sentences(faker.random.number(5)),
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

var data = {};
for (let index = 0; index < 100; index++) {
    data[faker.random.uuid()] = createEvent();
}

fs.writeFileSync("dummyData.json", JSON.stringify(data));