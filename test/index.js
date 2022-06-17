const { GetUserGuild } = require('../src/index')

const get = new GetUserGuild()

get.get('XrLQ8qOfebumGTpniUaLmAc5axSccY').then(d => {

    d.forEach(data => {

        console.log(data.name)

    });
});

