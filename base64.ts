const alphabet = 'qCrveYyN8PwU3ouAZERhn5d97iD6LxBGpmzb2fQS4cJtKsaHkXMgjVWFT1'
const base = alphabet.length

export default {
  encode(enc) {
    if (typeof enc !== 'number' || enc !== parseInt(enc as any))
      throw '"encode" only accepts integers.'
    var encoded = ''
    while (enc) {
      var remainder = enc % base
      enc = Math.floor(enc / base)
      encoded = alphabet[remainder].toString() + encoded
    }
    return encoded
  },

  decode(dec) {
    if (typeof dec !== 'string') throw '"decode" only accepts strings.'
    var decoded = 0
    while (dec) {
      var alphabetPosition = alphabet.indexOf(dec[0])
      if (alphabetPosition < 0)
        throw (
          '"decode" can\'t find "' +
          dec[0] +
          '" in the alphabet: "' +
          alphabet +
          '"'
        )
      var powerOf = dec.length - 1
      decoded += alphabetPosition * Math.pow(base, powerOf)
      dec = dec.substring(1)
    }
    return decoded
  },
}
