/* Based on Categorizr (https://github.com/bjankord/Categorizr) by Brett Jankord (http://www.brettjankord.com) */
// MIT license ->  Collaborators jimmybergman, rguerreiro	
// This file is from device.js; has been altered for production

'use strict';




function deviceParser(user_agent) {

    var ua = user_agent;

    // overwrite Flipboard user agent otherwise it's detected as a desktop
    if (ua.match(/FlipboardProxy/i))
        ua = 'FlipboardProxy/1.1;  http://flipboard.com/browserproxy';
    if (ua.match(/Applebot/i))
        ua = 'Applebot/0.1;  http://www.apple.com/go/applebot';
    if (ua.match(/GoogleTV|SmartTV|SMART-TV|Internet TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|hbbtv|CrKey|CE\-HTML/i)) {
        // if user agent is a smart TV - http://goo.gl/FocDk
        return 'tv';
    } else if (ua.match(/Xbox|PLAYSTATION (3|4)|Wii/i)) {
        // if user agent is a TV Based Gaming Console
        return 'tv';
    } else if (ua.match(/iP(a|ro)d/i) || (ua.match(/tablet/i) && !ua.match(/RX-34/i)) || ua.match(/FOLIO/i)) {
        // if user agent is a Tablet
        return 'tablet';
    } else if (ua.match(/Linux/i) && ua.match(/Android/i) && !ua.match(/Fennec|mobi|HTC Magic|HTCX06HT|Nexus One|SC-02B|fone 945/i)) {
        // if user agent is an Android Tablet
        return 'tablet';
    } else if (ua.match(/Kindle/i) || (ua.match(/Mac OS/i) && ua.match(/Silk/i)) || (ua.match(/AppleWebKit/i) && ua.match(/Silk/i) && !ua.match(/Playstation Vita/i))) {
        // if user agent is a Kindle or Kindle Fire
        return 'tablet';
    } else if (ua.match(/GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC( Flyer|_Flyer)|Sprint ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos S7|Dell Streak 7|Advent Vega|A101IT|A70BHT|MID7015|Next2|nook/i) || (ua.match(/MB511/i) && ua.match(/RUTEM/i))) {
        // if user agent is a pre Android 3.0 Tablet
        return 'tablet';
    } else if (ua.match(/BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google Wireless Transcoder/i)) {
        // if user agent is unique phone User Agent
        return 'phone';
    } else if (ua.match(/Opera/i) && ua.match(/Windows NT 5/i) && ua.match(/HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i)) {
        // if user agent is an odd Opera User Agent - http://goo.gl/nK90K
        return 'phone';
    } else if ((ua.match(/Windows (NT|XP|ME|9)/) && !ua.match(/Phone/i)) && !ua.match(/Bot|Spider|ia_archiver|NewsGator/i) || ua.match(/Win( ?9|NT)/i)) {
        // if user agent is Windows Desktop
        return 'desktop';
    } else if (ua.match(/Macintosh|PowerPC/i) && !ua.match(/Silk/i)) {
        // if agent is Mac Desktop
        return 'desktop';
    } else if (ua.match(/Linux/i) && ua.match(/X11/i) && !ua.match(/Charlotte|JobBot/i)) {
        // if user agent is a Linux Desktop
        return 'desktop';
    } else if (ua.match(/CrOS/)) {
        // if user agent is a Chrome Book
        return 'desktop';
    } else if (ua.match(/Solaris|SunOS|BSD/i)) {
        // if user agent is a Solaris, SunOS, BSD Desktop
        return 'desktop';
    }
};