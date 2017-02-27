var red = new FileReader();
red.readAsBinaryString("test.ejs","gb2312");
red.addEventListener("load",LOAD_EVENT,false)
red.addEventListener("error",ERROR_EENT,false)
function LOAD_EVENT(e){
    console.log(this)
}
function ERROR_EENT(e) {
    console.log(e)
}