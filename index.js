var duan = duan || {};

duan.showDuan = function(){
    $.ajax({
        url: "http://localhost:3000/dsduan",
        method: "GET",
        dataType : "json",
        success : function(data){
            $.each(data, function(i, v){
                $('#show').append(
                    "<div class='col-lg-6 col-md-6 mb-4'>"+
                    "<div class='card h-100'>"+
                      "<img class='card-img-top' src='" + v.anhduan +"' alt=''>"+
                      "<div class='card-body'>"+
                        "<p class='card-text'>Địa chỉ: "+v.diachi+
                      "</div>"+
                      "<div class='card-footer'>"+
                        "<a href='javascript:;' class='btn btn-primary mr-5' onclick='duan.showchitiet("+v.id+")'>Xem chi tiết </a>"+
                        "<a href='#' class='btn btn-primary'> " + v.gia +" vnđ </a>"+
                      "</div>"+
                    "</div>"+
                  "</div>"
                );
            })
        }
    });
}



duan.init = function(){
    duan.showDuan();
}

$(document).ready(function(){
    duan.init();
});