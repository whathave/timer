# timer


> js计时器

## example：
* 1.初始化计时器
var a = new timers({
    func: function(x) {
        console.log(x);
    }
});
* 2.暂停与继续
a.pause();
* 3.重置
a.restart();
