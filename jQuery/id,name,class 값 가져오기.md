## Javascript / jQuery 를 이용한 ID, Name, Class 값 가져오기

1. div 선언한다.
```
<div class="test_class" id="test_id" name="test_name"></div>
```
### jQuery 사용시
```
//1. By id
var name_by_id = $('#test_id').attr('name');
var class_by_id = $('#test_id').attr('class');
//2. By class
var name_by_class = $('.test_class').attr('name');
var id_by_class = $('.test_class').attr('id');
//3. By name
var id_by_name = $('[name="test_name"]').attr('id');
var class_by_name = $('[name="test_name"]').attr('class');
```

### javascript 사용시
※ getElementById의 element는 단수형. class와 name은 복수형.
```
//1. By id
var name_by_id = document.getElementById("test_id").getAttribute('name');
var class_by_id = document.getElementById('test_id').ClassName;
//2. By class
var name_by_class = document.getElementsByClassName('test_class')[0].getAttribute('name');
var class_by_class = document.getElementsByClassName('test_class')[0].id;
//3. By nameㅊ
var id_by_name = document.getElementsByName('test_name')[0].id;
var class_by_name = document.getElementsByName('test_name')[0].className;
```

※ class나 name을 중복해서 사용하시는 경우 index값 설정에 주의해서 접근해야함.

---
출처: Codethief, 2018년 8월 10일, https://codethief.io
