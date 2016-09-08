var time = '24h';  // choose between "12h" or "24h"

var opacity = 1;
//Change these between 'notif_1', 'notif_2', 'notif_3', 'cpu', 'ram', 'weather', 'calender', 'battery'
//Can't use 2 of the same
//Change to 'hide' if you don't want to see that circle!

var circle1 = "notif_1";
var circle2 = "notif_2";
var circle3 = "notif_3";
var circle4 = "cpu";
var circle5 = "ram";

//Gets weather from your first weather page from the weather app  
var circle6 = "weather";
var circle7 = "calender";
var circle8 = "battery";


//Change according to which notifications you want to see, search for the apps 'bundle id'
//If you choose to not use any "notif" leave these as they are
var notif_1 = "com.apple.MobileSMS";
var notif_1_name = "Messages";
var notif_2 = "com.apple.mobilephone";
var notif_2_name = "Phone";
var notif_3 = "com.apple.mobilemail";
var notif_3_name = "Email";

//Here are some of the common apps bundle ids:
/*
Whatsapp: net.whatsapp.WhatsApp
Outlook: com.microsoft.Office.Outlook
Gmail: com.google.Gmail
Messenger: com.facebook.Messenger
Viber: com.viber
Telegram: ph.telegra.Telegraph
Facebook: com.facebook.Facebook
Twitter: com.atebits.Tweetie2
Instagram: com.burbn.instagram
Apple Messages: com.apple.MobileSMS
Apple Email: com.apple.mobilemail
Apple Phone: com.apple.mobilephone
Kik: com.kik.chat
Snapchat: com.toyopagroup.picaboo
*/