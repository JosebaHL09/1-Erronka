$(".restaurant").click(function (event) {
    var id = this.id;
    $(".spinner").show();
    setTimeout(function(){ 
        window.location.href = "../show_jatetxea?id="+id+"";
        $(".spinner").hide();
    }, 500);
})