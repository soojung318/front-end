## &lt;input&gt;태그의 disabled 속성
### 정의 및 특징
&lt;input&gt;태그의 disabled 속성은 해당 &lt;input&gt;요소가 비활성화됨을 명시한다.

disabled 속성이 명시된 &lt;input&gt;요소는 사용할 수 없으며, 사용자가 클릭할 수도 없다.
또한, 폼 데이터가 제출될 떄도 disabled 속성이 명시된 &lt;input&gt;요소의 데이터는 제출되지 않는다.<br><br>


### 사용법
이 속성을 사용하면 특정 조건이 충족될 때까지 사용자가 입력 필드를 클릭할 수 없도록 설정,
특정 조건이 충족되면 자바스크립트 등으로 disabled 속성값을 삭제하여 사용자가 입력 필드를 다시 사용할 수 있도록 조절할 수 있다.<br><br>


### 속성
boolean 속성.
: 해당 속성을 명시하지 않으면 속성값이 자동으로 false 값을 가지게 되며, 명시하면 자동으로 true 값을 가지게 된다.<br><br>


### 예제
```
<form action="/examples/media/action_target.php" method="get">
    이름 : <input type="text" name="st_name"><br>
    학번 : <input type="text" name="st_id"><br>
    학과 : <input type="text" name="department" disabled><br>
    <input type="submit">
</form>
```

<img src="https://user-images.githubusercontent.com/106755183/201258723-10a0f654-c6a2-47ec-9930-32aca5921bd2.png" >

----
코딩의 시작, TCP School, 날짜 미상, http://www.tcpschool.com/
