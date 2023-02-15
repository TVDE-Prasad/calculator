let data=document.getElementsByTagName("button");
var value=document.getElementById("resul");
for(i=0;i<=data.length;i++){
    data[i].onclick=function take(){
        var input=this.innerText;
        calc(input);
    }
    function calc(input){
        let currentValue=value.innerText;
       if(currentValue=="0"){
        if(input!="del"&& input!="c" && input !="="){
            value.innerText="";
            value.innerText+=input;
        }
       }
       if(currentValue!="0"){
        if(input!="del"&& input!="c" && input !="="){
        
            value.innerText+=input;
        }
           
       }
       if(input=="del"){
        value.innerText=currentValue.substring(0,currentValue.length-1);
        if(value.innerText==""){
            value.innerText="0";
        }
       }
       
     if(input=="c"){
         value.innerText="0";
       }
      if(input=="=") {
         value.innerText=eval(currentValue);
       }
    }

}