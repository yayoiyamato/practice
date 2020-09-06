import axios from 'axios';

function getList() {
  return new Promise((resolve, reject) => {
    axios.get('./list.json').then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}
async function sayList() {
  const data = await getList()
  console.log(data)
  data.forEach((e) => {
    console.log(`名前：${e.name}　年齢：${e.age}歳`)
  })
  return
}

sayList()
// UnhandledPromiseRejectionWarning：エラー：ECONNREFUSED TCPConnectWrap.afterConnectで127.0.0.1:80に接続
// 未処理のrejection. catchブロックなしで非同期関数の内部をスローしたか、.catch（）で処理されなかったpromiseを拒否したことにより発生