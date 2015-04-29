// ==UserScript==
// @name        HUJI Logo Fixer
// @namespace   HUJI
// @include     http://moodle.huji.ac.il/*
// @include     http://moodle.cs.huji.ac.il/*
// @include     http://moodle2.cs.huji.ac.il/*
// @include	https://mail.google.com/mail/*
// @version     1.1
// @description Chnages the logo in the moodle to the correct one
// @updateURL      http://www.cs.huji.ac.il/~omershe//HUJI_Logo_Fixer.meta.js
// @downloadURL    http://www.cs.huji.ac.il/~omershe/HUJI_Logo_Fixer.user.js
// @grant       none
// ==/UserScript==

// TODO: Change the links to string holding the images with base-64 format to avoid fucture picture changes or move it to external location
var LOGO_URL = "http://moodle.cs.huji.ac.il/cs14/theme/formal_white/huji.jpg";
var LOGO_WITH_TEXT_URL = "https://physicschemistry.files.wordpress.com/2012/03/mh_trans1.gif";
// "http://physics-chemblog.huji.ac.il/wp-content/uploads/2012/03/huji-logo1.jpg"; // good but small and with with background
// "http://ap.huji.ac.il/sites/all/themes/harp/images/rh_trans.gif"; // good but small

var img;
var url;

if (document.location.href.indexOf("https://mail.google.com/mail/") == 0)
{
	url = LOGO_WITH_TEXT_URL;
	
	var div = document.getElementById("gbq1");
	
	div.childNodes[0].childNodes[0].childNodes[0].style.backgroundImage = "url('" + url + "')";
	img = div.childNodes[0].childNodes[0].childNodes[0].childNodes[0];
}
else
{
	if (/moodle2/.test(document.location.href))
	{
		var div = document.getElementById("headerlogo");
		img = div.childNodes[1];
	}
	else
	{
		var h1 = document.getElementsByTagName("h1")[0];
		img = h1.childNodes[0].childNodes[0];
		if (/moodle\.huji\.ac\.il\/hu14\/$/.test(document.location.href))
		{
			img = img.childNodes[0];
		}
	}
	url = LOGO_URL;
}

img.setAttribute("src", url);
