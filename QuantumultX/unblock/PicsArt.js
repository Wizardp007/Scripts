/*
PicsArt 解锁高级功能

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/api\.meiease\.cn\/shop\/subscription\/(validate|apple\/purchases) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/picsart.js

[mitm]
hostname = api.meiease.cn

**************************/

var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  "status" : "success",
  "response" : [
    {
      "status" : "SUBSCRIPTION_PURCHASED",
      "order_id" : "490001314520000",
      "original_order_id" : "490001314520000",
      "is_trial" : true,
      "plan_meta" : {
        "storage_limit_in_mb" : 20480,
        "frequency" : "yearly",
        "scope_id" : "full",
        "id" : "com.picsart.editor.subscription_yearly",
        "product_id" : "subscription_yearly",
        "level" : 2000,
        "auto_renew_product_id" : "com.picsart.editor.subscription_yearly",
        "type" : "renewable",
        "tier_id" : "gold_old",
        "permissions" : [
          "premium_tools_standard",
          "premium_tools_ai"
        ],
        "description" : "china"
      },
      "limitation" : {
        "max_count" : 5,
        "limits_exceeded" : false
      },
      "reason" : "ok",
      "subscription_id" : "com.picsart.editor.subscription_yearly",
      "is_eligible_for_introductory" : false,
      "purchase_date" : 1687020148000,
      "expire_date" : 4092599349000
    }
  ]
};

$done({body: JSON.stringify(chxm1023)});
