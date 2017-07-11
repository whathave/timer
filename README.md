# timer
> js计时器
## example：
* 初始化计时器
```javascript
var a = new timers({
    func: function(x) {
        console.log(x);
    }
});
```
* 暂停与继续
```javascript
a.pause();
```
* 重置
```javascript
a.restart();
```
