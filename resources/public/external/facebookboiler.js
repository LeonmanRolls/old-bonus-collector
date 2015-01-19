//window.hasstorage = false;
// Feature detect + local reference
var hasstorage,
    fail,
    uid;
try {
  uid = new Date;
  (hasstorage = window.localStorage).setItem(uid, uid);
  fail = hasstorage.getItem(uid) != uid;
  hasstorage.removeItem(uid);
  fail && (hasstorage = false);
} catch(e) {}


function initfacebook(AppId, logincallback, permissions){

    window.fbAsyncInit = function() {
        FB.init({
        channelUrl : 'http://u1stgames.com/channel.php', 
        appId      : AppId.toString(),
        status     : true,
        xfbml      : true,
        frictionlessRequests : true,
        version    : 'v2.0'
        });

        FB.getLoginStatus(function(response){
            logincallback(response);
        }, {scope: permissions});

    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

}

function filter(element){

    var value = $(element).val();

    $("#bonuseslivehere > li").each(function() {
        $(this).hide();
    });

    var re = RegExp (value, "i");
    $("#bonuseslivehere > li").filter(function() {
        return re.test(this.title);
    }).each(function() { $(this).show(); });

}


function initDataTable () {
    $('#table_id').DataTable({
        pageLength: 30,
        responsive: true,
    lengthChange: false,
    "order": [ 2, 'asc']
    });

   $('#table_id_filter label input').addClass("form-control");

   $('#table_id_filter label input').wrap("<div class='input-group'></div>");

   $('#table_id_filter label div').prepend("<span class='input-group-addon glyphicon glyphicon-search '></div>");

   $('#table_id_filter label').contents().filter(function(){
           return this.nodeType === 3;
   }).remove();

}

