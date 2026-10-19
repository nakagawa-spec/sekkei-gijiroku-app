// 公開してよい設定値だけを置く（APIキーの類はここに書かない。FirebaseのapiKeyは公開前提の識別子）
const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyDOeHUM5xVlmhC7_FQr3gWWH4LIrOin-cE',
  authDomain: 'shodan-hyouka-hh.firebaseapp.com',
  projectId: 'shodan-hyouka-hh',
  storageBucket: 'shodan-hyouka-hh.firebasestorage.app',
  messagingSenderId: '338293880238',
  appId: '1:338293880238:web:7e1baf3489f848fadfc43f',
};
const VAPID_KEY = 'BDSx9lcElj9w3y2Lm_yoxzbBeGB_egSJv2NzDnoc1QWRwNSStepflLIJ8PPVAvIEgyqVF5YLxqiAnlKT4_itQpM';
// GASのWebアプリ（ログインなしで開ける）。デプロイし直してもURLが変わらないように、同じデプロイIDを更新している
const GAS_URL = 'https://script.google.com/macros/s/AKfycbw_9zIZ2V8jw7a4jA184KGPquSaM9EqxCaHCMafEcc8zWfj7Eg-wCqd61mJNqicQkBg/exec';
