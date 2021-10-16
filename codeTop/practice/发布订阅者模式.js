class EventEmitter{
    constructor(){
        this.listener={};
    }
    on(eventName,fn){
        if(!this.listener[eventName]){
            this.listener[eventName]=[];
        }
        this.listener[eventName].push(fn);
    }
    off(eventName,fn){
        let callBacks=this.listener[eventName];
        if(!callBacks) return false;
        if(!fn){
            callBacks&&(callBacks.length=0);
        }else{
            for(let i=0;i<callBacks.length;i++){
                if(callBacks[i]==fn||callBacks[i].fn==fn){
                    callBacks[i].splice(i,1);
                    break;
                }
            }
        }
    }
    once(eventName,fn){
        let on=()=>{
            thiis.off(eventName,on);
            fn.apply(this,arguments);
        }
        on.fn=fn;
        this.on(eventName,on);
    }
    emit(eventName,data){
        let callBacks=this.listener[eventName];
        callBacks.forEach((c)=>{
            c(data);
        })
    }
}