import axios from 'axios';

let txt = ''
async function getList () {
  await axios.get('./list.json').then((response) => {
    response.data.forEach((e) => {
      txt = '名前：' + e.name + '　年齢：' + e.age + '歳'
      console.log(txt)
    })
  })
}
getList()
// エラー
// (node:3608) ExperimentalWarning: The ESM module loader is experimental.
// (node:3608) UnhandledPromiseRejectionWarning: Error: connect ECONNREFUSED 127.0.0.1:80
//     at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1141:16)
// (node:3608) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 2)
// (node:3608) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.