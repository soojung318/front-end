var data=autoData;
var qname=$(wrapper).attr('question-name');
var GUIDE=JSON.parse(QO[qname].GUIDE);

//숫자형에서 콤마 제거하고, 숫자가 아닌 값을 입력했는지 확인
var hasError=false;
Object.keys(data).forEach(function(col){
    if(hasError)return;
    if($('input[name="'+col+'"].is-num').length>0 && GUIDE[col]!=null){
        var val=data[col].replace(/,/g,'');
        data[col]=val;
        if(GUIDE[col]!=null){
            var txt=GUIDE[col];
            if(val!='' && isNaN(val)){
                hasError=true;
                Survey.Warning('['+txt+'] : 숫자만 입력해주세요');
            }
        }
    }
});
if(hasError){
    return false;
}

//문1. 시설 현황
if(Number(data["q1c1"])<0){
    Survey.Warning('['+GUIDE["q1c1"]+'] : 응답값을 확인해주세요');
    return false;
}
if(Number(data["q1c2"])<0){
    Survey.Warning('['+GUIDE["q1c2"]+'] : 응답값을 확인해주세요');
    return false;
}
if(Number(data["q1c3"])<0){
    Survey.Warning('['+GUIDE["q1c3"]+'] : 응답값을 확인해주세요');
    return false;
}
// if(Number(data["q1c1"])+Number(data["q1c2"])+Number(data["q1c3"])!=100){
// 	Survey.Warning('[문1. 시설 현황 / ⓒ시설 종류별 점유율] : 합계가 100이 되어야 합니다');
// 	return false;
// }
//
// if(data["q1a"]==''){
// 	Survey.Warning('[문1. 시설 현황 / ⓐ시설단위] : 값을 입력해주세요');
// 	return false;
// }

// if(data["q1b1"]=='' || Number(data["q1b1"])<0){
// 	Survey.Warning('[문1. 시설 현황 / ⓑ김발규격 / 폭] : 값을 입력해주세요');
// 	return false;
// }
// if(data["q1b2"]=='' || Number(data["q1b2"])<0){
// 	Survey.Warning('[문1. 시설 현황 / ⓑ김발규격 / 길이] : 값을 입력해주세요');
// 	return false;
// }
// if(data["q1b3"]=='' || Number(data["q1b3"])<0){
// 	Survey.Warning('[문1. 시설 현황 / ⓑ김발규격 / 부산] : 값을 입력해주세요');
// 	return false;
// }

//문2. 2023년산 예상시설량
if(Number(data["q2a2"])<Number(data["q2a3"])){
    Survey.Warning('[문2. 2023년산 예상시설량 / ⓐ전체시설 / 일반김 중 슈퍼김] : 일반김보다 크게 입력할 수 없습니다');
    return false;
}
if(Number(data["q2a2"])<Number(data["q2b2"])){
    Survey.Warning('[문2. 2023년산 예상시설량 / ⓑ육상채묘 / 일반김] : ⓐ전체시설 일반김보다 크게 입력할 수 없습니다');
    return false;
}
if(Number(data["q2b2"])<Number(data["q2b3"])){
    Survey.Warning('[문2. 2023년산 예상시설량 / ⓑ육상채묘 / 일반김 중 슈퍼김] : 일반김보다 크게 입력할 수 없습니다');
    return false;
}
if(Number(data["q2a2"])<Number(data["q2c2"])){
    Survey.Warning('[문2. 2023년산 예상시설량 / ⓒ동아채묘 / 일반김] : ⓐ전체시설 일반김보다 크게 입력할 수 없습니다');
    return false;
}

// if(Number(data["q4_1"])<0){
//     Survey.Warning('[문4. 종자(패각) 구입량] : 값을 정확히 입력해주세요');
//     return false;
// }
// if(Number(data["q4_2"])<0){
//     Survey.Warning('[문4. 종자(패각) 구입량 / 일반김] : 값을 정확히 입력해주세요');
//     return false;
// }
// if(Number(data["q4_3"])<0){
//     Survey.Warning('[문4. 종자(패각) 구입량 / 일반김] : 값을 정확히 입력해주세요');
//     return false;
// }
// if(Number(data["q4_4"])<0){
//     Survey.Warning('[문4. 종자(패각) 구입량 / 일반김] : 값을 정확히 입력해주세요');
//     return false;
// }

// if($('[name="q5a1"]').attr('disabled')!='disabled' && data["q5a1_1"]!=""){
//     if(Number(data["q5a1_1"])<1 || Number(data["q5a1_1"])>12 || Number(data["q5a1_1"])!=Math.floor(data["q5a1_1"])){
//         Survey.Warning('[문5. 인공채묘 현황 / ⓐ해상채묘 / 잇바디돌김] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
//     if(Number(data["q5a1_2"])<1 || Number(data["q5a1_2"])>31 || Number(data["q5a1_2"])!=Math.floor(data["q5a1_2"])){
//         Survey.Warning('[문5. 인공채묘 현황 / ⓐ해상채묘 / 잇바디돌김] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
//     if(Number(data["q5a1_3"])<1 || Number(data["q5a1_3"])>12 || Number(data["q5a1_3"])!=Math.floor(data["q5a1_3"])){
//         Survey.Warning('[문5. 인공채묘 현황 / ⓐ해상채묘 / 잇바디돌김] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
//     if(Number(data["q5a1_4"])<1 || Number(data["q5a1_4"])>31 || Number(data["q5a1_4"])!=Math.floor(data["q5a1_4"])){
//         Survey.Warning('[문5. 인공채묘 현황 / ⓐ해상채묘 / 잇바디돌김] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
// }
//
// if($('[name="q5a2"]').attr('disabled')!='disabled' && data["q5a2_1"]!=""){
//     if(Number(data["q5a2_1"])<1 || Number(data["q5a2_1"])>12 || Number(data["q5a2_1"])!=Math.floor(data["q5a2_1"])){
//         Survey.Warning('[문5. 인공채묘 현황 / ⓐ해상채묘 / 일반김/모무늬돌김] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
//     if(Number(data["q5a2_2"])<1 || Number(data["q5a2_2"])>31 || Number(data["q5a2_2"])!=Math.floor(data["q5a2_2"])){
//         Survey.Warning('[문5. 인공채묘 현황 / ⓐ해상채묘 / 일반김/모무늬돌김] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
//     if(Number(data["q5a2_3"])<1 || Number(data["q5a2_3"])>12 || Number(data["q5a2_3"])!=Math.floor(data["q5a2_3"])){
//         Survey.Warning('[문5. 인공채묘 현황 / ⓐ해상채묘 / 일반김/모무늬돌김] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
//     if(Number(data["q5a2_4"])<1 || Number(data["q5a2_4"])>31 || Number(data["q5a2_4"])!=Math.floor(data["q5a2_4"])){
//         Survey.Warning('[문5. 인공채묘 현황 / ⓐ해상채묘 / 일반김/모무늬돌김] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
// }
//
// if($('[name="q5b1"]').attr('disabled')!='disabled' && data["q5b1_1"]!=""){
//     if(Number(data["q5b1_1"])<1 || Number(data["q5b1_1"])>12 || Number(data["q5b1_1"])!=Math.floor(data["q5b1_1"])){
//         Survey.Warning('[문5. 인공채묘 현황 / ⓑ육상채묘 / 잇바디돌김] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
//     if(Number(data["q5b1_2"])<1 || Number(data["q5b1_2"])>31 || Number(data["q5b1_2"])!=Math.floor(data["q5b1_2"])){
//         Survey.Warning('[문5. 인공채묘 현황 / ⓑ육상채묘 / 잇바디돌김] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
//     if(Number(data["q5b1_3"])<1 || Number(data["q5b1_3"])>12 || Number(data["q5b1_3"])!=Math.floor(data["q5b1_3"])){
//         Survey.Warning('[문5. 인공채묘 현황 / ⓑ육상채묘 / 잇바디돌김] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
//     if(Number(data["q5b1_4"])<1 || Number(data["q5b1_4"])>31 || Number(data["q5b1_4"])!=Math.floor(data["q5b1_4"])){
//         Survey.Warning('[문5. 인공채묘 현황 / ⓑ육상채묘 / 잇바디돌김] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
// }
//
// if($('[name="q5b2"]').attr('disabled')!='disabled' && data["q5b2_1"]!=""){
//     if(Number(data["q5b2_1"])<1 || Number(data["q5b2_1"])>12 || Number(data["q5b2_1"])!=Math.floor(data["q5b2_1"])){
//         Survey.Warning('[문5. 인공채묘 현황 / ⓑ육상채묘 / 일반김/모무늬돌김] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
//     if(Number(data["q5b2_2"])<1 || Number(data["q5b2_2"])>31 || Number(data["q5b2_2"])!=Math.floor(data["q5b2_2"])){
//         Survey.Warning('[문5. 인공채묘 현황 / ⓑ육상채묘 / 일반김/모무늬돌김] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
//     if(Number(data["q5b2_3"])<1 || Number(data["q5b2_3"])>12 || Number(data["q5b2_3"])!=Math.floor(data["q5b2_3"])){
//         Survey.Warning('[문5. 인공채묘 현황 / ⓑ육상채묘 / 일반김/모무늬돌김] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
//     if(Number(data["q5b2_4"])<1 || Number(data["q5b2_4"])>31 || Number(data["q5b2_4"])!=Math.floor(data["q5b2_4"])){
//         Survey.Warning('[문5. 인공채묘 현황 / ⓑ육상채묘 / 일반김/모무늬돌김] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
// }

if($('[name="q5e2"]').eq(0).attr('disabled')!='disabled'){
    // if(data["q5e2"]==''){
    // 	Survey.Warning('[문5. 인공채묘 현황 / ⓔ채묘상태 / 일반김] : 값을 입력해주세요');
    // 	return false;
    // }
}
if($('[name="q5e3"]').eq(0).attr('disabled')!='disabled'){
    // if(data["q5e3"]==''){
    // 	Survey.Warning('[문5. 인공채묘 현황 / ⓔ채묘상태 / 잇바디돌김(곱창김)] : 값을 입력해주세요');
    // 	return false;
    // }
}
if($('[name="q5e4"]').eq(0).attr('disabled')!='disabled'){
    // if(data["q5e4"]==''){
    // 	Survey.Warning('[문5. 인공채묘 현황 / ⓔ채묘상태 / 모무늬돌김(마루바)] : 값을 입력해주세요');
    // 	return false;
    // }
}

// if(data["q6a_1"]!=""){
//     if(Number(data["q6a_1"])<1 || Number(data["q6a_1"])>12 || Number(data["q6a_1"])!=Math.floor(data["q6a_1"])){
//         Survey.Warning('[문6. 당월 채취 현황 / 1회 채취] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
//     if(Number(data["q6a_2"])<1 || Number(data["q6a_2"])>31 || Number(data["q6a_2"])!=Math.floor(data["q6a_2"])){
//         Survey.Warning('[문6. 당월 채취 현황 / 1회 채취] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
//     if(Number(data["q6a_3"])<1 || Number(data["q6a_3"])>12 || Number(data["q6a_3"])!=Math.floor(data["q6a_3"])){
//         Survey.Warning('[문6. 당월 채취 현황 / 1회 채취] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
//     if(Number(data["q6a_4"])<1 || Number(data["q6a_4"])>31 || Number(data["q6a_4"])!=Math.floor(data["q6a_4"])){
//         Survey.Warning('[문6. 당월 채취 현황 / 1회 채취] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
// }
// if(data["q6d_1"]!=""){
//     if(Number(data["q6d_1"])<1 || Number(data["q6d_1"])>12 || Number(data["q6d_1"])!=Math.floor(data["q6d_1"])){
//         Survey.Warning('[문6. 당월 채취 현황 / 2회 채취] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
//     if(Number(data["q6d_2"])<1 || Number(data["q6d_2"])>31 || Number(data["q6d_2"])!=Math.floor(data["q6d_2"])){
//         Survey.Warning('[문6. 당월 채취 현황 / 2회 채취] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
//     if(Number(data["q6d_3"])<1 || Number(data["q6d_3"])>12 || Number(data["q6d_3"])!=Math.floor(data["q6d_3"])){
//         Survey.Warning('[문6. 당월 채취 현황 / 2회 채취] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
//     if(Number(data["q6d_4"])<1 || Number(data["q6d_4"])>31 || Number(data["q6d_4"])!=Math.floor(data["q6d_4"])){
//         Survey.Warning('[문6. 당월 채취 현황 / 2회 채취] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
// }
// if(data["q6g_1"]!=""){
//     if(Number(data["q6g_1"])<1 || Number(data["q6g_1"])>12 || Number(data["q6g_1"])!=Math.floor(data["q6g_1"])){
//         Survey.Warning('[문6. 당월 채취 현황 / 2회 채취] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
//     if(Number(data["q6g_2"])<1 || Number(data["q6g_2"])>31 || Number(data["q6g_2"])!=Math.floor(data["q6g_2"])){
//         Survey.Warning('[문6. 당월 채취 현황 / 2회 채취] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
//     if(Number(data["q6g_3"])<1 || Number(data["q6g_3"])>12 || Number(data["q6g_3"])!=Math.floor(data["q6g_3"])){
//         Survey.Warning('[문6. 당월 채취 현황 / 2회 채취] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
//     if(Number(data["q6g_4"])<1 || Number(data["q6g_4"])>31 || Number(data["q6g_4"])!=Math.floor(data["q6g_4"])){
//         Survey.Warning('[문6. 당월 채취 현황 / 2회 채취] : 날짜를 정확히 입력해주세요');
//         return false;
//     }
// }

//	문6 채취시설량 b.e.h의 로직 추가
if(data["q6b1"]!="" && Number(data["q6b1"])>Number(data["q2a2"])){
    Survey.Warning('[문6. 당월 채취 현황 / 1회 채취] : 일반김 채취시설량을 확인해주세요');
    return false;
}
if(data["q6b2"]!="" && Number(data["q6b2"])>Math.max(Number(data["q2a4"]),Number(data["q2a6"]))){
    Survey.Warning('[문6. 당월 채취 현황 / 1회 채취] : 잇바디돌김 채취시설량을 확인해주세요');
    return false;
}
if(data["q6b3"]!="" && Number(data["q6b3"])>Number(data["q2a5"])){
    Survey.Warning('[문6. 당월 채취 현황 / 1회 채취] : 모무늬돌김 채취시설량을 확인해주세요');
    return false;
}

if(data["q6e1"]!="" && Number(data["q6e1"])>Number(data["q2a2"])){
    Survey.Warning('[문6. 당월 채취 현황 / 2회 채취] : 일반김 채취시설량을 확인해주세요');
    return false;
}
if(data["q6e2"]!="" && Number(data["q6e2"])>Math.max(Number(data["q2a4"]),Number(data["q2a6"]))){
    Survey.Warning('[문6. 당월 채취 현황 / 2회 채취] : 잇바디돌김 채취시설량을 확인해주세요');
    return false;
}
if(data["q6e3"]!="" && Number(data["q6e3"])>Number(data["q2a5"])){
    Survey.Warning('[문6. 당월 채취 현황 / 2회 채취] : 모무늬돌김 채취시설량을 확인해주세요');
    return false;
}

if(data["q6h1"]!="" && Number(data["q6h1"])>Number(data["q2a2"])){
    Survey.Warning('[문6. 당월 채취 현황 / 3회 채취] : 일반김 채취시설량을 확인해주세요');
    return false;
}
if(data["q6h2"]!="" && Number(data["q6h2"])>Math.max(Number(data["q2a4"]),Number(data["q2a6"]))){
    Survey.Warning('[문6. 당월 채취 현황 / 3회 채취] : 잇바디돌김 채취시설량을 확인해주세요');
    return false;
}
if(data["q6h3"]!="" && Number(data["q6h3"])>Number(data["q2a5"])){
    Survey.Warning('[문6. 당월 채취 현황 / 3회 채취] : 모무늬돌김 채취시설량을 확인해주세요');
    return false;
}

return true;
