$('th').eq(0).insertAfter($('th').eq(1)); /*0번째를 1번째 뒤로*/
$('tr[vkey=1]').find('td').eq(0).insertAfter($('tr[vkey=1]').find('td').eq(7));/*vkey==col 인덱스*/
$('tr[vkey=2]').find('td').eq(0).insertAfter($('tr[vkey=2]').find('td').eq(7)); 
$('tr[vkey=3]').find('td').eq(0).insertAfter($('tr[vkey=3]').find('td').eq(7));

$('.first-th').text("진단문항"); /*table th class= first-th에 텍스트입력*/
