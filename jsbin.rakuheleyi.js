var time = false;


function minus() {
    if (document.getElementById("num")) {
        var curr = parseInt(document.getElementById("num").innerHTML);
    }

    if (curr && curr <= 60 && time === true) {
        if (curr <= 10) {
           
            document.getElementById("num").innerHTML = "0" + (curr - 1);

        } else {
            document.getElementById("num").innerHTML = curr - 1;
        }
    } else if (curr === 0) {
       
        document.getElementById("num").innerHTML = "你好棒呦";
    }

    setTimeout(function() {
        minus();
    }, 1000);


}
minus();

function start() {
    time = true;
}

function stop() {

    time = false;
}
function restart() {
        document.getElementById("num").innerHTML = 60;
    }


function joke() {
    var person = prompt("Please enter your name");
    var timer = prompt("Please enter the current value of timer");
  if (person != null && timer != null) {
     var a;
         a = 60-timer;
      
      alert(  "恭喜你" + person + "! 你總共浪費了 "+ a +"秒在這程式上 >< ");
    
    alert("以為完了嗎？");
    alert("其實還沒有");
    alert("當你遇到這些小視窗時又有一段時間過去了");
    alert("猜猜看還有多少個視窗");
    alert("好啦這真的是最後一個了！");
    
    }
}
