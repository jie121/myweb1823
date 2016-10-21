/**
 * Created by Administrator on 2016/10/20.
 */
var index;
var songArr = [
    {
        name: "年轮",
        src: "audios/test.mp3",
        img: "img/thumb.jpg",
        person: "张碧晨"
    }, {
        name: "唐人",
        src: "audios/孙子涵 - 唐人.mp3",
        img: "img/thumb.jpg",
        person: "孙子涵"
    }, {
        name: "不要再孤单",
        src: "audios/徐佳莹 - 不要再孤单.mp3",
        img: "img/thumb.jpg",
        person: "徐佳莹"
    }, {
        name: "微微一笑很倾城",
        src: "audios/杨洋 - 微微一笑很倾城.mp3",
        img: "img/thumb.jpg",
        person: "杨洋"
    }, {
        name: "柳树下",
        src: "audios/谢和弦,徐佳莹 - 柳树下.mp3",
        img: "img/thumb.jpg",
        person: "谢和弦,徐佳莹",
    }, {
        name: "断点",
        src: "audios/张敬轩 (Hins Cheung) - 断点.mp3",
        img: "1.jpg",
        person: "张敬轩"
    },
    {
        name: "River Flows In You",
        src: "audios/이루마 - River Flows In You.mp3",
        img: "1.jpg",
        person: "이루마 "
    }, {
        name: "情非得已 (Live).mp3",
        src: "audios/庾澄庆 - 情非得已 (Live).mp3",
        img: "2.jpg",
        person: "庾澄庆"
    }, {
        name: "身骑白马.mp3",
        src: "audios/徐佳莹 - 身骑白马.mp3",
        img: "2.jpg",
        person: "徐佳莹"
    }, {
        name: "追梦赤子心 (Live)",
        src: "audios/徐歌阳 - 追梦赤子心 (Live).mp3",
        img: "1.jpg",
        person: "徐歌阳"
    }, {
        name: "陆垚知马俐",
        src: "audios/火星电台 - 陆垚知马俐.mp3",
        img: "1.jpg",
        person: "火星电台",
    }, {
        name: "悟空 (Live)",
        src: "audios/单良 - 悟空 (Live).mp3",
        img: "1.jpg",
        person: "单良"
    },{
        name: "你飞到城市另一边",
        src: "audios/好妹妹乐队 - 你飞到城市另一边.mp3",
        img: "1.jpg",
        person: "好妹妹乐队"
    },{
        name: "大王叫我来巡山",
        src: "audios/贾乃亮 - 大王叫我来巡山.mp3",
        img: "1.jpg",
        person: "贾乃亮"
    },
];
    //页面初始化要准备的工作
    function init(){
    	//动态生成歌曲列表
        for(var i=0;i<songArr.length;i++){
            var liObj=$("<li class='musicList'><aside class='order'>"+(i+1)+"</aside><article class='musicMessage'><span class='name'>"+songArr[i].name+"</span><span class='person'>"+songArr[i].person+"</span></article><span class='delete icon'>&#xe607;</span></li>");
            $("#musicUl").append(liObj);
        }
//         //给li里面的article添加点击事件
//         $("#musicList .musicMessage").click(function(){
//         	index=$("#musicList .musicMessage").index($(this));
//         	$(".title .musicName").html($(".musicMessage .name").eq(index).html());
//         	$(".title .personName").html($(".musicMessage .person").eq(index).html());
// //      	$("#fLeft img").attr("src","img/"+songArr[index].img);
//         	$("#ad source").attr("src","audios/"+songArr[index].src);
//         	$(".play").removeClass("on").addClass("off");
//         	$("#ad")[0].load();
// //      	playMusic();
// //      	currentMusic();
//         });
//         $(".title .musicName").html($(".musicMessage .name").eq(index).html());
//         $(".title .personName").html($(".musicMessage .person").eq(index).html());
// //      $("#fLeft img").attr("src",img/songArr[index].img);
    }
    

    $(function(){
        init();
        //给li里面的article添加点击事件
        $(".musicList").live("click",function(){
            index=$(".musicList").index($(this));
            $(".title .musicName").html($(".musicMessage .name").eq(index).html());
            $(".title .personName").html($(".musicMessage .person").eq(index).html());
//      	$("#fLeft img").attr("src","img/"+songArr[index].img);
            $("#ad source").attr("src","audios/"+songArr[index].src);
            $(".play").removeClass("on").addClass("off");
            $("#ad")[0].load();
//      	playMusic();
//      	currentMusic();
        });
        $(".title .musicName").html($(".musicMessage .name").eq(index).html());
        $(".title .personName").html($(".musicMessage .person").eq(index).html());
//      $("#fLeft img").attr("src",img/songArr[index].img);
    });