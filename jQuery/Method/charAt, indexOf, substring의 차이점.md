## 자바스크립트 - charAt, indexOf, substring의 차이점

1. charAt(인수) - 인수번째의 문자를 읽어 냅니다.

        예) "javascript".charAt(2)에는 'v'가 읽어 집니다. 0부터 시작하기 때문에 3번째인 'v'가 읽어 집니다.

 

2. indexOf(인수) - 인수가 들어있는 위치를 알려 줍니다.

        예) "javascript".indexOf("s")에는 4가 읽어 집니다. 0부터 시작하기 때문입니다.(lastIndexOf는 뒤에서부터 셈)

 

3. substring(인수, 인수) - charAt은 문자하나를 읽어내지만 substring은 문자열을 읽어 냅니다.

        예) "javascript".substring(1, 3)은 "ava"를 추출해냅니다.  0부터 시작하기 때문입니다.
