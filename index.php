<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style>
      #content div {display: none; height: 300px; width: 500px;  padding: 20px;}
      .item1 {background-color: #ffe5c2;}
      .item2 {background-color: #daffc2;}
      .item3 {background-color: #c2f7ff;}
      .item3 div {height: 252px !important; width: 460px !important; background-color: #f7f5db;}
      .item4 {background-color: #d7c2ff; width: 200px;}
      .item4 li {background-color: #d7c2ff; display: block;}
    </style>
  </head>
  <body>
    <div class="menu">
      <a href="javascript: Tupi.hideShow('.item1');">Simple display screen 1</a><br />
      <a href="javascript: Tupi.hideReplace('.item2', Tupi.getStaticPage('/tupi/page1.php'));">Display only screen 2 from AJAX request</a><br />
      <a href="javascript: Tupi.hideReplace('.item2', Tupi.getStaticPage('/tupi/page1.php'), undefined, false, false);">Display only screen 2 from AJAX request, but without animations</a><br />
      <a href="javascript: Tupi.replace('.item2', Tupi.getStaticPage('/tupi/page2.php'));">Fade Out screen 2 and load another content in same screen using AJAX request</a><br />
      <a href="javascript: Tupi.hideShow('.sub-item3-1');">Display screen 3 - subscreen 1 (cascate functionality)</a><br />
      <a href="javascript: Tupi.hideReplace('.sub-item3-2', Tupi.getHtml('/tupi/page3.php', 'name=Username', 'post'));">Display screen 3 - subscreen 2 (cascate functionality with AJAX POST request)</a><br />
      <a href="javascript: Tupi.hideAppend('.item4', '<li>new Append element</li>');">Display screen 4 and append a new element to it.</a><br />
      <a href="javascript: Tupi.hidePrepend('.item4', Tupi.getStaticPage('/tupi/page4.php'));">Display screen 4 and Prepend a new element to it from an Ajax Request</a><br />
      <a href="javascript: alert(Tupi.getJson('/tupi/json.php', 'test=AJAX', 'post'));">Get json object from AJAX request</a><br />
      <a href="javascript: Tupi.hideShow('.item-empty');">Hide all screens</a><br />
    </div>
    <div id="content">
      <div class="item1">
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque quam neque, bibendum in tincidunt quis, blandit sed massa. In hac habitasse platea dictumst. Duis lectus nunc, semper et ullamcorper nec, eleifend quis orci. In ac lectus non nibh feugiat placerat. Aliquam id justo ac nisl condimentum iaculis. Nulla vitae varius felis. Morbi imperdiet lacus ac ipsum vulputate facilisis. Sed in dolor eget ligula gravida placerat eget et magna. Nunc nec tincidunt arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      </div>
      <div class="item2"></div>
      <div class="item3">
        Screen number 3 title
        <div class="sub-item3-1">
          Donec ut erat lectus. Quisque et rutrum neque. Praesent ac sapien diam. Nunc enim nisi, malesuada ut gravida vitae, varius non sem. Curabitur justo velit, porta sit amet vestibulum vel, vulputate eu urna. Curabitur semper sapien in odio tincidunt egestas. Donec suscipit pretium metus, ac luctus sapien gravida non. Sed posuere nunc lacus, nec malesuada augue. Duis pretium justo sit amet dolor porttitor eget vulputate lectus vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </div>
        <div class="sub-item3-2"></div>
      </div>
      <ul class="item4"></ul>
      <div class="item-empty"></div>
    </div>

    <!-- Loading Javascript files... you will need in the maximum, 3 files, always!!! -->
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script type="text/javascript" src="http://www.danielalvarengacampos.com/tupi/js/tupi.js"></script>
    <script type="text/javascript">
      /*
       * cool transitions to use
       * 
       * http://workshop.rs/projects/jqfancytransitions/
       * http://www.malsup.com/jquery/cycle/browser.html
       * 
       */
      jQuery(function() {
        Tupi.init('#content', 1);
        Tupi.setTransitionStart(function(){$('#content').hide('slow');});
        Tupi.setTransitionEnd(function(){$('#content').fadeIn('slow');});
      });
    </script>
  </body>
</html>
