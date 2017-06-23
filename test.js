const Chromy = require('chromy')
const fs = require('fs')

// not headless
// let chromy = new Chromy({visible:true})
let chromy = new Chromy()
chromy.chain()
  .goto('https://jsfiddle.net/o110jw8u/3/')
  .screenshotDocument()
  .result((png) => {
    fs.writeFileSync('out.png', png)
  })
  .end()
  .then(_ => chromy.close())
  .catch(e => {
    console.log(e)
    chromy.close()
  })
