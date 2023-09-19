let prev="";
let newV="";
let result="";
let mathsOperator="";
let isDecimalClicked=false;

function numberButtonPress(num){

    if(result){
        newV=num;
        result="";
    }
    else{
        if(num=='.'){
            if(isDecimalClicked!=true){
                newV+=num;
                isDecimalClicked=true;
            }
        }
        else{
            newV+=num;
        }
    }
    document.getElementById("screen").value=newV;
}

function calcButtonPress(operator){

    if(!result){
        prev=newV;
    }
    else{
        prev=result;
    }
    newV="";
    isDecimalClicked=false;
    mathsOperator=operator;
    result="";
    document.getElementById("screen").value="";

}


function equalButtonPress(num){
    isDecimalClicked=false;
    prev=parseFloat(prev);
    newV=parseFloat(newV);

    switch(mathsOperator){
        case"+":
            result=prev+newV;
            break;
        case"-":
            result=prev-newV;
            break;
        case"*":
            result=prev*newV;
            break;
        case"/":
            result=prev/newV;
            break;
        default:
            result=newV;
    }

    prev=result;
    document.getElementById("screen").value=result;
}

function clearButtonPress(){

    prev="";
    newV="";
    result="";
    mathsOperator="";
    isDecimalClicked=false;
    document.getElementById("screen").value="0";
}
