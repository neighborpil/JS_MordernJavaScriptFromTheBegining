# JS_MordernJavaScriptFromTheBegining
Code example

==============
# Visual Studio addons
 - Live Server
 - Bracket Pair Colorizer
 - JavaScript(ES6) code snippets


### ※ Chrome Debugging Tips
 - 콘솔창에서 string은 검은색,
 - number, boolean은 파란색으로 표시된다
 - console.table(object) object를 테이블로 반환

```
console.table({a:1, b:2});
```
![image](https://user-images.githubusercontent.com/22423285/110452151-40b11280-8108-11eb-9306-7777adb10721.png)

 - console.error(에러내용) : 에러 표시
```
console.error('This is some error');
```
![image](https://user-images.githubusercontent.com/22423285/110452429-840b8100-8108-11eb-95da-d44da30e5b30.png)


 - console.clear() : 콘솔 클리어
 - console.warn(경고내용) : 경고 표시
```
console.warn('This is a warning');
```
![image](https://user-images.githubusercontent.com/22423285/110452704-c46aff00-8108-11eb-99c8-17b5303a943d.png)

 - console.time(키)
   console.timeEnd(키) : 시작부터 끝까지 걸린 시간을 나타낸다
```
console.time('Hello');
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.timeEnd('Hello');
```
![image](https://user-images.githubusercontent.com/22423285/110453006-17dd4d00-8109-11eb-9d9c-76125941ccde.png)





