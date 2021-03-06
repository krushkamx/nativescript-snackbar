"use strict";
var color_1 = require("color");
var platform_1 = require("platform");
var app = require("application");
var main_view_model_1 = require('./main-view-model');
// Event handler for Page "loaded" event attached in main-page.xml
function pageLoaded(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new main_view_model_1.HelloWorldModel(page);
    if (platform_1.isAndroid && platform_1.device.sdkVersion >= "21") {
        var window = app.android.startActivity.getWindow();
        window.setStatusBarColor(new color_1.Color("#d3d3d3").android);
    }
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=main-page.js.map