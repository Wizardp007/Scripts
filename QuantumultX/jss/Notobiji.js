/**
Noto笔记VIP
^https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts) url script-response-body https://raw.githubusercontent.com/Wizardp007/Scripts/main/QuantumultX/jss/Notobiji.js
api.revenuecat.com
*/

var body = $response.body;
var url  = $request.url;

    var obj = {
        "request_date":"2020-12-02T06:19:11Z",
        "request_date_ms":1606889951470,
        "subscriber":{
            "entitlements":{
                "pro":{
                    "expires_date":"2021-12-05T06:15:03Z",
                    "grace_period_expires_date":null,
                    "product_identifier":"com.lkzhao.editor.pro.ios.yearly",
                    "purchase_date":"2020-12-02T06:15:03Z"
                }
            },
            "first_seen":"2020-12-02T05:40:13Z",
            "last_seen":"2020-12-02T05:40:13Z",
            "management_url":"itms-apps://apps.apple.com/account/subscriptions",
            "non_subscriptions":{
    
            },
            "original_app_user_id":"$RCAnonymousID:5958c79bfcf04c55b0561eb7d608328e",
            "original_application_version":"122",
            "original_purchase_date":"2020-05-15T01:56:58Z",
            "other_purchases":{
    
            },
            "subscriptions":{
                "com.lkzhao.editor.pro.ios.yearly":{
                    "billing_issues_detected_at":null,
                    "expires_date":"2021-12-05T06:15:03Z",
                    "grace_period_expires_date":null,
                    "is_sandbox":false,
                    "original_purchase_date":"2020-12-02T06:15:04Z",
                    "period_type":"Normal",
                    "purchase_date":"2020-12-02T06:15:03Z",
                    "store":"app_store",
                    "unsubscribe_detected_at":null
                }
            }
        }
    }

body = JSON.stringify(obj);
$done({body})	
