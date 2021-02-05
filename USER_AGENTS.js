const USER_AGENTS = [
  "jdapp;android;9.3.5;10;2346663656561603-4353564623932316;network/wifi;model/ONEPLUS A5010;addressid/138709979;aid/2dfceea045ed292a;oaid/;osVer/29;appBuild/86390;partner/jingdong;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010 Build/QKQ1.191014.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36",
  "jdapp;android;9.3.4;9;D266436653462-6665326466626;network/4g;model/Mi Note 3;addressid/137888479;aid/15225879b8538ee7;oaid/f3157082db9da676;osVer/28;appBuild/86388;partner/xiaomi001;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 9; Mi Note 3 Build/PKQ1.181007.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045131 Mobile Safari/537.36",
  "jdapp;android;9.3.4;10;5353235373364666-4693734373436656;network/wifi;model/GM1910;addressid/993893557;aid/55257cdfd97474fe;oaid/;osVer/29;appBuild/86388;partner/oppo;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; GM1910 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36",
  "jdapp;android;9.3.6;9;8363538313830343131373538363-93D2134313639356631333737346;network/wifi;model/16T;addressid/1312262776;aid/afba6ae53ef2cece;oaid/;osVer/28;appBuild/86560;partner/meizu;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 9; 16T Build/PKQ1.190616.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36",
  "jdapp;android;9.3.6;9;D256434363461-6531383831656;network/wifi;model/MI 6;addressid/856540565;aid/f0ee06ebc7f6e98f;oaid/7fed3628fe652595;osVer/28;appBuild/86533;psn/V0yRdEdRydfYb9nackt2CQ==|3683;psq/0;adk/;ads/;pap/JA2015_311210|9.3.6|ANDROID 9;osv/9;pv/3513.0;jdv/0|kong|t_1000089893_|tuiguang|72e393e7b2474bc6a2369615f1b262e5|1610986845;ref/;partner/jingdong;apprpd/;eufv/1;Mozilla/5.0 (Linux; Android 9; MI 6 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36",
  "jdapp;android;9.3.6;11;2353632303533303-4613731326261636;network/wifi;model/Redmi K30 5G;addressid/137593713;aid/25620530d171bbac;oaid/bfa9b0b7eca0475e;osVer/30;appBuild/86560;psn/oAPbHSW3fqrTmO6vGi1h73hJ0XCn9xEB|2846;psq/6;adk/;ads/;pap/JA2015_311210|9.3.6|ANDROID 11;osv/11;pv/2763.63;jdv/0|kong|t_1000089893_157_0_184__6fe1ce2ddf1f49a0|jingfen|249389d15ac843dbbbec52ce919891fb|1610851978;ref/com.jingdong.app.mall.home.JDHomeFragment;partner/xiaomi001;apprpd/Home_Main;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 11; Redmi K30 5G Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045511 Mobile Safari/537.36",
  "jdapp;android;9.3.0;10;3b78ecc3f490c7ba;network/wifi;model/M2006J10C;addressid/138543439;aid/3b78ecc3f490c7ba;oaid/7d5870c5a1696881;osVer/29;appBuild/85770;psn/3b78ecc3f490c7ba|599;psq/2;uid/3b78ecc3f490c7ba;adk/;ads/;pap/JA2015_311210|9.3.0|ANDROID 10;osv/10;pv/580.2;jdv/0|kong|t_1000089893_|tuiguang|e21138bd89c445d98a2cc2e375c37b4f|1606572739;ref/com.jd.lib.personal.view.fragment.JDPersonalFragment;partner/jingdong;apprpd/MyJD_Main;Mozilla/5.0 (Linux; Android 10; M2006J10C Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36",
  "jdapp;android;9.3.5;10;3326738356363633-6643930336732616;network/wifi;model/M2006J10C;addressid/138543439;aid/3b78ecc3f490c7ba;oaid/7d5870c5a1696881;osVer/29;appBuild/86390;psn/+pXCRL9fJyKJUUyy3COtPXYNfar5tX5i|2154;psq/2;adk/;ads/;pap/JA2015_311210|9.3.5|ANDROID 10;osv/10;pv/1473.2;jdv/0|kong|t_1000170135|tuiguang|notset|1607913972208|1607913972;ref/com.jingdong.app.mall.home.JDHomeFragment;partner/jingdong;apprpd/Home_Main;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; M2006J10C Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36",
  "jdapp;android;9.1.4;10;f0798926f10dc8d8;network/wifi;model/ONEPLUS A6000;addressid/2082421393;aid/f0798926f10dc8d8;oaid/;osVer/29;appBuild/84555;partner/oppo;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; ONEPLUS A6000 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045224 Mobile Safari/537.36",
  "jdapp;android;9.1.0;9;864360034117260-18d276c8a45f;network/wifi;model/MHA-AL00;addressid/2013852661;aid/6edf28a51a564bc7;oaid/7efede7f-7ffb-839d-d58f-7f7b7ff9c1ee;osVer/28;appBuild/83789;partner/jingdong;Mozilla/5.0 (Linux; Android 9; MHA-AL00 Build/HUAWEIMHA-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36",
  "jdapp;android;8.5.2;8.1.0;865664032788249-90f05250a015;network/wifi;model/16 X;addressid/137581227;aid/99e3cd08cf5f0a2c;oaid/;osVer/27;appBuild/71869;partner/meizu;Mozilla/5.0 (Linux; Android 8.1.0; 16 X Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36",
  "jdapp;android;9.3.6;8.0.0;3353936343830383030333835333-53D2430343563363237316933336;network/wifi;model/HTC U-3w;addressid/1077019363;aid/c62026bb64774879;oaid/;osVer/26;appBuild/86560;partner/jingdong;eufv/1;Mozilla/5.0 (Linux; Android 8.0.0; HTC U-3w Build/OPR6.170623.013; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044942 Mobile Safari/537.36",
  "jdapp;android;9.3.6;10;8363434323030343235333838383-93D2134346136393268356361326;network/wifi;model/LYA-AL00;addressid/514336649;aid/4566072c8d9c08ac;oaid/00000000-0000-0000-0000-000000000000;osVer/29;appBuild/86560;partner/huawei;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; LYA-AL00 Build/HUAWEILYA-AL00L; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36",
  "jdapp;android;9.2.2;8.1.0;869071037529592-9487e01e7f2d;network/wifi;model/MI 8;addressid/2769817385;aid/f4ed3e79ab29f481;oaid/;osVer/27;appBuild/85371;partner/xiaomi001;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 8.1.0; MI 8 Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045131 Mobile Safari/537.36",
  "jdapp;android;9.3.4;10;9356665333362626-4603362346333356;network/UNKNOWN;model/Redmi K20 Pro Premium Edition;addressid/137826363;aid/9ef53cbbd0c2d33e;oaid/ec7c5827275510c6;osVer/29;appBuild/86388;psn/DlHZjadWfe77DEYHrpjFjvKonV0SSFdy|921;psq/2;adk/;ads/;pap/JA2015_311210|9.3.4|ANDROID 10;osv/10;pv/793.2;jdv/0|kong|t_1000089893_|tuiguang|7459d8cb7c8f4f9f8e6e87751f61bd18|1611236364;ref/com.jd.lib.personal.view.fragment.JDPersonalFragment;partner/xiaomi001;apprpd/MyJD_Main;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; Redmi K20 Pro Premium Edition Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045227 Mobile Safari/537.36",
  "jdapp;android;9.3.6;11;2643139303035683-6326533623539333;network/UNKNOWN;model/Redmi K20 Pro Premium Edition;addressid/0;aid/b41900e86b5c2593;oaid/a1ae016fae05d3c8;osVer/30;appBuild/86560;partner/xiaomi001;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 11; Redmi K20 Pro Premium Edition Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045513 Mobile Safari/537.36",
  "jdapp;android;9.3.6;10;8363037353830343533303236333-73D2438323361603735616833316;network/UNKNOWN;model/MI 8;addressid/2532472939;aid/b5de2a5d9ce280f6;oaid/867c11ae16e94d11;osVer/29;appBuild/86560;partner/xiaomi001;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045227 Mobile Safari/537.36",
]
/**
 * 生成随机数字
 * @param {number} min 最小值（包含）
 * @param {number} max 最大值（不包含）
 */
function randomNumber(min = 0, max = 100) {
  return Math.min(Math.floor(min + Math.random() * (max - min)), max);
}
const USER_AGENT = USER_AGENTS[randomNumber(0, USER_AGENTS.length)];

module.exports = {
  USER_AGENT
}
