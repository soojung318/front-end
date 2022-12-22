## HTML colgroup 태그
### 정의 및 특징
&lt;colgroup&gt;태그는 테이블에서 서식 지정을 위해 하나 이상의 열을 그룹으로 묶을 때 사용한다.<br><br>

### 사용법
&lt;colgroup&gt;요소는 각 행(row)이나 셀(cell)의 스타일을 반복하지 않고, 열(column) 전체에 다른 스타일을 적용하고 싶을 때 유용하게 사용할 수 있다.<br>
또한, &lt;colgroup&gt;요소 내부에 &lt;col&gt;요소를 포함하여 열마다 각각 다른 스타일을 적용할 수도 있다.<br><br>
&lt;colgroup&gt;요소는 &lt;table&gt;요소의 자식 요소로, 모든 &lt;caption&gt;요소보다 뒤에 위치해야 하며 모든 &lt;thead&gt;,&lt;tbody&gt;,&lt;tfoot&gt;,&lt;tr&gt;요소보다는 앞에 위치해야 한다.

### 예제
```
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
    <title>HTML colgroup tag</title>
    <style>
        table, th, td {
            border: 1px solid black;
        }
    </style>
</head>
<body>

    <table>
        <colgroup span="2" style="background-color: lightpink"></colgroup>
		<tr>
			<th>학번</th>
            <th>이름</th>
            <th>학과</th>
		</tr>
		<tr>
			<td>2006123456</td>
			<td>홍길동</td>
			<td>전자공학과</td>
		</tr>
        <tr>
			<td>2007123789</td>
			<td>백두산</td>		
			<td>일어일문과</td>
		</tr>
	</table>
	
</body>
</html>
```
<img src="https://user-images.githubusercontent.com/106755183/201261056-288a0bd4-ae16-482e-a4e7-797c009fdd7f.png">

----

코딩의 시작, TCP School, 날짜 미상, http://www.tcpschool.com/
