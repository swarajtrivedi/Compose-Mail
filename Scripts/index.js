class InitializeElements {
    constructor() {
        this.isBold=false;
        this.isItalic=false;
        this.wantCCBCC=true;
        this.uCase = false;
        this.TextArea= document.getElementById("TextArea");
        this.ccbcc = document.getElementById("CCBCC");
    }
}
document.getElementById("to").addEventListener("keydown",function(e){
    if(e.code=="Space"||e.code=="Tab")
    {
        let temp = document.getElementById("to").value;
        document.getElementById("to").value = temp + ";";
    }
});
function boldText() {
    if(obj.isBold==false)
    {
        obj.TextArea.style.fontWeight = '700';
        obj.isBold = true;
    }
    else{
        obj.TextArea.style.fontWeight = 'normal';
        obj.isBold = false;
    }
}
function italicText() {
    if(obj.isItalic==false)
    {
        obj.TextArea.style.fontStyle= 'italic';
        obj.isItalic=true;
    }
    else{
        obj.TextArea.style.fontStyle='normal';
        obj.isItalic=false;
    }
}
function uploadAttachment() {
    let file = document.createElement('input');
    file.setAttribute('type','file');
    file.click();
}
function changeCase(){
    if(obj.uCase==false)
    {
        obj.TextArea.style.textTransform='upperCase';
        obj.uCase=true;
    }
    else{
        obj.TextArea.style.textTransform='lowerCase';
        obj.uCase=false;
    }
}
function viewCCBCC(){
    if(obj.wantCCBCC==true)
    {
        obj.ccbcc.innerHTML += `
                           <label for="cc">CC</label>
                           <input type="email" id="cc" class="notSend">
                           <br><br>
                           <label for="BCC">BCC</label>
                           <input type="email" id="BCC" class="notSend">
                           `;
        
        obj.wantCCBCC=false;
        document.getElementById("cc").addEventListener("keydown",function(e){
            if(e.code=="Space"||e.code=="Tab")
            {
                let temp = document.getElementById("cc").value;
                document.getElementById("cc").value = temp + ";";
            }
        });
        document.getElementById("BCC").addEventListener("keydown",function(e){
            if(e.code=="Space"||e.code=="Tab")
            {
                let temp = document.getElementById("BCC").value;
                document.getElementById("BCC").value = temp + ";";
            }
        });
    }
    else{
        obj.ccbcc.innerHTML = ``;
        obj.wantCCBCC=true;
    }  
}
function deleteAll(){
    obj.TextArea.value= null;
}
let obj = new InitializeElements();