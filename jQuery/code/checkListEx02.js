//지난 조사결과 적용
(function(){
    $('#prev_a1').val(L["prev_a1"]);
    $('#prev_a2').val(L["prev_a2"]);
    $('#prev_a3').val(L["prev_a3"]);
    $('[name="prev_b"][value="'+L["prev_b"]+'"]').prop('checked',true);
    $('#prev_c1').val(L["prev_c1"]);
    $('#prev_c2').val(L["prev_c2"]);
    $('#prev_c3').val(L["prev_c3"]);
    $('#prev_d1').val(L["prev_d1"]);
    $('#prev_d2').val(L["prev_d2"]);
    $('#prev_d3').val(L["prev_d3"]);
    $('#prev_d4').val(L["prev_d4"]);
    $('#prev_d5').val(L["prev_d5"]);
    $('#prev_d6').val(L["prev_d6"]);
    $('#prev_e2').val(L["prev_e2"]);
    $('#prev_e4').val(L["prev_e4"]);
    $('#prev_e5').val(L["prev_e5"]);
    $('#prev_e6').val(L["prev_e6"]);
    $('#prev_f2').val(L["prev_f2"]);
})();

//문2. 2023년산 예상시설량 ⓐ전체시설 자동합계
$('[name="q2a1"]').attr('sum-from','q2a');
$('[name="q2a2"]').attr('sum-to','q2a');
$('[name="q2a4"]').attr('sum-to','q2a');
$('[name="q2a5"]').attr('sum-to','q2a');

//문4. 종자(패각) 구입량 자동합계
// $('[name="q4_1"]').attr('sum-from','q4');
// $('[name="q4_2"]').attr('sum-to','q4');
// $('[name="q4_3"]').attr('sum-to','q4');
// $('[name="q4_4"]').attr('sum-to','q4');

//값 변경시 실행되는 부분
$('[question-name]').on('keyup change','input',function(evt){

    //문1 단위 변경
    var q1a=$('[name="q1a"]:checked').val()||"";
    if(q1a==""){
        $('span.unit').html("");
    } else if(q1a=="1"){
        $('span.unit').html("책");
    } else if(q1a=="2"){
        $('span.unit').html("줄");
    } else if(q1a=="3"){
        $('span.unit').html("세트");
    }

    //문3. 시설량 변동 이유 입력가능 여부
    var q3show=false;
    if(Number(L["prev_d1"]||"")!=Number($('[name="q2a1"]').val()))q3show=true;
    if(Number(L["prev_d2"]||"")!=Number($('[name="q2a2"]').val()))q3show=true;
    if(Number(L["prev_d3"]||"")!=Number($('[name="q2a3"]').val()))q3show=true;
    if(Number(L["prev_d4"]||"")!=Number($('[name="q2a4"]').val()))q3show=true;
    if(Number(L["prev_d5"]||"")!=Number($('[name="q2a5"]').val()))q3show=true;
    if(Number(L["prev_d6"]||"")!=Number($('[name="q2a6"]').val()))q3show=true;
    if(Number(L["prev_e2"]||"")!=Number($('[name="q2b2"]').val()))q3show=true;
    if(Number(L["prev_e3"]||"")!=Number($('[name="q2b3"]').val()))q3show=true;
    if(Number(L["prev_e4"]||"")!=Number($('[name="q2b4"]').val()))q3show=true;
    if(Number(L["prev_e5"]||"")!=Number($('[name="q2b5"]').val()))q3show=true;
    if(Number(L["prev_e6"]||"")!=Number($('[name="q2b6"]').val()))q3show=true;
    if(Number(L["prev_f2"]||"")!=Number($('[name="q2c2"]').val()))q3show=true;
    if(q3show){
        $('[name="q3"]').removeAttr('disabled');
    } else {
        $('[name="q3"]').val('').attr('disabled','disabled');
    }

    //문4. 종자(패각) 구입량 입력가능 여부
    var q4_2_show=false;
    if(Number($('[name="q2a2"]').val())>0)q4_2_show=true;
    if(q4_2_show){
        $('[name="q4_2"]').removeAttr('disabled');
    } else {
        $('[name="q4_2"]').val('').attr('disabled','disabled');
    }
    var q4_3_show=false;
    if(Number($('[name="q2a4"]').val())>0)q4_3_show=true;
    if(Number($('[name="q2a6"]').val())>0)q4_3_show=true;
    if(q4_3_show){
        $('[name="q4_3"]').removeAttr('disabled');
    } else {
        $('[name="q4_3"]').val('').attr('disabled','disabled');
    }
    var q4_4_show=false;
    if(Number($('[name="q2a5"]').val())>0)q4_4_show=true;
    if(q4_4_show){
        $('[name="q4_4"]').removeAttr('disabled');
    } else {
        $('[name="q4_4"]').val('').attr('disabled','disabled');
    }

    var q5a1_show=false;
    if(Number($('[name="q2a4"]').val())>0)q5a1_show=true;
    if(Number($('[name="q2a6"]').val())>0)q5a1_show=true;
    if(q5a1_show){
        $('[name="q5a1"],[name="q5a1_1"],[name="q5a1_2"],[name="q5a1_3"],[name="q5a1_4"]').removeAttr('disabled');
    } else {
        $('[name="q5a1"],[name="q5a1_1"],[name="q5a1_2"],[name="q5a1_3"],[name="q5a1_4"]').val('').attr('disabled','disabled');
    }

    var q5a2_show=false;
    if(Number($('[name="q2a2"]').val())>0)q5a2_show=true;
    if(Number($('[name="q2a5"]').val())>0)q5a2_show=true;
    if(q5a2_show){
        $('[name="q5a2"],[name="q5a2_1"],[name="q5a2_2"],[name="q5a2_3"],[name="q5a2_4"]').removeAttr('disabled');
    } else {
        $('[name="q5a2"],[name="q5a2_1"],[name="q5a2_2"],[name="q5a2_3"],[name="q5a2_4"]').val('').attr('disabled','disabled');
    }

    var q5b1_show=false;
    if(Number($('[name="q2b4"]').val())>0)q5b1_show=true;
    if(Number($('[name="q2b6"]').val())>0)q5b1_show=true;
    if(q5b1_show){
        $('[name="q5b1"],[name="q5b1_1"],[name="q5b1_2"],[name="q5b1_3"],[name="q5b1_4"]').removeAttr('disabled');
    } else {
        $('[name="q5b1"],[name="q5b1_1"],[name="q5b1_2"],[name="q5b1_3"],[name="q5b1_4"]').val('').attr('disabled','disabled');
    }

    var q5b2_show=false;
    if(Number($('[name="q2b2"]').val())>0)q5b2_show=true;
    if(Number($('[name="q2b5"]').val())>0)q5b2_show=true;
    if(q5b2_show){
        $('[name="q5b2"],[name="q5b2_1"],[name="q5b2_2"],[name="q5b2_3"],[name="q5b2_4"]').removeAttr('disabled');
    } else {
        $('[name="q5b2"],[name="q5b2_1"],[name="q5b2_2"],[name="q5b2_3"],[name="q5b2_4"]').val('').attr('disabled','disabled');
    }

    //q5 월 일 자동입력
    var q5a1=$('[name="q5a1_1"]').val()+'월 ';
    q5a1+=$('[name="q5a1_2"]').val()+'일 ~ ';
    q5a1+=$('[name="q5a1_3"]').val()+'월 ';
    q5a1+=$('[name="q5a1_4"]').val()+'일';
    $('[name="q5a1"]:not([disabled])').val(q5a1);

    var q5a2=$('[name="q5a2_1"]').val()+'월 ';
    q5a2+=$('[name="q5a2_2"]').val()+'일 ~ ';
    q5a2+=$('[name="q5a2_3"]').val()+'월 ';
    q5a2+=$('[name="q5a2_4"]').val()+'일';
    $('[name="q5a2"]:not([disabled])').val(q5a2);

    var q5b1=$('[name="q5b1_1"]').val()+'월 ';
    q5b1+=$('[name="q5b1_2"]').val()+'일 ~ ';
    q5b1+=$('[name="q5b1_3"]').val()+'월 ';
    q5b1+=$('[name="q5b1_4"]').val()+'일';
    $('[name="q5b1"]:not([disabled])').val(q5b1);

    var q5b2=$('[name="q5b2_1"]').val()+'월 ';
    q5b2+=$('[name="q5b2_2"]').val()+'일 ~ ';
    q5b2+=$('[name="q5b2_3"]').val()+'월 ';
    q5b2+=$('[name="q5b2_4"]').val()+'일';
    $('[name="q5b2"]:not([disabled])').val(q5b2);

    var q5e2_show=false;
    if(Number($('[name="q2a2"]').val())>0)q5e2_show=true;
    if(q5e2_show){
        $('[name="q5e2"]').removeAttr('disabled');
    } else {
        $('[name="q5e2"]').prop('checked',false).attr('disabled','disabled');
    }
    var q5e3_show=false;
    if(Number($('[name="q2a4"]').val())>0)q5e3_show=true;
    if(Number($('[name="q2a6"]').val())>0)q5e3_show=true;
    if(q5e3_show){
        $('[name="q5e3"]').removeAttr('disabled');
    } else {
        $('[name="q5e3"]').prop('checked',false).attr('disabled','disabled');
    }
    var q5e4_show=false;
    if(Number($('[name="q2a5"]').val())>0)q5e4_show=true;
    if(q5e4_show){
        $('[name="q5e4"]').removeAttr('disabled');
    } else {
        $('[name="q5e4"]').prop('checked',false).attr('disabled','disabled');
    }

    var q6a1_show=false;
    if(Number($('[name="q2a2"]').val())>0)q6a1_show=true;
    if(q6a1_show){
        $('[name="q6b1"],[name="q6c1"],[name="q6e1"],[name="q6f1"],[name="q6h1"],[name="q6i1"],[name="q6j1"],[name="q6k1"]').removeAttr('disabled');
    } else {
        $('[name="q6b1"],[name="q6c1"],[name="q6e1"],[name="q6f1"],[name="q6h1"],[name="q6i1"],[name="q6j1"],[name="q6k1"]').val('').attr('disabled','disabled');
    }
    var q6a2_show=false;
    if(Number($('[name="q2a4"]').val())>0)q6a2_show=true;
    if(Number($('[name="q2a6"]').val())>0)q6a2_show=true;
    if(q6a2_show){
        $('[name="q6b2"],[name="q6c2"],[name="q6e2"],[name="q6f2"],[name="q6h2"],[name="q6i2"],[name="q6j2"],[name="q6k2"]').removeAttr('disabled');
    } else {
        $('[name="q6b2"],[name="q6c2"],[name="q6e2"],[name="q6f2"],[name="q6h2"],[name="q6i2"],[name="q6j2"],[name="q6k2"]').val('').attr('disabled','disabled');
    }
    var q6a3_show=false;
    if(Number($('[name="q2a5"]').val())>0)q6a3_show=true;
    if(q6a3_show){
        $('[name="q6b3"],[name="q6c3"],[name="q6e3"],[name="q6f3"],[name="q6h3"],[name="q6i3"],[name="q6j3"],[name="q6k3"]').removeAttr('disabled');
    } else {
        $('[name="q6b3"],[name="q6c3"],[name="q6e3"],[name="q6f3"],[name="q6h3"],[name="q6i3"],[name="q6j3"],[name="q6k3"]').val('').attr('disabled','disabled');
    }
    var q6o1_show=false;
    if(Number($('[name="q6j1"]').val())>0)q6o1_show=true;
    if(q6o1_show){
        $('[name="q6o1"]').removeAttr('disabled');
    } else {
        $('[name="q6o1"]').val('').attr('disabled','disabled');
    }
    var q6o2_show=false;
    if(Number($('[name="q6j2"]').val())>0)q6o2_show=true;
    if(q6o2_show){
        $('[name="q6o2"]').removeAttr('disabled');
    } else {
        $('[name="q6o2"]').val('').attr('disabled','disabled');
    }
    var q6o3_show=false;
    if(Number($('[name="q6j3"]').val())>0)q6o3_show=true;
    if(q6o3_show){
        $('[name="q6o3"]').removeAttr('disabled');
    } else {
        $('[name="q6o3"]').val('').attr('disabled','disabled');
    }
    var q6p1_show=false;
    if(Number($('[name="q6k1"]').val())>0)q6p1_show=true;
    if(q6p1_show){
        $('[name="q6p1"]').removeAttr('disabled');
    } else {
        $('[name="q6p1"]').val('').attr('disabled','disabled');
    }
    var q6p2_show=false;
    if(Number($('[name="q6k2"]').val())>0)q6p2_show=true;
    if(q6p2_show){
        $('[name="q6p2"]').removeAttr('disabled');
    } else {
        $('[name="q6p2"]').val('').attr('disabled','disabled');
    }
    var q6p3_show=false;
    if(Number($('[name="q6k3"]').val())>0)q6p3_show=true;
    if(q6p3_show){
        $('[name="q6p3"]').removeAttr('disabled');
    } else {
        $('[name="q6p3"]').val('').attr('disabled','disabled');
    }

    //q6 월 일 자동입력
    var q6a=$('[name="q6a_1"]').val()+'월 ';
    q6a+=$('[name="q6a_2"]').val()+'일 ~ ';
    q6a+=$('[name="q6a_3"]').val()+'월 ';
    q6a+=$('[name="q6a_4"]').val()+'일';
    $('[name="q6a"]:not([disabled])').val(q6a);
    var q6d=$('[name="q6d_1"]').val()+'월 ';
    q6d+=$('[name="q6d_2"]').val()+'일 ~ ';
    q6d+=$('[name="q6d_3"]').val()+'월 ';
    q6d+=$('[name="q6d_4"]').val()+'일';
    $('[name="q6d"]:not([disabled])').val(q6d);
    var q6g=$('[name="q6g_1"]').val()+'월 ';
    q6g+=$('[name="q6g_2"]').val()+'일 ~ ';
    q6g+=$('[name="q6g_3"]').val()+'월 ';
    q6g+=$('[name="q6g_4"]').val()+'일';
    $('[name="q6g"]:not([disabled])').val(q6g);

    //문7. 익월 채취 현황
    var q7a1_show=false;
    if(Number($('[name="q2a2"]').val())>0)q7a1_show=true;
    if(q7a1_show){
        $('[name="q7a1"],[name="q7b1"],[name="q7c1"],[name="q7d1"],[name="q7e1"],[name="q7f1"]').removeAttr('disabled');
    } else {
        $('[name="q7a1"],[name="q7b1"],[name="q7c1"],[name="q7d1"],[name="q7e1"],[name="q7f1"]').val('').attr('disabled','disabled');
    }
    var q7a2_show=false;
    if(Number($('[name="q2a4"]').val())>0)q7a2_show=true;
    if(Number($('[name="q2a6"]').val())>0)q7a2_show=true;
    if(q7a2_show){
        $('[name="q7a2"],[name="q7b2"],[name="q7c2"],[name="q7d2"],[name="q7e2"],[name="q7f2"]').removeAttr('disabled');
    } else {
        $('[name="q7a2"],[name="q7b2"],[name="q7c2"],[name="q7d2"],[name="q7e2"],[name="q7f2"]').val('').attr('disabled','disabled');
    }
    var q7a3_show=false;
    if(Number($('[name="q2a5"]').val())>0)q7a3_show=true;
    if(q7a3_show){
        $('[name="q7a3"],[name="q7b3"],[name="q7c3"],[name="q7d3"],[name="q7e3"],[name="q7f3"]').removeAttr('disabled');
    } else {
        $('[name="q7a3"],[name="q7b3"],[name="q7c3"],[name="q7d3"],[name="q7e3"],[name="q7f3"]').val('').attr('disabled','disabled');
    }

});
$('[question-name] input').eq(0).trigger('change');

//RADIO 선택한 것 다시 누르면 해제되도록
$('label').on('mousedown',function(evt){
    var checked=$(evt.target).closest('label').find('input[type=radio]').prop('checked');
    setTimeout(function(){
        if(checked){
            $(evt.target).closest('label').find('input[type=radio]').prop('checked',false);
        }
    },300);
});
