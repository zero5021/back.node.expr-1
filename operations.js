const fs = require('fs')

const record = (name, age, tipe, color, sickness) => {
   
   const quotes = JSON.parse(fs.readFileSync('quotes.json', 'utf8'))
    quotes.push({name, age, tipe, color, sickness})

    fs.writeFileSync('quotes.json', JSON.stringify(quotes) )
    }

const read = () => {
    const display_quotes = JSON.parse(fs.readFileSync('quotes.json', 'utf8'));
    console.log(display_quotes)

}

module.exports = { record, read }
