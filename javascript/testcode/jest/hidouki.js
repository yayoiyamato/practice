import axios from 'axios'

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
  const result = await getList()
    .then(data => data)
    .catch(error => error)
  console.log(result)
}

sayList();

// Error: connect ECONNREFUSED 127.0.0.1:80
//     at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1141:16) {
//   errno: -61,
//   code: 'ECONNREFUSED',
//   syscall: 'connect',
//   address: '127.0.0.1',
//   port: 80,
//   config: {
//     url: './list.json',
//     method: 'get',
//     headers: {
//       Accept: 'application/json, text/plain, */*',
//       'User-Agent': 'axios/0.20.0'
//     },
//     transformRequest: [ [Function: transformRequest] ],
//     transformResponse: [ [Function: transformResponse] ],
//     timeout: 0,
//     adapter: [Function: httpAdapter],
//     xsrfCookieName: 'XSRF-TOKEN',
//     xsrfHeaderName: 'X-XSRF-TOKEN',
//     maxContentLength: -1,
//     maxBodyLength: -1,
//     validateStatus: [Function: validateStatus],
//     data: undefined
//   },
//   request: <ref *1> Writable {
//     _writableState: WritableState {
//       objectMode: false,
//       highWaterMark: 16384,
//       finalCalled: false,
//       needDrain: false,
//       ending: false,
//       ended: false,
//       finished: false,
//       destroyed: false,
//       decodeStrings: true,
//       defaultEncoding: 'utf8',
//       length: 0,
//       writing: false,
//       corked: 0,
//       sync: true,
//       bufferProcessing: false,
//       onwrite: [Function: bound onwrite],
//       writecb: null,
//       writelen: 0,
//       afterWriteTickInfo: null,
//       bufferedRequest: null,
//       lastBufferedRequest: null,
//       pendingcb: 0,
//       prefinished: false,
//       errorEmitted: false,
//       emitClose: true,
//       autoDestroy: false,
//       errored: false,
//       bufferedRequestCount: 0,
//       corkedRequestsFree: [Object]
//     },
//     writable: true,
//     _events: [Object: null prototype] {
//       response: [Function: handleResponse],
//       error: [Function: handleRequestError]
//     },
//     _eventsCount: 2,
//     _maxListeners: undefined,
//     _options: {
//       maxRedirects: 21,
//       maxBodyLength: 10485760,
//       protocol: 'http:',
//       path: './list.json',
//       method: 'GET',
//       headers: [Object],
//       agent: undefined,
//       agents: [Object],
//       auth: undefined,
//       hostname: null,
//       port: null,
//       nativeProtocols: [Object],
//       pathname: './list.json'
//     },
//     _ended: true,
//     _ending: true,
//     _redirectCount: 0,
//     _redirects: [],
//     _requestBodyLength: 0,
//     _requestBodyBuffers: [],
//     _onNativeResponse: [Function (anonymous)],
//     _currentRequest: ClientRequest {
//       _events: [Object: null prototype],
//       _eventsCount: 7,
//       _maxListeners: undefined,
//       outputData: [],
//       outputSize: 0,
//       writable: true,
//       _last: true,
//       chunkedEncoding: false,
//       shouldKeepAlive: false,
//       useChunkedEncodingByDefault: false,
//       sendDate: false,
//       _removedConnection: false,
//       _removedContLen: false,
//       _removedTE: false,
//       _contentLength: 0,
//       _hasBody: true,
//       _trailer: '',
//       finished: true,
//       _headerSent: true,
//       socket: [Socket],
//       _header: 'GET ./list.json HTTP/1.1\r\n' +
//         'Accept: application/json, text/plain, */*\r\n' +
//         'User-Agent: axios/0.20.0\r\n' +
//         'Host: localhost\r\n' +
//         'Connection: close\r\n' +
//         '\r\n',
//       _onPendingData: [Function: noopPendingOutput],
//       agent: [Agent],
//       socketPath: undefined,
//       method: 'GET',
//       maxHeaderSize: undefined,
//       insecureHTTPParser: undefined,
//       path: './list.json',
//       _ended: false,
//       res: null,
//       aborted: false,
//       timeoutCb: null,
//       upgradeOrConnect: false,
//       parser: null,
//       maxHeadersCount: null,
//       reusedSocket: false,
//       _redirectable: [Circular *1],
//       [Symbol(kCapture)]: false,
//       [Symbol(kNeedDrain)]: false,
//       [Symbol(corked)]: 0,
//       [Symbol(kOutHeaders)]: [Object: null prototype]
//     },
//     _currentUrl: 'http:./list.json',
//     [Symbol(kCapture)]: false
//   },
//   response: undefined,
//   isAxiosError: true,
//   toJSON: [Function: toJSON]
// }
