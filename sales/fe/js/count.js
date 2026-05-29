
//ver.1.03

//=========================================================================
//
//			各機能の有効化、無効化の設定
//
//=========================================================================
//
// 説明：　使用する機能に対応する数字を「1」に、使用しない機能に対応する
//　　　　 数字を「0」にしてください。
//
//	   ※数字は必ず半角文字で記入してください。

 oto_enabled  = 0;	// ワンタイムオファー
 cdt_enabled  = 0;	// カウントダウンタイマー
 cdl_enabled  = 1;	// カウントダウンタイマー(相対指定)
 lmo_enabled  = 0;	// リミテッドオファー
 exp_enabled  = 0;	// イグジットポップ
 gls_enabled  = 0;	// ゴールページ設定
 glc_enabled  = 0;	// ゴールページ到達チェック・転送


// ※以下の詳細設定項目は、使用する機能のみ設定を行ってください。未使用の
//   機能に関する設定項目は無視されるので、変更は必要ありません。

//=========================================================================
//
//			ワンタイムオファーの設定
//
//=========================================================================
//
// 説明：　ワンタイムオファーを使用する場合は、以下の項目を変更してください。
//         ワンタイムオファーはカウントダウンタイマーやリミテッドオファーと
//         同時に使用することはできません。

 oto_keyname  = '120320';	      // サイト識別ID。サイト毎に割り当てる。
 oto_location = '';       // 2回目以降のアクセス転送先。


//=========================================================================
//
//			カウントダウンタイマーの設定
//
//=========================================================================
//
// 説明：　カウントダウンタイマーを使用する場合は、以下の項目を変更して
//         ください。1/1000秒単位の表示を無くしたい場合は、「cdt_msecon」の
//         項目を「0」にしてください。（表示したい場合は「1」にします。）

 cdt_limit    = '2016/12/31 19:0:00'; // ページを表示する最終期日
 cdt_refresh  = 100;		      // カウンターの更新間隔（1/1000秒単位）
 cdt_msecon   = 1;		      // 1/1000秒単位のカウンタの表示有無
 cdt_message  = '残りあと ';              // カウントダウン中のメッセージ
 cdt_timeout  = '募集停止致しました。';     // カウントダウン終了時のメッセージ
 cdt_waittime = 1;		      // カウントダウン終了時の転送待ち秒数
 cdt_location = ''; // カウントダウン終了時の転送先（../fin）等urlをいれてください。空の場合は文言表示になります。


//=========================================================================
//
// 			カウントダウンタイマーの設定(相対指定)
//
//=========================================================================
//
// 説明：　カウントダウンタイマーを使用する場合は、以下の項目を変更して
//          ください。1/1000秒単位の表示を無くしたい場合は、「cdt_msecon」の
//          項目を「0」にしてください。（表示したい場合は「1」にします。）

  cdl_keyname  = 'countd93849260127'; // サイト識別ID。サイト毎に割り当てる。
  cdl_expireday   = '4';   			// ●日後までのカウントダウン
  cdl_expierehour = '24'; 			// ▲時までのカウントダウン(24H)
  cdl_refresh  = 100;		      // カウンターの更新間隔（1/1000秒単位）
  cdl_msecon   = 0;		      // 1/1000秒単位のカウンタの表示有無
  cdl_message  = '';              // カウントダウン中のメッセージ
  cdl_timeout  = '募集終了準備中です';     // カウントダウン終了時のメッセージ
  cdl_waittime = 1;		      // カウントダウン終了時の転送待ち秒数
  cdl_location = '../fin/'; // カウントダウン終了時の転送先（../fin）等urlをいれてください。空の場合は文言表示になります。


//=========================================================================
//
//			リミテッドオファーの設定
//
//=========================================================================
//
// 説明：　リミテッドオファーを使用する場合は、以下の項目を変更してください。
//         1/1000秒単位の表示を無くしたい場合は、「lmo_msecon」の項目を「0」
//         にしてください。（表示したい場合は「1」にします。）

 lmo_keyname  = 'counter-24h-hc-n';             // サイト識別ID。サイト毎に割り当てる。
 lmo_expire   = 24;		      // ページ表示期間（単位：時間）
 lmo_refresh  = 100;		      // カウンターの更新間隔（単位：1/1000秒）
 lmo_msecon   = 0;		      // 1/1000秒単位のカウンタの表示有無
 lmo_message  = '<span class="ctext">終了まで残り… </span>';              // カウントダウン中のメッセージ
 lmo_timeout  = '終了準備中です';     // カウントダウン終了時のメッセージ
 lmo_waittime = 1;		      // カウントダウン終了時の転送待ち秒数
 lmo_location = ''; // カウントダウン終了時の転送先（../fin）等urlをいれてください。空の場合は文言表示になります。


//=========================================================================
//
//			イグジットポップの設定
//
//=========================================================================
//
// 説明：　イグジットポップを使用する場合は、以下の項目を変更してください。
//         表示するメッセージは続けて記述する必要があるので、入力例のように
//         途中で改行せずに記述してください。実際にメッセージを表示する時に
//         改行したい位置には半角で「\n」と記述してください。

 exp_location = 'http://www.msn.co.jp/'; // 転送先のページ
 exp_message  = "タイトルメッセージを表示\n\n改行するには半角文字で「￥ｎ」と記述します。\nブラウザの種類によって表示されるボタンの名称が異なるので注意してください。\n\nこの部分は適切なメッセージに変更してから使用してください。";


//=========================================================================
//
//			ゴールページの設定
//
//=========================================================================
//
// 説明：　ゴールページの機能を利用する場合に設定してください。ページの
//         識別IDは通常、変更する必要はありません。同一サイト内の、複数の
//         ページでこの機能を利用する場合に、サイト毎に変更してください。

 glc_keyname  = '123983';             // サイト識別ID。サイト毎に割り当てる。
 glc_location = 'index4.html';        // ゴールページのアドレス

//=========================================================================
//
//		カウンター用画像の保存フォルダ設定
//
//=========================================================================
//
// 説明：　カウンターで使用する画像の保存フォルダを別の場所にしたい場合に
//         変更してください。（※通常、変更する必要はありません。）

 cmo_imgpath  = '../img/';    // カウンタ画像の保存フォルダ
 //cmo_imgpath  = '../counterImg/';    // カウンタ画像の保存フォルダ

/**
 * author Remy Sharp
 * url http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 */
(function ($) {
    function getViewportHeight() {
        var height = window.innerHeight; // Safari, Opera
        // if this is correct then return it. iPad has compat Mode, so will
        // go into check clientHeight (which has the wrong value).
        if (height) { return height; }
        var mode = document.compatMode;

        if ( (mode || !$.support.boxModel) ) { // IE, Gecko
            height = (mode == 'CSS1Compat') ?
            document.documentElement.clientHeight : // Standards
            document.body.clientHeight; // Quirks
        }

        return height;
    }

    function offsetTop(debug)
    {
        // Manually calculate offset rather than using jQuery's offset
        // This works-around iOS < 4 on iPad giving incorrect value
        // cf http://bugs.jquery.com/ticket/6446#comment:9
        var curtop = 0;
        for (var obj = debug; obj !== null; obj = obj.offsetParent)
        {
            curtop += obj.offsetTop;
        }
        return curtop;
    }

    function check_inview()
    {
        var vpH = getViewportHeight(),
            scrolltop = (window.pageYOffset ?
                window.pageYOffset :
                document.documentElement.scrollTop ?
                document.documentElement.scrollTop :
                document.body.scrollTop),
            elems = [];

        // naughty, but this is how it knows which elements to check for
        $.each($.cache, function () {
            if (this.events && this.events.inview) {
                elems.push(this.handle.elem);
            }
        });

        if (elems.length) {
            $(elems).each(function () {
                var $el = $(this),
                    top = offsetTop(this),
                    height = $el.height(),
                    inview = $el.data('inview') || false;

                if (scrolltop > (top + height) || scrolltop + vpH < top) {
                    if (inview) {
                        $el.data('inview', false);
                        $el.trigger('inview', [ false ]);
                    }
                } else if (scrolltop < (top + height)) {
                    var visPart = ( scrolltop > top ? 'bottom' : (scrolltop + vpH) < (top + height) ? 'top' : 'both' );
                    if (!inview || inview !== visPart) {
                      $el.data('inview', visPart);
                      $el.trigger('inview', [ true, visPart]);
                    }
                }
            });
        }
    }

    $(window).scroll(check_inview);
    $(window).resize(check_inview);
    $(window).click(check_inview);

    // kick the event to pick up any elements already in view.
    // note however, this only works if the plugin is included after the elements are bound to 'inview'
    $(function () {
        check_inview();
    });
})(jQuery);



// 各機能共通の初期化
cmo_Preload();
cmo_Cookie();

// CountDownTimerの初期化

cdt_limit = new Date( cdt_limit ).getTime();
setTimeout("CountDownTimer()" , 100);

setTimeout("CountDownRelative()" , 100);

// Limited Offerの初期化
setTimeout("LimitedOffer()" , 100);

// Exit Popの初期化
exp_flag     = 0;
if ( exp_enabled > 0 ) {
	window.onbeforeunload = exp_doit;
}

// Count Down Timerの処理

function CountDownTimer(){

	if ( cdt_enabled == 0 ) {	// 無効ならすぐに終了
		return;
	}

	var result = cmo_CountDown( cdt_limit, cdt_message, cdt_timeout, cdt_msecon );

	if ( result[0] > 0){ // 残り時間の評価
		setTimeout("CountDownTimer()" , cdt_refresh);
	} else {
		if ( cdt_location != "" ) { // URLが指定されていたら指定秒待ってからリダイレクト
			setTimeout("cmo_Redirect(cdt_location)" , cdt_waittime * 1000 );
		}
	}

	cmo_Output( result[1], result[2], "CountDownTimer" );
}

function CountDownRelative(){

	if ( cdl_enabled == 0 ) {	// 無効ならすぐに終了
		return;
	}

	var result = cmo_CountDown( cdl_limit, cdl_message, cdl_timeout, cdl_msecon );

	if ( result[0] > 0){ // 残り時間の評価
		setTimeout("CountDownRelative()" , cdl_refresh);
	} else {
		if ( cdl_location != "" ) { // URLが指定されていたら指定秒待ってからリダイレクト
			setTimeout("cmo_Redirect(cdl_location)" , cdl_waittime * 1000 );
		}
	}

	cmo_Output( result[1], result[2], "CountDownRelative" );
}

// Limited Offerの処理

function LimitedOffer() {

	if ( lmo_enabled == 0 ) {	// 無効ならすぐに終了
		return;
	}

	var result = cmo_CountDown( lmo_limit, lmo_message, lmo_timeout, lmo_msecon );

	if ( result[0] > 0 ){ // 残り時間の評価
		setTimeout("LimitedOffer()" , lmo_refresh);
	} else {
		if ( lmo_location != "" ) { // URLが指定されていたら指定秒待ってからリダイレクト
			setTimeout("cmo_Redirect(lmo_location)" , lmo_waittime * 1000 );
		}
	}

	cmo_Output( result[1], result[2], "LimitedOffer" );
}


// innerHTMLを書き換えてタイマーを表示

function cmo_Output( cmo_text, cmo_image, cmo_classname ){

	// タグを書き換える
	var TargetTags=document.getElementsByTagName("span");
	for(var i=0;i<TargetTags.length;i++){
		// テキスト
		if(TargetTags[i].className== cmo_classname) {
			TargetTags[i].innerHTML= cmo_text;
		}
		// 画像
		if(TargetTags[i].className== ( cmo_classname + "Img" ) ) {
			TargetTags[i].innerHTML= cmo_image;
		}
	}
}

// 別のページに飛ばす

function cmo_Redirect( cmo_location ){
	if ( (cdt_location != "") || (cdl_location != "") || (lmo_location != "")) {
		history.forward(1);		  // 履歴を削除
		location.replace( cmo_location ); // 時間切れになったら別ページに移動
	}
}

// タイマー画像の先読み

function cmo_Preload() {

	cmo_Image = new Array(14);

	for(i=0;i<14;i++) {
	        cmo_Image[i] = new Image();
	        cmo_Image[i].src = cmo_imgpath + i + ".gif";
	}
	cmo_Image[10].src = cmo_imgpath + "day.gif";
	cmo_Image[11].src = cmo_imgpath + "hour.gif";
	cmo_Image[12].src = cmo_imgpath + "min.gif";
	cmo_Image[13].src = cmo_imgpath + "sec.gif";
}

// Cookieの調査と書き出し

function cmo_Cookie() {

	var oto_flag = 0;
	var lmo_flag = 0;
	var glc_flag = 0;
	var cdl_flag = 0;

	var pairs,pair;

	var regexp = new RegExp(" ", "g");

	if (document.cookie) {
		pairs = document.cookie.split(";");
		for (i = 0; i < pairs.length; i++) {
			pair = pairs[i].split("=");
			pair[0] = pair[0].replace(regexp, ""); // 半角スペースを除去
			if ( pair[0] == ( "oto" + oto_keyname ) ) {
				if ( unescape(pair[1]) == "u37s2Dkj2" ) {
					oto_flag = 1;
				}
			}
			if ( pair[0] == ( "lmo" + lmo_keyname ) ) {
				lmo_flag = 1;
				lmo_limit= unescape(pair[1]);
			}
			if ( pair[0] == ( "cdl" + cdl_keyname ) ) {
				cdl_flag = 1;
				cdl_limit= unescape(pair[1]);
			}
			if ( pair[0] == ( "glc" + glc_keyname ) ) {
				if ( unescape(pair[1]) == "3JhW9yd2lx" ) {
					glc_flag = 1;
				}
			}
	   	}
	}

	pairs = "";

	if (( glc_enabled == 1) && ( glc_flag == 1 ) ) {
		cmo_Redirect( glc_location ); // 別ページに移動
		return;
	}

	if ( gls_enabled == 1 ) {
		pairs = "glc" + glc_keyname + "=" + escape( "3JhW9yd2lx" ) + "; ";
	}

	if ( oto_enabled == 1 ) {
		if ( oto_flag == 1 ) {
			cmo_Redirect( oto_location ); // 別ページに移動
		} else {
			pairs = pairs + "oto" + oto_keyname + "=" + escape( "u37s2Dkj2" ) + "; ";
		}
	}

	if ( ( lmo_enabled == 1 ) && ( lmo_flag == 0 ) ) {

		var today	= new Date();					// 現在時刻
		var offset = (today.getTimezoneOffset() + 540) / 60;
		lmo_limit = (today.getTime() + ( (lmo_expire + offset)* 3600000 ));

		pairs = pairs + "lmo" + lmo_keyname + "=" + lmo_limit + ";";
	}

	if ( ( cdl_enabled == 1 ) && ( cdl_flag == 0 ) ) {
		var today = new Date();
		var target = new Date(cdl_expireday * 86400000);

		var offHour = cdl_expierehour - today.getHours();
		var offMin = 60 - today.getMinutes();
		var offSec = 60 - today.getSeconds();
		offHour--;	// 調整分
		offMin--;	// 調整分

		cdl_limit = today.getTime() + (cdl_expireday * 86400000) + (offHour * 3600000) + offMin * 60000 + offSec * 1000;
		pairs = pairs + "cdl" + cdl_keyname + "=" + cdl_limit + ";";
	}

	if ( pairs != "" ) {
		document.cookie= pairs + " expires=Tue, 31-Dec-2030 23:59:59 GMT;" ;
	}
}

// タイマー生成

function cmo_CountDown( cmo_limit, cmo_message, cmo_timeout, cmo_msecon ){

	/* 変数定義 */

	var today	= new Date();					// 現在時刻
	var utc = new Date( today.getUTCFullYear(),	// UTC時刻
						today.getUTCMonth(),
						today.getUTCDate(),
						today.getUTCHours(),
						today.getUTCMinutes(),
						today.getUTCSeconds(),
						today.getUTCMilliseconds());

	var l_time 	= Math.floor( cmo_limit - (utc.getTime() + (60000 * 60 * 9)) );

	var cmo_text,cmo_image;
	var result = new Array(3);

	if ( l_time > 0){ // 残り時間の評価

		var l_day  = Math.floor( l_time / 86400000 );
		var l_hour = Math.floor( l_time /  3600000 ) % 24;
		var l_min  = Math.floor( l_time /    60000 ) % 60;
		var l_sec  = Math.floor( l_time /     1000 ) % 60;
		var l_msec = l_time % 1000;

		l_day =( "0"  + l_day ).slice( -2 );
		l_hour =( "0"  + l_hour ).slice( -2 );
		l_min  =( "0"  + l_min  ).slice( -2 );
		l_sec  =( "0"  + l_sec  ).slice( -2 );
		l_msec =( "00" + l_msec ).slice( -3 );

		// 文字列表示用データ生成
		cmo_text = cmo_message + l_day + "日 " + l_hour + "時間 " + l_min + "分 " + l_sec + "秒 "
		if ( cmo_msecon > 0 ) { // cmo_mseconが0ならミリ秒単位の表示を抑制する
			cmo_text = cmo_text + l_msec;
		}

		// 画像表示用データ生成
		var imgt_s = '<img src="' + cmo_imgpath;
		var imgt_e = '.gif">';

		// cmo_message デフォルト（テキスト）
		cmo_image = cmo_message;

			// cmo_message を画像で表示する場合
			//		cmo_image = '';
			//		cmo_image = cmo_image + imgt_s + "rest" + imgt_e;

		// 日
		cmo_image = cmo_image + imgt_s + l_day.substring(0,1) + imgt_e;
		cmo_image = cmo_image + imgt_s + l_day.substring(1,2) + imgt_e;
		cmo_image = cmo_image + imgt_s + "day" + imgt_e;
		// 時
		cmo_image = cmo_image + imgt_s + l_hour.substring(0,1) + imgt_e;
		cmo_image = cmo_image + imgt_s + l_hour.substring(1,2) + imgt_e;
		cmo_image = cmo_image + imgt_s + "hour" + imgt_e;
		// 分
		cmo_image = cmo_image + imgt_s + l_min.substring(0,1) + imgt_e;
		cmo_image = cmo_image + imgt_s + l_min.substring(1,2) + imgt_e;
		cmo_image = cmo_image + imgt_s + "min" + imgt_e;
		// 秒
		cmo_image = cmo_image + imgt_s + l_sec.substring(0,1) + imgt_e;
		cmo_image = cmo_image + imgt_s + l_sec.substring(1,2) + imgt_e;
		cmo_image = cmo_image + imgt_s + "sec" + imgt_e;
		// ミリ秒
		if ( cmo_msecon > 0 ) { // cdt_mseconが0ならミリ秒単位の表示を抑制する
			cmo_image = cmo_image + imgt_s + l_msec.substring(0,1) + imgt_e;
			cmo_image = cmo_image + imgt_s + l_msec.substring(1,2) + imgt_e;
			cmo_image = cmo_image + imgt_s + l_msec.substring(2,3) + imgt_e;
		}

	} else {
		cmo_text = cmo_timeout;
		cmo_image= cmo_timeout;
	}

	result[0] = l_time;
	result[1] = cmo_text;
	result[2] = cmo_image;

	return( result );
}

// Exit Popupの表示

function exp_doit() {
	if( exp_flag == 0 ) {
		exp_flag = 1;
		document.location=exp_location;
		return( exp_message );
	}
}
