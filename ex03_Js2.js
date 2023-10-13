
let cnt = $("#num").text()[0]
$("#increase").on("click",function(){
    cnt++
    $("#num").text(cnt)
})
$("#decrease").on("click",function(){
    if(cnt>0){
        cnt--
        $("#num").text(cnt)
    }
})
$("#reset").on("click",function(){
    $("#num").text(0)
})