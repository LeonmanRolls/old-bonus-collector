// reusable phantomjs script for running clojurescript.test tests
// see http://github.com/cemerick/clojurescript.test for more info

var p = require('webpage').create();

p.open('http://u1stgames.com:3000/gbc/403204596417287', function (s) {

var fs = require('fs');
var sys = require('system');
for (var i = 1; i < sys.args.length; i++) {
    if (fs.exists(sys.args[i])) {
        if (!p.injectJs(sys.args[i])) throw new Error("Failed to inject " + sys.args[i]);
    } else {
        p.evaluateJavaScript("(function () { " + sys.args[i] + ";" + " })");
    }
}

p.onConsoleMessage = function (x) {
  var line = x.toString();
  if (line !== "[NEWLINE]") {
    console.log(line.replace(/\[NEWLINE\]/g, "\n"));
  }
};

p.evaluate(function () {
  cemerick.cljs.test.set_print_fn_BANG_(function(x) {
    console.log(x.replace(/\n/g, "[NEWLINE]")); // since console.log *itself* adds a newline
  });
});

// p.evaluate is sandboxed, can't ship closures across;
// so, a bit of a hack, better than polling :-P
var exitCodePrefix = "phantom-exit-code:";
p.onAlert = function (msg) {
  var exit = msg.replace(exitCodePrefix, "");
  if (msg != exit) phantom.exit(parseInt(exit));
};

p.evaluate(function (exitCodePrefix) {
  var results = cemerick.cljs.test.run_all_tests();
  //console.log(results);
  cemerick.cljs.test.on_testing_complete(results, function () {
      window.alert(exitCodePrefix +
        (cemerick.cljs.test.successful_QMARK_(results) ? 0 : 1));
  });
}, exitCodePrefix);

});
