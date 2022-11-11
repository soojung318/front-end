var rsaPublicKey="-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDG18QXhVWgIlkmeq0IK4fWb9qt\nmI8hH8tMztFNPXqKXls0fSKd4twKVIQIsehFePY7E4BQrzx1xulYmCMiPWM9fyKC\nG8uZjNpNkhCVTKuJTT6p8m24N+m+fH35r9mQQjZn9yCM2/xdxscXixHVgJMTOmbQ\ny7kVjViLC3SxCE1O0wIDAQAB\n-----END PUBLIC KEY-----";
//checkbox 선택한 것들의 bit 합계 구하기
$.fn.checkedValue=function(){
	var sum=0;
	this.each(function(idx){if($(this).prop('checked')==false)return;sum+=Number($(this).val()||"")||0;});
	return sum;
};
//요소가 화면에 보이는지 확인
$.fn.visible=function(){
	var result;
	result=this.filter(function(){
		var visible=true;
		var target=this;
		while(true){
			if($(target).css('display')=='none' || $(target).css('visibility')=='hidden'){
				visible=false;
				break;
			}
			target=$(target).parent();
			if(target.is('body')){
				break;
			}
		}
		return visible;
	});
	return result;
};

//bit 합계로 checkbox 선택하기
$.fn.bitCheck=function(sum){
	this.each(function(idx){
		if(((Number($(this).val()||"")||0)&sum)>0){
			$(this).prop('checked',true);
		} else {
			$(this).prop('checked',false);
		}
	});
};

//get 변수 받기
var gets=getUrlVars();
function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^#&]*)/g,function(m,key,value) {vars[key] = decodeURIComponent(value).replace(/#/g,"");});
	return vars;
}

//숫자에 콤마 추가
var numberFormat = function(n,p){
	if(isNaN(n))return "-";
	n = String(n).replace(/,/g,"");
	n = Number(n);
	var re = '\\d(?=(\\d{3})+' + (p > 0 ? '\\.' : '$') + ')';
	return n.toFixed(Math.max(0, ~~p)).replace(new RegExp(re, 'g'), '$&,');
}

//소수점 자리수 확인  checkPrecision(숫자,소수점 개수)
var checkPrecision = function(num, decimals) {
	var precision=99;
	return new Number(
		new Number(
			new Number(num).toFixed(decimals)
		).toPrecision(precision)
	).toString() === new Number(num).toString();
}

//날짜 입력받아 월일(요일) 형태로 반환
function getDateDay(date){
	var time=new Date(date);
	var day;
	switch(time.getDay()){
		case 0:day="일";break;
		case 1:day="월";break;
		case 2:day="화";break;
		case 3:day="수";break;
		case 4:day="목";break;
		case 5:day="금";break;
		case 6:day="토";break;
	}
	return (time.getMonth()+1)+'월 '+time.getDate()+'일('+day+')';
}

//날짜 더하기
function addDays(date, days) {
	var result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
}
//날짜 yyyy-mm-dd로
function dateToYmd(now){
	return now.getFullYear()+'-'+String(now.getMonth()+101).substr(1)+'-'+String(now.getDate()+100).substr(1);
}
//두 요소 위치 변경
function swapElement(a, b) {
	var aNext = $('<div>').insertAfter(a);
	a.insertAfter(b);
	b.insertBefore(aNext);
	aNext.remove();
}
//배열 두 요소 위치 변경
Array.prototype.swap = function (x,y) {
	var b = this[x];
	this[x] = this[y];
	this[y] = b;
	return this;
}
//배열에 값 추가
Array.prototype.Add=function(val){
	var exists=false;
	this.forEach(function(v){
		if(v==val)exists=true;
	});
	if(!exists){
		this.push(val);
	}
}
//배열에서 값 제거
Array.prototype.Remove=function(val){
	for(var i=this.length-1;i>=0;i--){
		if(this[i]==val){
			this.splice(i,1);
		}
	}
}
//배열에서 특정 속성값을 찾아 변경하기 A.Change('CODE','11000','RURU','NEW_VALUE')
Array.prototype.Change=function(findProp,findValue,changeProp,changeValue){
	this.forEach(function(a){
		if(a[findProp]==findValue){
			a[changeProp]=changeValue;
		}
	});
}
//화면크기 조정시 차트 다시 그리기
$(window).on("resize", function() {
	if(typeof kendo=='object')kendo.resize($("div.chart"));
});

//스크롤
$('button.to-top').on('click',function(){
	$('html,body').scrollTop(0);
});
$('button.to-bottom').on('click',function(){
	$('html,body').scrollTop($(document).height());
});

//숫자를 한글로
function viewKorean(num) {
	num = String(num).replace(/,/g, '');
	if (isNaN(num)) return null;
	var hn = new Array("영", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구");
	var hj = new Array("", "만", "억", "조", "경", "해", "시", "양", "구", "간", "정", "재", "극", "항하사", "아승지", "나유타", "불가사의", "무량대수");
	var ul = new Array("영천", "영백", "영십", "영");
	var tm = new Array();
	var result = "";
	if (num.charAt(0) == "-") {
		result = "마이너스 ";
		num = num.substr(1, num.length - 1);
	}
	var loop_size = Math.ceil(num.length / 4);
	var string2 = "";
	var count,A,tm2, part_jari,C;
	for (count = num.length; count >= 0; count--){
		string2 += num.substring(count, count - 1);
	}
	num = string2;
	for (A = 0; A < loop_size; A++) {
		sum = hj[A] + " ";
		tm[A] = num.substr(A * 4, 4);
		tm2 = "";
		for (count = tm[A].length; count >= 0; count--){
			tm2 += tm[A].substring(count, count - 1);
		}
		tm[A] = tm2;
		part_jari = tm[A].length;
		for (D = 0; D < 10; D++) {
			for (B = 0; B < 10; B++) tm[A] = tm[A].replace(B, hn[B]);
		}
		if (part_jari == 4) tm[A] = tm[A].charAt(0) + "천" + tm[A].charAt(1) + "백" + tm[A].charAt(2) + "십" + tm[A].charAt(3);
		else if (part_jari == 3) tm[A] = tm[A].charAt(0) + "백" + tm[A].charAt(1) + "십" + tm[A].charAt(2);
		else if (part_jari == 2) tm[A] = tm[A].charAt(0) + "십" + tm[A].charAt(1);
		else tm[A] = tm[A].charAt(0);
		for (C = 0; C < 4; C++) {
			if (tm[A].match(ul[C])) {
				part_jari--;
				tm[A] = tm[A].replace(ul[C], "");
			}
		}
		if (part_jari != 0) tm[A] += sum;
	}
	for (loop_size; loop_size > -1; loop_size--) result += tm[loop_size];
	result = result.replace("undefined", "")
	if(result==null)result="";
	return result.trim();
}

//입력값에 따른 자동 처리
$(document).on('keyup change', function (evt) {

	//자동 합계
	if($(evt.target).is('[sum-to]')){
		//<input type="text" name="R1_C1" style="width:5em" class="text-right" sum-to="R1_C4,R4_C1">
		//<input type="text" name="R1_C4" style="width:5em" class="text-right" sum-from="R1_C4">
		//<input type="text" name="R4_C1" style="width:5em" class="text-right" sum-from="R4_C1">
		//sum-to 에는 콤마로 구분해서 여러개의 대상을 지정할 수 있음
		var tos = ($(evt.target).attr('sum-to')||"").split(',');
		tos.forEach(function(to){
			to=to.trim();
			if (to== "") return;
			var sum=0;
			$('[sum-to]').each(function(){
				var subTos = ($(this).attr('sum-to')||"").split(',');
				if(subTos.indexOf(to)>=0){
					var num = Number($(this).val().replace(/,/g, ''));
					sum+=num||0;
				}
			});
			var target = $('[sum-from="' + to + '"]');
			$(target).val(sum).trigger('change');
		});
	}

	//숫자를 한글로 자동 변경
	if($(evt.target).is('[num-to-kor-from]')){
		//<input type="text" name="Q3_R1_COST" style="width:5em" class="text-right" num-to-kor-from="Q3_R1_COST" num-to-kor-tail="원" num-to-kor-times="1000000">
		//<div num-to-kor-to="Q3_R1_COST" style="margin-top:4px;color:blue"></div>
		//num-to-kor-from 와 num-to-kor-to를 같은 문자로 지정해 쌍을 이루게 함
		//num-to-kor-from 쪽의 num-to-kor-head : 앞부분 추가문구
		//num-to-kor-from 쪽의 num-to-kor-tail : 뒷부분 추가문구
		//num-to-kor-from 쪽의 num-to-kor-times : 배율
		var num = Number($(evt.target).val().replace(/,/g, ''));
		if (isNaN(num)==false){
			var head = $(evt.target).attr('num-to-kor-head') || "";
			var tail = $(evt.target).attr('num-to-kor-tail') || "";
			var times = Number($(evt.target).attr('num-to-kor-times') || "1");
			var kor = viewKorean(num * times);
			var to = $(evt.target).attr('num-to-kor-from');
			if ((to || "") != ""){
				var target = $('[num-to-kor-to="' + to + '"]');
				$(target).html(head + kor + tail);
			}
		}
	}

	//숫자 콤마 포함으로 자동 변경
	if($(evt.target).is('[num-to-comma-from]')){
		//<input type="text" name="Q3_R1_COST" style="width:5em" class="text-right" num-to-comma-from="Q3_R1_COST" num-to-comma-tail="원" num-to-comma-times="1000000">
		//<div num-to-comma-to="Q3_R1_COST" style="margin-top:4px;color:blue"></div>
		//num-to-comma-from 와 num-to-comma-to를 같은 문자로 지정해 쌍을 이루게 함
		//num-to-comma-from 쪽의 num-to-comma-head : 앞부분 추가문구
		//num-to-comma-from 쪽의 num-to-comma-tail : 뒷부분 추가문구
		//num-to-comma-from 쪽의 num-to-comma-times : 배율
		var num = Number($(evt.target).val().replace(/,/g, ''));
		if (isNaN(num)==false){
			var head = $(evt.target).attr('num-to-comma-head') || "";
			var tail = $(evt.target).attr('num-to-comma-tail') || "";
			var times = Number($(evt.target).attr('num-to-comma-times') || "1");
			var kor = numberFormat(num * times);
			var to = $(evt.target).attr('num-to-comma-from');
			if ((to || "") != ""){
				var target = $('[num-to-comma-to="' + to + '"]');
				$(target).html(head + kor + tail);
			}
		}
	}

	//숫자만 입력되어야 하는 칸
	if($(evt.target).hasClass('num-only')){
		//input에 class="num-only"
		var val=$(evt.target).val().trim();
		var newVal=val.replace(/[^0-9\.\-]/g,'');
		if(val!=newVal) {
			$(evt.target).val(newVal).trigger('change');
		}
	}

});



//ajax 요청에 TOKEN을 항상 추가
$.ajaxSetup({
	data:{dummy:1}
	// data:{dummy:1,REFRESH:'TRUE'}
	,beforeSend:function(jqxhr,options){
		if(sessionStorage.TOKEN)options.data+="&TOKEN="+sessionStorage.TOKEN;
		if(sessionStorage.JOIN_TOKEN)options.data+="&JOIN_TOKEN="+sessionStorage.JOIN_TOKEN;
	}
});

//Toast 보이기
function Toast(msg){
	var toast = new iqwerty.toast.Toast();
	toast
	.setText(msg)
	.setDuration(3000)
	.stylize({
		background: '#1f8dd6',
		color: 'white'
	})
	.show();
}

//Object 값들을 태그에 넣기
$.fn.SetData=function(obj){
	this.each(function(idx){
		var keys=Object.keys(obj);
		for(var i=0;i<keys.length;i++){
			var key = keys[i];
			var value = obj[key];
			if(typeof obj[key]!='object'){
				$(this).attr('data-' + key, value);
			}
		}
	});
}

//태그에서 값 꺼내기
$.fn.GetData=function(key){
	return $(this).attr('data-'+key);
}

//배열 정렬
Array.prototype.Random=function(type){

	//null이면 그대로 반환
	if(type==null)return this;

	var len=this.length;
	var headCount,i;
	var result=[];
	//문자로 지정된 경우
	if(typeof type == "string"){
		//공백이면 원본 그대로 반환
		if(type==""){
			return this;
		}
		//모두 섞기
		if(type=="ALL" || type=="TRUE"){
			headCount=len;
		} else if(!isNaN(type) && Number(type)<0){
			//뒤에서 몇개 빼고 섞기
			headCount=len+Number(type);
		}
		if(headCount<0)headCount=0;
		//앞부분 섞을 곳 넣기
		var tempSeqAry=[];
		for(i=0;i<headCount;i++){
			tempSeqAry.push(i);
		}
		while(tempSeqAry.length>0){
			var rnd=Math.floor(Math.random()*tempSeqAry.length);
			result.push(this[tempSeqAry[rnd]]);
			tempSeqAry.splice(rnd,1);
		}
		//뒷부분 안섞을 곳 넣기
		for(i=headCount;i<len;i++){
			result.push(this[i]);
		}

	}
	return result;
}

//Textarea,Input 커서 위치에 값 넣기
HTMLInputElement.prototype.insertAtCaret = HTMLTextAreaElement.prototype.insertAtCaret = function (text) {
  text = text || '';
  if (document.selection) {
    // IE
    this.focus();
    var sel = document.selection.createRange();
    sel.text = text;
  } else if (this.selectionStart || this.selectionStart === 0) {
    // Others
    var startPos = this.selectionStart;
    var endPos = this.selectionEnd;
    this.value = this.value.substring(0, startPos) +
      text +
      this.value.substring(endPos, this.value.length);
    this.selectionStart = startPos + text.length;
    this.selectionEnd = startPos + text.length;
  } else {
    this.value += text;
  }
};

//grid에서 줄당 보기수를 입력받아 class로 반환
function numInRowToGrid(num){
	if(num=="1")return "pure-u-1";
	if(num=="2")return "pure-u-1 u-md-1-2";
	if(num=="3")return "pure-u-1-2 u-md-1-3";
	if(num=="4")return "pure-u-1-2 u-md-1-4";
	if(num=="5")return "pure-u-1-3 u-md-1-5";
	if(num=="6")return "pure-u-1-3 u-md-1-6";
	if(num=="7")return "pure-u-1-4 u-md-1-8";
	if(num=="8")return "pure-u-1-4 u-md-1-8";
}

//고급 섞기
Array.prototype.Rnd=function(type,numColumn){
	var srcArray=this;
	if(type==null)type="";
	//규칙 없으면 그냥 반환
	if(type=="")return this;
	//개수 적어도 그냥 반환
	if(this.length<2)return this;

	var array=this.map(function(a){return a[numColumn]});

	//따옴표 제거
	type=type.replace(/"/g,'');

	//입력받은 규칙을 콤마 형태로 변환
	type=randomTypeToComma(array,type);

	var reg=/[\(\[{][a-zA-Z_0-9,]+[\)\]}]/g;
	var groups={};
	var groupNum=1;
	var newType;
	//작은 분류부터 그룹으로 묶음
	do{
		newType=type.replace(reg,function(match){
			var groupName='_GROUP_'+groupNum;
			groups[groupName]=match;
			groupNum++;
			return groupName;
		});
		if(type==newType)break;
		type=newType;
	}while(1);
	//역순으로(큰 분류부터) 랜덤 적용. _GROUP_15 등이 _GROUP_1 에 의해 치환되지 않을까 잠시 걱정했지만 큰 수부터 역순으로 처리되므로 괜춘
	groupNum--;
	while(groupNum>=1){
		newType=newType.replace('_GROUP_'+groupNum,randomize(groups['_GROUP_'+groupNum]));
		groupNum--;
	}
	var newArray=[];
	var srcArrayUsedIndex={};	//동일한 요소가 반복 사용되는 것을 방지
	newType.split(',').forEach(function(k){
		for(var i=0;i<srcArray.length;i++){
			if(srcArray[i][numColumn]==k){
				if(srcArrayUsedIndex[k]==true)continue;
				srcArrayUsedIndex[k]=true;
				newArray.push(srcArray[i]);
				continue;
			}
		}
	});
	//srcArray에는 있는데 입력받은 SEED에 없어서 추가되지 못한 것들을 뒷부분에 추가해 준다
	srcArray.forEach(function(s){
		var sNum=s[numColumn];
		var exists=false;
		for(var n=0;n<newArray.length;n++){
			if(newArray[n][numColumn]==sNum){
				exists=true;
				break;
			}
		}
		//없으면 추가
		if(!exists)newArray.push(s);
	});
	return newArray;

	//입력받은 규칙을 콤마 형태로 변환
	function randomTypeToComma(array,type){
		var i,totalLength,fixCount;
		//전체섞기
		if(["TRUE","ALL","RANDOM"].indexOf(type.toUpperCase())>=0){
			type='('+array.join(',')+')';
		} else if(type.match(/^-[0-9]+$/)!=null){
			//맨 뒤 n개만 고정하고 전체 섞기
			totalLength=array.length;
			fixCount=-Number(type.match(/^-[0-9]+$/)[0]);
			type=array.splice(totalLength-fixCount).join(',');
			type='('+array.join(',')+'),'+type;
		} else {
			//물결을 콤마로 분리 1~4 => 1,2,3,4
			type=type.replace(/([0-9]+)~([0-9]+)/g,function(match,start,end){
				start=Number(start);
				end=Number(end);
				var addnum=(start>end?-1:1);
				var ary=[];
				while(start!=(end+addnum)){
					ary.push(start);
					start+=addnum;
				}
				return ary.join(',');
			});
		}
		return type;
	}

	//그룹을 입력받아 섞음
	// (1,2,3) : 괄호 안을 섞음
	// {1,2,3} : 괄호 안을 로테이션함 (2,3,1) (3,1,2)
	// [1,2,3] : 괄호 안의 순서 고정
	function randomize(group){
		var type=group.substr(0,1);
		var array=group.substr(1,group.length-2).split(',');
		var output=[],idx;
		//완전 섞기
		if(type=='('){
			while(array.length>0){
				idx=Math.floor(array.length*Math.random());
				output.push(array[idx]);
				array.splice(idx,1);
			}
		} else if(type=='{'){
			//로테이션
			output=array.splice(Math.floor(array.length*Math.random()));
			output=output.concat(array);
		} else if(type=='['){
			//고정
			output=array;
		}
		return output.join(',');
	}

}

//시, 분 입력받아 00:00 형태로 반환
function sibunToTime(si,bun){
	si=Number(si);
	bun=Number(bun);
	si+=Math.floor(bun/60);
	bun=bun%60;
	var siStr=String(si+100).substr(1);
	var bunStr=String(bun+100).substr(1);
	return siStr+":"+bunStr;
}

//페이징
function paging(page,totalCnt,rowPerPage,wrapper,pageBtnCount){
	var ul=$('ul.pagination');
	if(wrapper!=null)ul=$(wrapper).find('ul.pagination');
	$(ul).find('li.added').remove();
	if(pageBtnCount==null)pageBtnCount=5;
	var startPage=Math.floor((page-1)/pageBtnCount)*pageBtnCount+1;
	var endPage=startPage+pageBtnCount-1;
	var maxPage=Math.floor((totalCnt-1)/rowPerPage)+1;
	if(endPage>maxPage)endPage=maxPage;
	var i;
	for(i=startPage;i<=endPage;i++){
		var li=$('<li class="page-item added"><a class="page-link" href="#"></a></li>').insertBefore($(ul).find('li.next'));
		$(li).find('a').html(i).attr('data-page',i);
		if(i==page)$(li).addClass('active');
	}
	if(startPage>1){
		$(ul).find('a.first').attr('data-page',1).show();
		$(ul).find('a.prev').attr('data-page',startPage-1).show();
	} else {
		$(ul).find('a.first').hide();
		$(ul).find('a.prev').hide();
	}
	if(endPage<maxPage){
		$(ul).find('a.next').attr('data-page',endPage+1).show();
		$(ul).find('a.last').html(maxPage).attr('data-page',maxPage).show();
	} else {
		$(ul).find('a.next').hide();
		$(ul).find('a.last').hide();
	}
	gets.PAGE=page;
	history.replaceState({}, "", "?"+$.param(gets));
}
(function(){
	$('ul.pagination').on('click','a',function(evt){
		if(typeof load=='function'){
			var page=$(this).attr('data-page');
			if(page!=null)load(page);
			gets.PAGE=page;
			history.replaceState({}, "", "?"+$.param(gets));
			evt.preventDefault();
		}
	});
})();

//b가 입력되지 않으면 0~(a-1) 중 1개 랜덤으로 정하기.
//b가 입력되면 a~b 중 1개
function GetOne(a,b){
	//0~(a-1)
	a=Number(a);
	if(b==null){
		return Math.floor(Math.random()*a);
	}
	//n~m
	b=Number(b);
	return Math.floor(Math.random()*(b-a+1))+a;
}

//선택영역 해제
function clearSelection() {
	var sel;
	if ( (sel = document.selection) && sel.empty ) {
		sel.empty();
	} else {
		if (window.getSelection) {
			window.getSelection().removeAllRanges();
		}
		var activeEl = document.activeElement;
		if (activeEl) {
			var tagName = activeEl.nodeName.toLowerCase();
			if ( tagName == "textarea" ||
				(tagName == "input" && activeEl.type == "text") ) {
				// Collapse the selection to the end
				activeEl.selectionStart = activeEl.selectionEnd;
			}
		}
	}
}

//주소창에 파라메터 적용
function SetGets(){
	history.replaceState({}, "", "?"+$.param(gets));
}

//element의 내용을 줄바꿈을 포함해 text로 가져옴
function getInnerText(el) {
	var sel, range, innerText = "";
	if (typeof document.selection != "undefined" && typeof document.body.createTextRange != "undefined") {
		range = document.body.createTextRange();
		range.moveToElementText(el);
		innerText = range.text;
	} else if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
		sel = window.getSelection();
		sel.selectAllChildren(el);
		innerText = "" + sel;
		sel.removeAllRanges();
	}
	return innerText;
}

//모달 창 닫기
$(document).on('click','button.modal-close',function(evt){
	$.modal.close();
});

//선택한 checkbox를 radio처럼 작동하게 만들기
$.fn.checkboxToRadio=function(){
	var groupName="CTR"+String(Math.random()*100000+100000).substr(1);
	this.attr('checkbox-to-radio',groupName);
};
$(document).on('click change','input[checkbox-to-radio]',function(evt){
	var checked=$(evt.target).prop('checked');
	if(!checked)return;
	$(evt.target).addClass('ctr-selected');
	var groupName=$(evt.target).attr('checkbox-to-radio');
	$('input[checkbox-to-radio="'+groupName+'"]:not(.ctr-selected)').prop('checked',false);
	$(evt.target).removeClass('ctr-selected');
});

//td 안에 radio 만 있는 경우 td.radio-td 를 클릭하면 radio가 클릭되도록 함
$(document).on('click','td.radio-td',function(evt){
	if($(this).find('input:radio').prop('checked')==false){
		if($(evt.target).is('input:radio')||$(evt.target).is('label'))return;
		if($(this).find('input:radio').hasClass('disabled'))return;
		$(this).find('input:radio').prop('checked',true).trigger('change');
	}
});

//checkbox 선택된 경우에만 inputText을 활성화시킴
//$('input[name="B5_8"]').CheckEtc('input[name="B5_8_ETC"]');
$.fn.CheckEtc=function(inputText){
	var checkEtcName=String(new Date().valueOf())+String(Math.random()*10000+10000).substr(1,4);
	$(inputText).attr('check-etc-name',checkEtcName);
	$(this).attr('check-etc-name',checkEtcName)
		.on('click change',function(){
			var checkEtcName=$(this).attr('check-etc-name');
			var targetInputText=$('input[type=text][check-etc-name="'+checkEtcName+'"]');
			if($(this).prop('checked')){
				$(targetInputText).removeAttr('disabled');
			} else {
				if($(targetInputText).val()!=""){
					$(targetInputText).val('').trigger('change');
				}
				$(targetInputText).attr('disabled','disabled');
			}
		}).trigger('change');
}

//checkbox들 중 단독선택 지정
//$('input[group-name="B6"]').CheckSingle('[name="B6_7"],[name="B6_8"]');
$.fn.CheckSingle=function(singleCheckbox){
	var checkSingleName=String(new Date().valueOf())+String(Math.random()*10000+10000).substr(1,4);
	$(singleCheckbox).addClass('check-single');
	$(this).attr('check-single-name',checkSingleName)
		.on('click change',function(){
			var isSingle=$(this).hasClass('check-single');
			var checkSingleName=$(this).attr('check-single-name');
			var checked=$(this).prop('checked');
			var check=this;
			$('[check-single-name="'+checkSingleName+'"]').each(function(){
				if(isSingle) {
					if (checked) {
						if (this == check) return;
						if ($(this).prop('checked')) {
							$(this).prop('checked', false).trigger('change');
						}
						$(this).attr('disabled', 'disabled');
						if($(this).parent().is('label')){
							$(this).parent().find('span').css('opacity',0.5);
						}
					} else {
						$(this).removeAttr('disabled');
						if($(this).parent().is('label')){
							$(this).parent().find('span').css('opacity','');
						}
					}
				} else {
					if (checked) {
						if ($(this).hasClass('check-single')) {
							if ($(this).prop('checked')) {
								$(this).prop('checked', false).trigger('change');
							}
						}
					}
				}
			});
		}).trigger('change');
}

//특정 radio나 checkbox 선택 여부에 따라 대상 radio,checkbox,text enable/disable 처리
//$('input[name="C3"]').RadioCheckSetEnable(['1','2','3'],'input[name="C4"]');//C3에서 1,2,3 고르면 C4 enable
$.fn.RadioCheckSetEnable=function(enableValues,target){
	var setDisableClass=String(new Date().valueOf())+String(Math.random()*10000+10000).substr(1,4);
	$(target).attr({'set-disable-class':setDisableClass});
	$(this).addClass("set-disable-"+setDisableClass).attr("set-disable-"+setDisableClass,JSON.stringify(enableValues))
		.on('click change',function(){
			var inp=this;
			var classes=$(this).attr('class').split(' ');
			classes.forEach(function(className){
				if(className.indexOf('set-disable-')!=0)return;
				var setDisableClass=className.replace(/set-disable-/,'');
				var enableValues=JSON.parse($(inp).attr('set-disable-'+setDisableClass));
				var checked=false;
				$('.set-disable-'+setDisableClass).each(function(){
					if(enableValues.indexOf($(this).val())<0)return;
					if($(this).prop('checked'))checked=true;
				});
				$('[set-disable-class="'+setDisableClass+'"]').each(function(){
					if(checked){
						$(this).removeAttr('disabled');
						if($(this).parent().is('label')){
							$(this).parent().find('span').css('opacity','');
						}
					} else {
						$(this).attr('disabled','disabled');
						if($(this).parent().is('label')){
							$(this).parent().find('span').css('opacity',0.5);
						}
						if($(this).is('input[type=text]') || $(this).is('textarea')){
							if($(this).val().trim()!=""){
								$(this).val('').trigger('change');
							}
						} else if($(this).is('input[type=radio]') || $(this).is('input[type=checkbox]')){
							if($(this).prop('checked')){
								$(this).prop('checked',false).trigger('change');
							}
						} else if($(this).is('select')){
							if($(this).val()!=""){
								$(this).val('').trigger('change');
							}
						}
					}
				});
			});
		}).trigger('change');
}

//특정 input text 입력 여부에 따라 대상 radio,checkbox,text enable/disable 처리
//$('input[name="G3_2_1"]').InputSetEnable('input[name="G3_2_2"],input[name="G3_2_3"],input[name="G3_2_4"],input[name="G3_2_5"],input[name="G3_3_1"]');
$.fn.InputSetEnable=function(target){
	var setDisableClass=String(new Date().valueOf())+String(Math.random()*10000+10000).substr(1,4);
	$(target).attr({'set-disable-class':setDisableClass});
	$(this).addClass("set-disable-"+setDisableClass)
	.on('keyup change',function(){
		var classes=$(this).attr('class').split(' ');
		classes.forEach(function(className){
			if(className.indexOf('set-disable-')!=0)return;
			var setDisableClass=className.replace(/set-disable-/,'');
			var answered=false;
			$('.set-disable-'+setDisableClass).each(function(){
				if($(this).val().trim()!="")answered=true;
			});
			$('[set-disable-class="'+setDisableClass+'"]').each(function(){
				if(answered){
					$(this).removeAttr('disabled');
					if($(this).parent().is('label')){
						$(this).parent().find('span').css('opacity','');
					}
				} else {
					$(this).attr('disabled','disabled');
					if($(this).parent().is('label')){
						$(this).parent().find('span').css('opacity',0.5);
					}
					if($(this).is('input[type=text]') || $(this).is('textarea')){
						if($(this).val().trim()!=""){
							$(this).val('').trigger('change');
						}
					} else if($(this).is('input[type=radio]') || $(this).is('input[type=checkbox]')){
						if($(this).prop('checked')){
							$(this).prop('checked',false).trigger('change');
						}
					}
				}
			});
		});
	}).trigger('change');
}

//리스트류의 모듈 속성 정보
var LIST_MODULE_TYPE={
	RADIO:{LIST:"ANSWERS",KEY:"K",VALUE:"V"}
	,HRADIO:{LIST:"ANSWERS",KEY:"K",VALUE:"V"}
	,RADIO_TABLE:{LIST:"ANSWERS",KEY:"K",VALUE:"V"}
	,CHECK:{LIST:"ANSWERS",KEY:"K",VALUE:"V"}
	,HCHECK:{LIST:"ANSWERS",KEY:"K",VALUE:"V"}
	,RADIOSET:{LIST:"ANSWERS",KEY:"K",VALUE:"V"}
	,RECODE_EXACT:{LIST:"MATCH",KEY:"K",VALUE:"V"}
	,RECODE_RANGE:{LIST:"MATCH",KEY:"K",VALUE:"V"}	
};

//str에서 입력된 txtNum(TEXT_n 또는 NUMBER_n)이 몇 번째인지 반환. GetTextNumberIndex(" [NUMBER_1] 명 [NUMBER_2] 명","NUMBER_2") = 1
function GetTextNumberIndex(str,txtNum){
	var reg=/\[(NUMBER|TEXT)_[\d]+\]/g;
	return (str.match(reg)||[]).indexOf('['+txtNum+']');
}

//데이터 전송
function Ajax(url,data,callback,success){
	var obj={
		url:url
		,dataType:'jsonp'
		,type:'post'
		,data:data
		,success:function(result){
			if(result.ERR!=""){
				return alert(result.ERR);
			}
			callback(result);
		}
	}
	if(success!=null)obj.success=success;
	$.ajax(obj);
}

//색상 2개 입력받아 그라디언트 만들기
function MakeGradient(colorStr,num){
	//MakeGradient("#F5FAFE,#ABCCF3",5);
	//--->["#f5fafe", "#e3effb", "#d0e3f9", "#bed8f6", "#abccf3"]
	if((colorStr||"")==""){
		return null;
	}
	var colors=colorStr.split(',');
	var start=colors[0].replace(/#/g,'');
	var end;
	if(colors.length==1){
		end=start;
	} else {
		end=colors[1].replace(/#/g,'');
	}
	var startR,startG,startB;
	var endR,endG,endB;
	if(start.length==3){
		startR=parseInt(start.substr(0,1)+start.substr(0,1),16);
		startG=parseInt(start.substr(1,1)+start.substr(1,1),16);
		startB=parseInt(start.substr(2,1)+start.substr(2,1),16);
	} else if(start.length==6){
		startR=parseInt(start.substr(0,2),16);
		startG=parseInt(start.substr(2,2),16);
		startB=parseInt(start.substr(4,2),16);
	}
	if(end.length==3){
		endR=parseInt(end.substr(0,1)+end.substr(0,1),16);
		endG=parseInt(end.substr(1,1)+end.substr(1,1),16);
		endB=parseInt(end.substr(2,1)+end.substr(2,1),16);
	} else if(end.length==6){
		endR=parseInt(end.substr(0,2),16);
		endG=parseInt(end.substr(2,2),16);
		endB=parseInt(end.substr(4,2),16);
	}
	var output=[];
	for(var i=0;i<num;i++){
		var r=(Math.round(i*(endR-startR)/(num-1)+startR)+256).toString(16).substr(1);
		var g=(Math.round(i*(endG-startG)/(num-1)+startG)+256).toString(16).substr(1);
		var b=(Math.round(i*(endB-startB)/(num-1)+startB)+256).toString(16).substr(1);
		output.push('#'+r+g+b);
	}
	return output;
}

//back 버튼시 input의 자동완성 해제
$('input,select,textarea').attr('autocomplete','off');

//checkbox 배타 설정(서로 동시에 선택할 수 없게)
$.fn.exclusive=function(target){
	//$('[akey=4],[akey=7]').exclusive('[akey=6]')
	//$('[akey=3]').exclusive('[akey=7]')
	//$('[akey=5]').exclusive('[akey=8]')
	$(this).each(function(){
		var src=this;
		$(target).each(function(){
			var tgt=this;
			var rnd="E"+String(new Date().valueOf())+String(Math.random()*10000+10000).substr(1,4);
			[src,tgt].forEach(function(ele){
				var dataEcs=$(ele).attr('data-ecs');
				if((dataEcs||"")==""){
					dataEcs=rnd;
				} else {
					dataEcs=dataEcs+","+rnd;
				}
				$(ele).attr('data-ecs',dataEcs);
			});
		});
	});
	//이벤트는 body에 한 번만 걸어줌
	if($('body').hasClass('ecs-event')==false){
		$('body').addClass('ecs-event').on('click change','[data-ecs]',function(evt){
			if($(evt.target).prop('checked')==false){
				return;
			}
			$(this).addClass('ecs-current');
			var dataEcs=$(this).attr('data-ecs');
			var ecsAry=dataEcs.split(',');
			ecsAry.forEach(function(ecsUnit){
				$('[data-ecs]:not(.ecs-current)').each(function(){
					var targetEcs=$(this).attr('data-ecs');
					var targetAry=targetEcs.split(',');
					if(targetAry.indexOf(ecsUnit)>=0){
						if($(this).prop('checked')){
							$(this).prop('checked',false).trigger('change');
						}
					}
				});
			});
			$(this).removeClass('ecs-current');
		});
	}
}

//로딩 모달 띄우기
function LoadingModal(show,options){
	$.modal.close();
	if(show){
		if($('body').find('#loadingModal').length==0){
			$('<div id="loadingModal" class="modal"><div class="modal-contents"> <div class="modal-row"> <div class="text-center w-100"> <div class="mb-2 loading-msg"></div><img src="/Images/loading.gif"/></div></div></div></div>').appendTo('body');
			var msg="준비중입니다. 잠시만 기다려주세요.";
			if(options!=null && options.msg!=null){
				msg=options.msg;
			}
			$('#loadingModal .loading-msg').html(msg);
		}
		$('#loadingModal').modal({
			closeExisting:false
			,escapeClose:false
			,showClose:false
			,showSpinner:true
		});
	}
}

//html 특수문자 제거
function escapeHtml(text) {
	var map = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#039;'
	};
	return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

if($.datepicker!=null){
	$.datepicker.setDefaults({
		dateFormat: 'yy-mm-dd',
		prevText: '이전 달',
		nextText: '다음 달',
		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		dayNames: ['일', '월', '화', '수', '목', '금', '토'],
		dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		showMonthAfterYear: true,
		yearSuffix: '년',
		currentText:'오늘',
		closeText :'닫기'
	});
}
