(ns views.adverts)

(def lifestreetheadscript "<script src=\"https://ads.lfstmedia.com/getad?site=126110\" type=\"text/javascript\"></script>")

(def smallgabanner  "<script async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script><!-- u1stgamesforumbanner --><ins class=\"adsbygoogle\" style=\"display:inline-block;width:468px;height:60px\" data-ad-client=\"ca-pub-2815558012050620\" data-ad-slot=\"1981544054\"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>")

(def largegabanner  "<script async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script><!-- linkexchangebanner --><ins class=\"adsbygoogle\" style=\"display:inline-block;width:728px;height:90px\" data-ad-client=\"ca-pub-2815558012050620\" data-ad-slot=\"4888392853\"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>")

(def fblikebox "<div class=\"fb-like-box\" data-href=\"https://www.facebook.com/u1stgamesofficial\" data-show-faces=\"true\" data-header=\"true\" data-stream=\"false\"data-show-border=\"false\" data-height=\"235\"></div>")

(def boxgaad "<div class=\"addmargin\"><script type=\"text/javascript\"><!--google_ad_client = \"ca-pub-2815558012050620\";/* u1st box bottom */google_ad_slot = \"4800333819\";google_ad_width = 300;google_ad_height = 250;//--></script><script type=\"text/javascript\"src=\"//pagead2.googlesyndication.com/pagead/show_ads.js\"></script></div>")

(def lifestreetbanner "
<script type=\"text/javascript\">
    //<![CDATA[
        LSM_Slot({
            adkey: 'fcb',
            ad_size: '728x90',
            slot: 'slot71494'
        });
    //]]>
</script> 
  ")

(def lifestreettopbanner 
  "
<script type=\"text/javascript\">
    //<![CDATA[
        LSM_Slot({
            adkey: 'a0c',
            ad_size: '728x90',
            slot: 'slot45360'
        });
    //]]>
</script>
  ")

(def lifestreetbox "<script type=\"text/javascript\">//<![CDATA[LSM_Slot({adkey: 'd9d',ad_size: '300x250',slot: 'slot71448'});//]]></script>")

(defn eastcontent [& facebook]
  [:center 
   fblikebox
   (if (nth facebook 0) lifestreetbox boxgaad)])

(def analytics
"
 <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-48915259-1', 'u1stgames.com');
  ga ('require', 'displayfeatures');
  ga('send', 'pageview');

</script> 
")

(def largetowerad  
  "
<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>
<!-- linkx tower -->
<ins class=\"adsbygoogle\"
     style=\"display:inline-block;width:300px;height:600px;\"
     data-ad-client=\"ca-pub-2815558012050620\"
     data-ad-slot=\"7534766058\"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>  
  ")

(def errorception 
 "
 <script>
    (function(_,e,rr,s){_errs=[s];var c=_.onerror;_.onerror=function(){var a=arguments;_errs.push(a);
    c&&c.apply(this,a)};var b=function(){var c=e.createElement(rr),b=e.getElementsByTagName(rr)[0];
    c.src=\"//beacon.errorception.com/\"+s+\".js\";c.async=!0;b.parentNode.insertBefore(c,b)};
    _.addEventListener?_.addEventListener(\"load\",b,!1):_.attachEvent(\"onload\",b)})
    (window,document,\"script\",\"53aad61900af01157100008d\");
</script>
  ")

(def ad4gamebanner 
"
<!--/* Ad4Game Javascript Tag */-->

<script type='text/javascript'><!--//<![CDATA[
   var m3_u = (location.protocol=='https:'?'https://ads.ad4game.com/www/delivery/ajs.php':'http://ads.ad4game.com/www/delivery/ajs.php');
   var m3_r = Math.floor(Math.random()*99999999999);
   if (!document.MAX_used) document.MAX_used = ',';
   document.write (\"<scr\"+\"ipt type='text/javascript' src='\"+m3_u);
   document.write (\"?zoneid=40924&amp;block=1&amp;blockcampaign=1\");
   document.write ('&amp;cb=' + m3_r);
   if (document.MAX_used != ',') document.write (\"&amp;exclude=\" + document.MAX_used);
   document.write (document.charset ? '&amp;charset='+document.charset : (document.characterSet ? '&amp;charset='+document.characterSet : ''));
   document.write (\"&amp;loc=\" + escape(window.location));
   if (document.referrer) document.write (\"&amp;referer=\" + escape(document.referrer));
   if (document.context) document.write (\"&context=\" + escape(document.context));
   if (document.mmm_fo) document.write (\"&amp;mmm_fo=1\");
   document.write (\"'></scr\"+\"ipt>\");
//]]>--></script><noscript><a href='http://ads.ad4game.com/www/delivery/dck.php?n=a3b931a2&amp;cb=INSERT_RANDOM_NUMBER_HERE' target='_blank'><img src='http://ads.ad4game.com/www/delivery/avw.php?zoneid=40924&amp;cb=INSERT_RANDOM_NUMBER_HERE&amp;n=a3b931a2' border='0' alt='' /></a></noscript>

")

