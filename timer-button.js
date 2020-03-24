var $timerButton = (function(){
    var html = '<input class="timer-button" type="button" value="同意 (6s)" disabled>';
    var $btn = $('<input type="button"  disabled>');
  
    var timer,
        num,
        cfg = {
          container:'body',
          num : 6,
          title:'同意',
        };
    $btn.css({
      height:'50px',
      width:'150px'
    })
    function show(conf){
      $.extend(cfg,conf);//追加到最新配置
  
      //1.DOM draw
      //第一种添加
      //$(cfg.container).html(html);
      //第二种添加
      $(cfg.container).append($btn);
      num = cfg.num;
      $btn.val(cfg.title + '(' + cfg.num + 's)');//按钮初始值
  
      timer=setInterval(function(){
          num--;
          if(num === 0){
            clearInterval(timer);
            $btn.val(cfg.title);
            $btn.removeAttr('disabled');
          }else{
            $btn.val(cfg.title + '(' + num + 's)')
          }
      },1000);
  
    }
   
    $btn.click(function(){
        cfg.onClick();
    })
  
    return {
      show : show
    }
  }());
  
  //不用 page load event
  //
  //封装成对象，有几种方案
  //
  //1.全局对象（简单对象自变量）：不完全是面对对象
  //var timer-button = {show:funtion(){}}
  
  //2.工厂函数，一个函数，返回值是一个简单对象 （大部分）
  //var timerBtn = (function(){
  //      return{
  //          show:function{}
  //      }
  //}())
  
  //3.构造函数  
  //function timerBtn(){} var timer = new timerBtn();