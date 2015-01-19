(ns views.snippets)

#_(def cdnhead 
[:link {:rel "stylesheet" :href "//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css"}])

#_(def cdnbody 

[:script {:src "//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"}]
[:script "window.jQuery || document.write('<script src=\"/local/jquery.min.js\"></script>')"]

[:script {:src "//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"}]
[:script "if(typeof($.fn.modal) === 'undefined') {document.write('<script src=\"/local/bootstrap.min.js\"></script>')}"]

[:script "
    $(document).ready(function() {
    var bodyColor = $('body').css('color');
    if(bodyColor != 'rgb(51, 51, 51)') {
    $(\"head\").prepend('<link rel=\"stylesheet\" href=\"/local/bootstrap.min.css\">');}});
 "]

)
