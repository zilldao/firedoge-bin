/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// This file contains branding-specific prefs.

/*** MaterialFox ***/
/**  Mandatory	  **/
pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // default is false
pref("svg.context-properties.content.enabled", true); 				// default is false

/**  Recommended  (uncomment to apply) **/
/* Replicate Chrome behaviour for clipped tabs */
pref("browser.tabs.tabClipWidth", 83); 							// default is 140

/* Replicate Chrome's "Not Secure" text on HTTP */
pref("security.insecure_connection_text.enabled", true);

/* Warn before closing windows */
pref("browser.sessionstore.warnOnQuit", true);

/* Restore sessions */
pref("browser.startup.page", 3);

/* Prevent automatic updates */
pref("app.update.auto", false);

/* Enable CSS blur effects */
pref("layout.css.backdrop-filter.enabled", true);
pref("gfx.webrender.all", true);
pref("svg.context-properties.content.enabled", true);

pref("extensions.installedDistroAddon.{77691beb-4c53-48de-ab20-6589a537717a}.xpi", true);
pref("extensions.installedDistroAddon.firedogestart.xpi", true);
pref("extensions.installedDistroAddon.ipfs-firefox-addon@lidel.org.xpi", true);
pref("extensions.installedDistroAddon.panorama-tab-groups@example.com.xpi", true);
pref("extensions.installedDistroAddon.uBlock0@raymondhill.net.xpi", true);
pref("extensions.installedDistroAddon.@vivaldi-fox.xpi", true);
//-
pref("extensions.activeThemeID", "materialfox@web3hq.eth");
pref("general.skins.selectedSkin", "materialfox@web3hq.eth");

pref("general.useragent.override", "Mozilla/5.0 (X11-Wayland; Ubuntu; Floflis/25; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0 Firedoge/124.0");

// branding-specific prefs from Mozilla:
pref("startup.homepage_override_url", "");
pref("startup.homepage_welcome_url", "resource:///components/homepage/index.html");
pref("startup.homepage_welcome_url.additional", "");
// The time interval between checks for a new version (in seconds)
pref("app.update.interval", 86400); // 24 hours
// Give the user x seconds to react before showing the big UI. default=24 hours
pref("app.update.promptWaitTime", 86400);
// URL user can browse to manually if for some reason all update installation
// attempts fail.
pref("app.update.url.manual", "https://nightly.mozilla.org");
// A default value for the "More information about this update" link
// supplied in the "An update is available" page of the update wizard.
pref("app.update.url.details", "https://nightly.mozilla.org");

// The number of days a binary is permitted to be old
// without checking for an update.  This assumes that
// app.update.checkInstallTime is true.
pref("app.update.checkInstallTime.days", 2);

// Give the user x seconds to reboot before showing a badge on the hamburger
// button. default=immediately
pref("app.update.badgeWaitTime", 0);

// Number of usages of the web console.
// If this is less than 5, then pasting code into the web console is disabled
pref("devtools.selfxss.count", 5);
