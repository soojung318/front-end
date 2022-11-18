## 일회성 타이머 setTimeout();
setTimeout()은 지정된 시간이 지난 뒤 1회 실행되는 함수이다.

### setInterval()과 차이점
1회만 호출하려면 특정 조건을 만들어줘서 clearInterval()을 통해 멈춰주어야 하기 때문에 특정시간이 지난 후에 1회 사용하려는 목적이라면 setInterval()보다는 setTimeout()을 사용한다.

### 사용법
첫 번째 인자로 실행할 코드를 담고 있는 함수를 받고,<br>
두 번째 인자로 지연 시간을 밀리초(ms)단위로 받는다.
<br>
#### ex1) 1초 기다린 후에 console.lof() 함수 호출
```
setTimeout(function(){
  console.log("1초 뒤에 생성됩니다.");
},1000)
```

#### ex2) 1초 기다린 후에 console.lof() 함수 호출
```
var timeOut = function(){
  console.log("TimeOut() 실행!");
}
setTimeout(timeOut,1000);
```

#### ex3) 1초 기다린 후에 console.lof() 함수 호출
```
var timeOut = function(){
  console.log("TimeOut() 실행!");
}
var ms =1000;
setTimeout(timeOut,ms);
```
