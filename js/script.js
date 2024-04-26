// JavaScript Document
// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

//ふわっと動くきっかけのクラス名と動きのクラス名の設定
$('.fadeUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
　　var elemPos = $(this).offset().top+200; //要素より、50px上の
　　var scroll = $(window).scrollTop();
　　var windowHeight = $(window).height();
　　if (scroll >= elemPos - windowHeight){
　　$(this).addClass('fadeUp');
　　// 画面内に入ったらfadeInというクラス名を追記
　　}else{
　　　$(this).removeClass('fadeUp');
　　// 画面外に出たらfadeInというクラス名を外す
　　}
　　});

//関数でまとめることでこの後に違う動きを追加することが出来ます
$('.fadeDownTrigger').each(function(){ //fadeInDownTriggerというクラス名が
　　var elemPos = $(this).offset().top+200; //要素より、50px上の
　　var scroll = $(window).scrollTop();
　　var windowHeight = $(window).height();
　　if (scroll >= elemPos - windowHeight){
　　$(this).addClass('fadeDown');
　　// 画面内に入ったらfadeDownというクラス名を追記
　　}else{
　　　$(this).removeClass('fadeDown');
　　// 画面外に出たらfadeDownというクラス名を外す
　　}
　　});


}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述




// メニュー開閉制御
$("#js-hamburger").on('click', function(){ //ハンバーガーボタンが選択されたら
  $("#js-hamburger").toggleClass("-active");
  $(".header-wrap").toggleClass("-active");
	if ($("body").css("overflow") === "hidden") {
    	$("body").css({ height: "", overflow: "" });
    } else {
    	$("body").css({ height: "100%", overflow: "hidden" });
    }
});

window.addEventListener('resize', (e) => {//ウィンドウサイズが変更されたらメニューを閉じる
    $("#js-hamburger").removeClass("-active");
  $(".header-wrap").toggleClass("-active");
    $("#js-hamburger").focus();
});

$("nav ul li a").on('click', function(){ //リンクが選択されたら
	$("#js-hamburger").removeClass("-active");
  $(".header-wrap").toggleClass("-active");
    $("#js-hamburger").focus();
});

// フォーカストラップ制御
$("#js-focus-trap").focus(function () {
	if ($("#js-hamburger").hasClass("-active")) {
    	$("#js-hamburger").focus();
    }
});