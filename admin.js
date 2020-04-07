var duan = {} || duan;
duan.drawtable = function () {
    $.ajax({
        "url": "http://localhost:3000/dsduan",
        method: "GET",
        dataType: "json",
        success: function (data) {
            $('#dsduan').empty();
            id = 0;
            $.each(data, function (i, v) {
                id++;
                $('#dsduan').append(
                    "<tr>" +
                    "<td>" + id + "</td>" +
                    "<td><img src='" + v.anhduan + "' width='150px' heigth='150px'></td>" +
                    "<td>" + v.diachi + "</td>" +
                    "<td>" + v.vttk + "</td>" +
                    "<td>" + v.gia + "</td>" +
                    "<td>" +
                    "<a href='javascrip:;'><i class='fa fa-edit mr-3' onclick='duan.sua(" + v.id + ")'>Sửa</i></a>" +
                    "<a href='javascrip:;'><i class='fa fa-trash' onclick='duan.xoa(" + v.id + ")'>Xóa</i></a>" +
                    "</td>" +
                    "</tr>"
                );
            });
        }
    })
};
duan.themduan = function () {
    if ($('#formthemsua').valid()) {
        if ($('#id').val() == 0) {
            var duanmoi = {};
            duanmoi.diachi = $('#diachi').val()
            duanmoi.anhduan = $('#anh').val()
            duanmoi.vttk = $('#vttk').val()
            duanmoi.gia = $('#gia').val()

            $.ajax({
                "url": "http://localhost:3000/dsduan",
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(duanmoi),
                success: function (data) {
                    $('#themsua').modal('hide');
                    duan.drawtable();

                }
            })
        }
        else {
            var duanmoi = {};
            duanmoi.diachi = $('#diachi').val()
            duanmoi.anhduan = $('#anh').val()
            duanmoi.vttk = $('#vttk').val()
            duanmoi.gia = $('#gia').val()
            duanmoi.id = $('#id').val()
            $.ajax({
                "url": "http://localhost:3000/dsduan/" + duanmoi.id,
                method: "PUT",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(duanmoi),
                success: function (data) {
                    $('#themsua').modal('hide');
                    duan.drawtable();

                }
            })
        }
    }
}
duan.sua = function (id) {
    $.ajax({
        "url": "http://localhost:3000/dsduan/" + id,
        method: "GET",
        dataType: "json",
        success: function (data) {
            $('#anh').val(data.anhduan);
            $('#diachi').val(data.diachi);
            $('#vttk').val(data.vttk);
            $('#gia').val(data.gia);
            $('#id').val(data.id);
            $('#themsua').modal('show');
        }

    })
}
duan.xoa = function (id) {
    bootbox.confirm({
        message: "Bạn có chắc chắn xóa không?",
        buttons: {
            confirm: {
                label: 'Có',
                className: 'btn-success'
            },
            cancel: {
                label: 'Không',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
            if (result) {
                $.ajax({
                    "url": "http://localhost:3000/dsduan/" + id,
                    method: "DELETE",
                    dataType: "json",
                    success: function (data) {
                        duan.drawtable();
                    }
                })
            }
        }
    });
};
duan.resetmodal = function () {
    $('#anh').val('');
    $('#diachi').val('');
    $('#vttk').val('');
    $('#gia').val('');
    $('#id').val('0');
}
duan.openmodal = function () {
    duan.resetmodal();
    $('#themsua').modal('show');
}
duan.init = function () {
    duan.drawtable();
};
$(document).ready(function () {
    duan.init();
})