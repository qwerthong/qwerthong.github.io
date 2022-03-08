<%@ page contentType="text/html; charset=utf-8"%>
<%@ page import="java.util.Date" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page import="java.security.MessageDigest" %>
<%@ page import="org.apache.commons.codec.binary.Hex" %>
<%
/*
*******************************************************
* <결제요청 파라미터>
* 결제시 Form 에 보내는 결제요청 파라미터입니다.
*******************************************************
*/
String merchantKey 		= "";			                // 가맹점 고유 검증키
String merchantID 		= ""; 			                // 가맹점아이디
String goodsNm	 		= "KISPG";	 					// 결제상품명
String goodsAmt			= "1004"; 						// 결제상품금액	
String ordNm 			= "KISPG"; 						// 구매자명
String ordTel 			= "01000000000"; 				// 구매자연락처
String ordEmail 		= "kispg@kispg.com";			// 구매자메일주소
String ordNo 			= "kispg1234567890"; 			// 상품주문번호	
String returnURL 		= "./payResultSample.jsp";      // 결과페이지(절대경로)
/*
*******************************************************
* <해쉬암호화> (수정하지 마세요)
* SHA-256 해쉬암호화는 거래 위변조를 막기위한 방법입니다. 
*******************************************************
*/
DataEncrypt sha256Enc 	= new DataEncrypt();
String ediDate 			= getyyyyMMddHHmmss();												// 전문 생성일시
String encData	 		= sha256Enc.encrypt(merchantID + ediDate + goodsAmt + merchantKey);	// Hash 값
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="Cache-Control" content="no-cache" />
<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, maximum-scale=3.0">
<title>KISPG  인증 페이지</title>
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>
<style>
#mask {position:absolute;z-index:9000;background-color:#000;display:none;left:0;top:0;width:100%;height:100%;}
.window {display: none;position:fixed;top:0%;width:100%;height:100%;z-index:10000;}
.cont{width:100%;height:100%;}
</style>
</head>
<body>
<script type="text/javascript">

// 운영
//var url = "https://api.kispg.co.kr";
// 테스트
var url = "https://testapi.kispg.co.kr";


$(document).ready(function() {

	//결제창 요청시 실행됩니다.
	$("#payBtn").click(function (){
			
			//Calculate mask size
			var maskHeight = $(document).height();
			var maskWidth = $(document).width();
				
			$("#mask").fadeIn(0);
			$("#mask").fadeTo("slow", 0.6);        
			
			document.payInit.action = url + "/v2/auth";
			document.payInit.submit();
			$(".window").show();
	});
	
});

const ajax = getXMLHTTPRequest();

function getXMLHTTPRequest() {
	let request = false;
	try { request = new XMLHttpRequest(); }
	catch(err01) {
		try { request = new ActiveXObject("Msxml2.XMLHTTP"); }
		catch(err02) { 
			try { request = new ActiveXObject("Microsoft.XMLHTTP"); }
			catch(err03) { request = false; }
		}
	}
	return request;
}

//결제창 종료 함수 <<수정 불가능>>
window.addEventListener("message", returnData, false);

//결제창 종료 함수 <<'returnData' 수정 불가능>>
function returnData (e){
	var frm = document.payInit;

	console.log("e.data : " + JSON.stringify(e.data));

    if (e.data.resultCode == '0000'){
		receive_result(e.data.data, frm.returnUrl.value, frm.charSet.value);
    }
    else if(e.data.resultCode == 'XXXX'){ //인증실패시
        console.log("[e.data.resultCode : " + e.data.resultCode + "]");

		if(checkPlatform(window.navigator.userAgent) == "pc"){ //PC
			var resData = e.data.data;

            alert("[RESULTCD : " + resData.resultCd + "] / [RESULT MSG : " + resData.resultMsg + "]");			
		}
		else{ //MOBILE
			receive_result(e.data.data, frm.returnUrl.value, frm.charSet.value);
		}
	}

	$("#mask, .window").hide();
	$("#pay_frame").attr("src", "");
}

function receive_result(data, url, charSet){
	//console.log(data);
	//create_alert('알림','CODE : ' + data.resultCd + '<br>MSG : ' + data.resultMsg);

	var form = document.createElement("form");
	document.getElementsByTagName('body')[0].appendChild(form);
	for(var key in data){
		var input = document.createElement("input");
		input.name = key;
		input.type = "hidden";
		input.value = data[key];
		form.appendChild(input);
	}
	form.acceptCharset = charSet;
	form.action = url;
	form.method = 'post';
	
	console.log("url : " + url);

	form.submit();
}

// 결제창 종료 confirm창 팝업 함수
function popupConfirmWindow(){
	if(checkPlatform(window.navigator.userAgent) == "mobile"){
		$("#pay_frame").contents().find('.msgpop').show();
	}
}

// 결제창 종료 함수 
function closePaymentWindow(){
	if(checkPlatform(window.navigator.userAgent) == "mobile"){
		$(".pay_frame").empty();
		$(".window").hide();
		$("#mask").hide();
	}
}

function checkPlatform(ua) {
	if(ua === undefined) {
		ua = window.navigator.userAgent;
	}

	ua = ua.toLowerCase();
	var platform = {};
	var matched = {};
	var userPlatform = "pc";
	var platform_match = /(ipad)/.exec(ua) || /(ipod)/.exec(ua)
		|| /(windows phone)/.exec(ua) || /(iphone)/.exec(ua)
		|| /(kindle)/.exec(ua) || /(silk)/.exec(ua) || /(android)/.exec(ua)
		|| /(win)/.exec(ua) || /(mac)/.exec(ua) || /(linux)/.exec(ua)
		|| /(cros)/.exec(ua) || /(playbook)/.exec(ua)
		|| /(bb)/.exec(ua) || /(blackberry)/.exec(ua)
		|| [];

	matched.platform = platform_match[0] || "";

	if(matched.platform) {
		platform[matched.platform] = true;
	}

	if(platform.android || platform.bb || platform.blackberry
			|| platform.ipad || platform.iphone
			|| platform.ipod || platform.kindle
			|| platform.playbook || platform.silk
			|| platform["windows phone"]) {
		userPlatform = "mobile";
	}

	if(platform.cros || platform.mac || platform.linux || platform.win) {
		userPlatform = "pc";
	}

	return userPlatform;
}
</script>
<div style="text-align:center;">
<div id="sampleInput" class="paypop_con" style="padding:20px 15px 35px 15px;display: inline-block;float: none;">
<p class="square_tit mt0" style="text-align:left;"><strong>결제정보</strong></p>
<form name="payInit" method="post" target="pay_frame">
	<table class="tbl_sty02">
		<tr>
			<td>결제수단</td>
			<td><input type="text" name="payMethod" value="card"></td>
		</tr>
		<tr>
			<td>결제타입</td>
			<td><input type="text" name="trxCd" value="0"></td><!-- 일반(0)/에스크로(1) --> 
		</tr>
		<tr>
			<td>가맹점ID</td>
			<td><input type="text" name="mid" value="<%=merchantID%>"></td>
		</tr>
		<tr>
			<td>상품명</td>
			<td><input type="text" name="goodsNm" value="<%=goodsNm%>"></td>
		</tr>
		<tr>
			<td>주문번호</td>
			<td><input type="text" name="ordNo" value="<%=ordNo%>"></td>
		</tr>
		<tr>
			<td>결제금액</td>
			<td><input type="text" name="goodsAmt" value="<%=goodsAmt%>"></td>
		</tr>
		<tr>
			<td>구매자명</td>
			<td><input type="text" name="ordNm" value="<%=ordNm%>"></td>
		</tr>
		<tr>
			<td>구매자연락처</td>
			<td><input type="text" name="ordTel" value="<%=ordTel%>"></td>
		</tr>
		<tr>
			<td>구매자이메일</td>
			<td><input type="text" name="ordEmail" value="<%=ordEmail%>"></td>
		</tr>
		<tr>
			<td>returnUrl</td>
			<td><input type="text" name="returnUrl" value="<%=returnURL%>"></td>
		</tr>
	</table>
	<!-- 옵션 --> 
	<input type="hidden" name="userIp"	value="0:0:0:0:0:0:0:1">
		
	<input type="hidden" name="mbsUsrId" value="user1234">
	<input type="hidden" name="ordGuardEmail" value="">
	<input type="hidden" name="rcvrAddr" value="서울특별시">
	<input type="hidden" name="rcvrPost" value="00100">
	<input type="hidden" name="mbsIp" value="127.0.0.1">
	<input type="hidden" name="mbsReserved" value="MallReserved"><!-- 상점 예약필드 -->
	<input type="hidden" name="rcvrMsg" value="rcvrMsg">
	
	<input type="hidden" name="goodsSplAmt" value="0">
	<input type="hidden" name="goodsVat" value="0">
	<input type="hidden" name="goodsSvsAmt" value="0">
	<input type="hidden" name="payReqType" value="1">
	
	<input type="hidden" name="model" value="WEB">
	<input type="hidden" name="charSet" value="UTF-8">
	<!-- <input type="hidden" name="period" value="별도 제공기간없음"> -->
	<!-- <input type="hidden" name="billHpFlg" value="0"> -->
	<!-- <input type="hidden" name="model" value="MOB"> -->
	<!-- <input type="hidden" name="channel" value="0001"> -->
	
	<!-- 변경 불가능 -->
	<input type="hidden" name="ediDate" value="<%=ediDate%>"><!-- 전문 생성일시 -->
	<input type="hidden" name="encData" value="<%=encData%>"><!-- 해쉬값 -->

</form>	
	<a href="#;" id="payBtn" class="btn_sty01 bg01" style="margin:15px;">결제하기</a>
	</div>
</div>
<div id="mask"></div>
<div class="window">
	<div class="cont">
		<iframe id="pay_frame" name="pay_frame" style="width:100%; height:100%;" src="" marginwidth="0" marginheight="0" frameborder="no" scrolling="no"></iframe>
	</div>
</div>
</body>
</html>
<%!
public final synchronized String getyyyyMMddHHmmss(){
	SimpleDateFormat yyyyMMddHHmmss = new SimpleDateFormat("yyyyMMddHHmmss");
	return yyyyMMddHHmmss.format(new Date());
}
// SHA-256 형식으로 암호화
public class DataEncrypt{
	MessageDigest md;
	String strSRCData = "";
	String strENCData = "";
	String strOUTData = "";
	
	public DataEncrypt(){ }
	public String encrypt(String strData){
		String passACL = null;
		MessageDigest md = null;
		try{
			md = MessageDigest.getInstance("SHA-256");
			md.reset();
			md.update(strData.getBytes());
			byte[] raw = md.digest();
			passACL = encodeHex(raw);
		}catch(Exception e){
			System.out.print("암호화 에러" + e.toString());
		}
		return passACL;
	}
	
	public String encodeHex(byte [] b){
		char [] c = Hex.encodeHex(b);
		return new String(c);
	}
}
%>