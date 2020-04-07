var login = login || { };
login.check = function(){
    let tendn = $('#tendn').val();
    let mk = $('#matkhau').val();
    let isLogged = false;
    $.ajax({
        url:"http://localhost:3000/tuvanvien",
        method: "GET",
        dataType: "json",
        success: function(data){
            $.each(data, function(i, v){
                if(v.tendangnhap == tendn && v.matkhau == mk){
                    isLogged = true;
                    window.location.href = "admin.html";
                }
            })
            if(!isLogged){
                $('#danhnhapsai').removeClass('d-none');
            }
        }
    });
}

$(document).ready(function(){

});