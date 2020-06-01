var xtend = require('xtend')
var inherits = require('inherits')
var DoozinService = require('@ishiduca/doozin-service')
var DoozinServiceEcToranoanaJp = require('@ishiduca/doozin-service-ec-toranoana-jp')

function DoozinServiceEcToranoanaJpJoshi () {
  if (!(this instanceof DoozinServiceEcToranoanaJpJoshi)) {
    return new DoozinServiceEcToranoanaJpJoshi()
  }

  var origin = 'https://ec.toranoana.jp'
  var searchHome = origin + '/joshi_r/ec/bok/app/catalog/list/'
  var hyperquest = xtend(
    DoozinService.defaultConfig.hyperquest, { origin, searchHome }
  )
  var config = xtend(DoozinService.defaultConfig, { hyperquest })

  DoozinService.call(this, config)
}

inherits(DoozinServiceEcToranoanaJpJoshi, DoozinServiceEcToranoanaJp)
module.exports = DoozinServiceEcToranoanaJpJoshi
