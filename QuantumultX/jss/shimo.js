/*
石墨文档解锁VIP
#石墨文档
^https?://shimo.im/lizard-api/users/ url script-response-body https://raw.githubusercontent.com/Wizardp007/Scripts/main/QuantumultX/jss/shimo.js
hostname=shimo.im
*/

let obj = JSON.parse($response.body);

obj.membership = {
    "accountTypeExpiredAt": "2099-04-30T16:00:00.000Z",
    "accountTypeCreatedAt": "2020-10-19T13:52:44.000Z",
    "accountType": "personal_premium",
    "isEnterprisePremium": true,
    "isExpired": false,
    "isNewDing": false,
    "isOfficial": true
  }

$done({body: JSON.stringify(obj)});
