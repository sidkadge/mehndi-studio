
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12639, hash: '73fa6a054523b1966913740cc9ef76f836e7ea4e40d271daa72b51fa4b723450', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1182, hash: '49aebf05bec8c4cd9d09661fea620a7c1f685c9bf1af12707d7ffe67e44ab3f7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 75948, hash: '2dbdf339cbf03f0ca91e7fdb23a97d436f685fff222622c2254087c7d122f2be', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VUXQGWRF.css': {size: 113956, hash: '/cLxy1xA6/g', text: () => import('./assets-chunks/styles-VUXQGWRF_css.mjs').then(m => m.default)}
  },
};
