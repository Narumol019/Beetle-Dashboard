var MicroGear = require('microgear')

const APPID = 'TheBeetleBeachBox'
const KEY = '535vxXWIX3Uz66A'
const SECRET = 'GHCZ3Ohksf7lvItgeFQQ2QUjF'

var microgear = MicroGear.create({
  key: KEY,
  secret: SECRET
})

microgear.on('connected', function () {
  console.log('Connected...')
})

microgear.on('message', function (topic, body) {
  console.log('incoming : ' + topic + ' : ' + body)
})

microgear.on('closed', function () {
  console.log('Closed...')
})

const openbox = (boxid) => {
  microgear.publish('/1/remoteOpen', boxid)
}

microgear.connect(APPID)

export default {
  openbox
}
