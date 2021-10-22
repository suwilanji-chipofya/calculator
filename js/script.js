$(document).ready(function() {
    $(".btns button").on("click", function() {
        if ($(this).text() == "C") {
            $("#expr").val("")
        } else if ($(this).text() == "=") {
            var ans = eval($("#expr").val())
            $("#expr").val(ans.toString())
        } else if($(this).text()=="Del") {
            var val=$("#expr").val()
            val=val.substr(0,val.length-1)
            $("#expr").val(val)
        }
        else {
            var val = $("#expr").val()
            $("#expr").val($("#expr").val()+$(this).text())
        }


    })
});
