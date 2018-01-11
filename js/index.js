/**
 * Created by shy on 2018/1/10.
 */
//首页幻灯片部分开始
    $(function(){
        //var current_num=0;
        //var total_num=4;
        //var $width=$("#photoChang .igs").width();
        //var auto_t;
        //function auto_change(){
        //    if(current_num==4){
        //        current_num=0;
        //        $(".igs").stop(true, true).animate({left:"0"},500);
        //        $(".ig").eq(current_num).addClass('bg').siblings().removeClass('bg');
        //    }else{
        //        current_num++;
        //        $(".igs").stop(true, true).animate({left:"-="+$width},500);
        //        $(".ig").eq(current_num).addClass('bg').siblings().removeClass('bg');
        //    }
        //    auto_t=window.setTimeout(auto_change,1000);
        //    return;
        //}
        //auto_change();


        var i=0;
        var timer;
        //第一章图片显示，其它隐藏
        $(".ig").eq(0).show().siblings().hide();
        //图片自动轮播
        showTimer();

        //当鼠标放在圆点时图片切换
        $(".tab").hover(function(){
            clearInterval(timer);
            i=$(this).index();
            show();
        },function(){
            showTimer()
        });

        function show(){
            $(".ig").eq(i).show().siblings().hide();
            $(".tab").eq(i).addClass('bg').siblings().removeClass('bg');
        }

        function showTimer(){
           timer = setInterval(function(){
                i++;
                if(i>4){
                    i=0;
                }
                show();
            },1500)
        }
    })
//首页幻灯片部分结束

//首页到计时开始
function getTime(){
    var cdate=new Date();
    var cms=cdate.getTime();
    var fdate=new Date('2018/02/01');
    var fms=fdate.getTime();
    var res=fms-cms;

    var a = 1000;
    var ma = 60*a;
    var ha = 60*ma;
    var da = 24*ha;

    var d=parseInt(res/da);
    var h=parseInt(res%da/ha);
    var m=parseInt(res%da%ha/ma);
    var s=parseInt(res%da%ha%ma/a);
    var str=add(h)+':'+add(m)+':'+add(s);
    return str;
}
//首页到计时结束

//首页计时器开始
//function geTime(){
//    var date=new Date();
//    var h=date.getHours();
//    var m=date.getMinutes();
//    var s=date.getSeconds();
//    var str=add(h)+":"+add(m)+":"+add(s);
//    return str;
//}
//当时间是一位数时在其前面加0
function add(num){
    if(num>9){
        return num;
    }else{
        return "0"+num;
    }
}
//首页计时器结束
