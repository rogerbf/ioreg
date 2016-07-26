const exec = require('execa')
const plist = require('plist')

const defaultOptions = ['-r', '-n']

const ioreg = (className = 'Root', options = defaultOptions) => {
  return new Promise((resolve, reject) => {
    exec('ioreg', ['-a'].concat(options).concat(className))
      .then(stdio => Promise.resolve(stdio.stdout))
      .then(stdout => resolve(plist.parse(stdout)))
      .catch(err => reject(err))
  })
}

module.exports = ioreg
