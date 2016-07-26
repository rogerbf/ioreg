# ioreg

``` bash
npm install --save ioreg
```

## Usage

``` javascript
const ioreg = require('ioreg')

ioreg('AppleSmartBattery')
  .then(result => console.log(result))
  .catch(err => console.error(err))

// [
//   {
//     AdapterInfo: 0,
//     Amperage: 4683,
//     AvgTimeToEmpty: 65535,
//     AvgTimeToFull: 130,
//     BatteryInstalled: true,
//     BatteryInvalidWakeSeconds: 30,
//     ...
//   }
// ]
```

### Options

Options can be passed to ```ioreg```, e.g.

``` javascript
ioreg('gpu-sensor', ['-i'])
```
