Function.prototype.maCall=function(context,...args){
    context.fn=this;
    let res=context.fn(...args);
    delete context.fn;
    return res;
}
Function.prototype.myBind=function(context,...args){
    let that=this;
    return function(){
        that.apply(context,...args);
    }
}