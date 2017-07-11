/*---------------------------
var a = new timers({
    func: function(x) {
        console.log(x);
    }
});//初始化
a.pause();//暂停与继续
a.restart();//重置
----------------------------*/
function timers(obj) {
  obj = obj || {};
  this.func = obj.func;
  this.state = 'on';
  this.n_sec = 0; //秒
  this.n_min = 0; //分
  this.n_hour = 0; //时
  this.n_timer = function() {
    var self = this;
    return setInterval(function() {
      var str_sec = self.n_sec;
      var str_min = self.n_min;
      var str_hour = self.n_hour;
      if (self.n_sec < 10) {
        str_sec = "0" + self.n_sec;
      }
      if (self.n_min < 10) {
        str_min = "0" + self.n_min;
      }

      if (self.n_hour < 10) {
        str_hour = "0" + self.n_hour;
      }

      var time = str_hour + ":" + str_min + ":" + str_sec;
      self.func(time);
      self.n_sec++;
      if (self.n_sec > 59) {
        self.n_sec = 0;
        self.n_min++;
      }
      if (self.n_min > 59) {
        self.n_min = 0;
        self.n_hour++;
      }
    }, 1000);
  }
  var a = this.n_timer();
  this.pause = function() {
      if (this.state === "on") {
        clearInterval(a);
        this.state = 'off';
      } else {
        this.state = 'on';
        a = this.n_timer();
      }
    },
    this.restart = function() {
      clearInterval(a);
      this.n_sec = 0;
      this.n_min = 0;
      this.n_hour = 0;
      a = this.n_timer();
      this.state = 'on';
    }
}
