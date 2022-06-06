/*
***************************
QuantumultX:
*
[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/receipts url script-response-body kapianguan.js
^https:\/\/(api\.revenuecat\.com\/v\d\/subscribers|vsco\.co\/api\/subscriptions\/\d\.\d\/user-subscriptions)\/ url script-response-body kapianguan.js

[mitm]
hostname = api.revenuecat.com

**************************/

let obj = JSON.parse($response.body || '{}');
const pathReceipts = "v1/receipts"
const pathSubcriber = "v1/subscribers/";

if ($request.url.indexOf(pathSubcriber) !== -1) {
	obj.subscriber.subscriptions = {
		"CardPhoto_Pro_Year": {
			"billing_issues_detected_at": null,
			"expires_date": "2030-02-18T07:52:54Z",
			"grace_period_expires_date": null,
			"is_sandbox": false,
			"original_purchase_date": "2022-04-30T05:49:42Z",
			"period_type": "normal",
			"ownership_type": "PURCHASED",
			"purchase_date": "2022-04-30T05:49:42Z",
			"store": "app_store",
			"unsubscribe_detected_at": null
		}
	};
	obj.subscriber.entitlements = {
		"allaccess": {
			"expires_date": "2030-02-18T07:52:54Z",
			"grace_period_expires_date": null,
			"product_identifier": "CardPhoto_Pro_Year",
			"purchase_date": "2022-04-30T05:49:42Z"
		}
	};
}

if ($request.url.indexOf(pathReceipts) !== -1){
	obj.subscriber.subscriptions = {
		"CardPhoto_Pro_Year": {
			"billing_issues_detected_at": null,
			"expires_date": "2030-02-18T07:52:54Z",
			"grace_period_expires_date": null,
			"is_sandbox": false,
			"original_purchase_date": "2022-04-30T05:49:42Z",
			"period_type": "normal",
			"ownership_type": "PURCHASED",
			"purchase_date": "2022-04-30T05:49:42Z",
			"store": "app_store",
			"unsubscribe_detected_at": null
		}
	};
	obj.subscriber.entitlements = {
		"allaccess": {
			"expires_date": "2030-02-18T07:52:54Z",
			"grace_period_expires_date": null,
			"product_identifier": "CardPhoto_Pro_Year",
			"purchase_date": "2022-04-30T05:49:42Z"
		}
	};
}

if (obj.user_subscription) {
	obj.user_subscription["expires_on_sec"] = 1655536094;
	obj.user_subscription["expired"] = false;
	obj.user_subscription["payment_type"] = 2;
	obj.user_subscription["is_trial_period"] = true;
	obj.user_subscription["starts_on_sec"] = 1560831070;
	obj.user_subscription["is_active"] = true;
	obj.user_subscription["auto_renew"] = true;
	obj.user_subscription["last_verified_sec"] = 1560831070;
	obj.user_subscription["subscription_code"] = "VSCOANNUAL";
	obj.user_subscription["user_id"] = 54624336;
	obj.user_subscription["source"] = 1;
}

$done({
	body: JSON.stringify(obj)
});
