<script type="text/javascript">

  var type = navigator.appName;
  if (type == "Netscape"){
    var lang = navigator.language;//獲取瀏覽器配置語言，支援非IE瀏覽器
  }else{
    var lang = navigator.userLanguage;//獲取瀏覽器配置語言，支援IE5+ == navigator.systemLanguage
  };

  document.getElementById("spanLang").innerHTML = lang;
</script>
