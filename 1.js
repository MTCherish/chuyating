function instance_of(a) {
    while (a._proto_ != null) {
        if (a._proto_ == Array.prototype) {
            return true;
        }
        a = a._proto_;
    }
    return false;
}
a._proto_=Array.prototype
Array.prototype._proto_=Object.prototype
www.baidu.com

function getMaxSum(arr){
    var sum=0;
    var curSum=0;
    for(let i=0;i<arr.length;i++){
        if(curSum>0){
            curSum+=arr[i];
        }else{
            curSum=arr[i];
        }
        sum=sum>curSum?sum:curSum;
    }
    return sum;
}

<div id="right">asasdsf</div>
$("right").animate(
    {
        left:'-100px'
    }
,300)

var oDiv=document.getElementById("right")
var left=oDiv.offsetLeft
var a=10/3
timer=setInterval(
    function(){
        if(left<=100){
            left+=a
            oDiv.style.left=left+"px"
        }else{
            clearInterval(timer)
        }
    },10)
for(let i=0;i<100;i+=10/3){
    
}

