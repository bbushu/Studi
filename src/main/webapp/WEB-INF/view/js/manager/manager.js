$(function() {
    function loadUserList(pg) {
        $.ajax({
            type: 'POST',
            url: '/admin/managerPage/getUserList',
            data: {pg: pg}, // 클릭한 페이징 번호를 사용하여 데이터 요청
            dataType: 'json',
            success: function (data) {
                console.log(JSON.stringify(data));
                // 사용자 리스트 표시
                var userListTable = $('#userListTable tbody');
                userListTable.empty();
                $.each(data.list, function (index, items) {
                    var result = `<tr>`
                        + `<td >` + items.name + `</td>`
                        + `<td ><a href="#" class="idA">` + items.userid + `</a></td>`
                        + `<td >` + items.pwd + `</td>` + `</a></td>`
                        + `<td >` + items.email + `</td>` + `</a></td>`
                        + `<td >` + items.phone + `</td>` + `</a></td>`
                        + `<td >` + items.hiredate + `</td>`
                        + `</tr>`;
                    userListTable.append(result);
                });

                // 페이징 처리
                $('#userPagingDiv').html(data.managerPaging.pagingHTML);
            },
            error: function (e) {
                console.log(e);
            }
        });
    }

    function loadUserList2(pg,input,value) {
        $.ajax({
            type: 'POST',
            url: '/admin/managerPage/getUserList2',
            dataType: 'json',
            data:{
                input: input,
                value: value,
                pg: pg},
                success: function(data) {
                    console.log(JSON.stringify(data));
                    // 사용자 리스트 표시
                    var userListTable = $('#userListTable tbody');
                    userListTable.empty();
                    $.each(data.list, function (index, items) {
                        var result = `<tr>`
                            + `<td >` + items.name + `</td>`
                            + `<td ><a href="#" class="idA">` + items.userid + `</a></td>`
                            + `<td >` + items.pwd + `</td>` + `</a></td>`
                            + `<td >` + items.email + `</td>` + `</a></td>`
                            + `<td >` + items.phone + `</td>` + `</a></td>`
                            + `<td >` + items.hiredate + `</td>`
                            + `</tr>`;
                        userListTable.append(result);
                    });

                    // 페이징 처리
                    $('#userPagingDiv').html(data.managerPaging.pagingHTML);
                },
                error: function(e) {
                    console.log(e);
                }
        });
    }

    function loadDashboard1(url){
        $.ajax({
            type: 'POST',
            url: url,
            dataType: 'json',
            success: function(data) {
                var labelList = [];
                var valueList = [];

                for (var i = 0; i < data.length; i++) {
                    var d = data[i];
                    labelList.push(d.date);
                    valueList.push(d.upload);
                }

                const ctx = document.getElementById('myChart').getContext('2d');
                var data = {
                    labels: labelList,
                    datasets: [{
                        label: '게시물 업로드 개수',
                        data: valueList,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                };

                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: data,
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            },
            error: function(e) {
                console.log(e);
            }
        });
        function changeDropdown(obj) {
            let DrondwonValue = $(obj).val();
            $('#search-input').attr('name', DrondwonValue);
        }
        function searchEvt() {
            searchBoard();
        };
    }

    function loadDashboard2(url){
        $.ajax({
            type: 'POST',
            url: url,
            dataType: 'json',
            success: function(data) {
                var labelList = [];
                var valueList = [];

                for (var i = 0; i < data.length; i++) {
                    var d = data[i];
                    labelList.push(d.date);
                    valueList.push(d.signups);
                }

                const ctx2 = document.getElementById('myChart2').getContext('2d');
                var data = {
                    labels: labelList,
                    datasets: [{
                        label: '가입자',
                        data: valueList,
                        borderColor: 'rgba(255, 99, 132, 1)',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        yAxisID: 'y',
                    }]
                };

                const myChart2 = new Chart(ctx2, {
                    type: 'line',
                    data: data,
                    options: {
                        responsive: true,
                        interaction: {
                            mode: 'index',
                            intersect: false,
                        },
                        stacked: false,
                        plugins: {
                            title: {
                                display: true,
                            }
                        },
                        scales: {
                            y: {
                                type: 'linear',
                                display: true,
                                position: 'left',
                            },
                        }
                    },
                });
            },
            error: function(e) {
                console.log(e);
            }
        });
    }


    $(document).ready(function() {
        // 대시보드 섹션을 보여줍니다.
        $(".dashboard-section").show();

        // 기존에 활성화된 항목들을 비활성화합니다.
        $(".nav-link").removeClass("active");
        $(this).addClass("active");

        $(function() {
            loadDashboard1('/admin/managerPage/boardUpload');
            loadDashboard2('/admin/managerPage/signupCounts');
        });

        $(".userlist-link").click(function(e) {
            e.preventDefault(); // 기본 동작 방지

            $("[class$='-section']").hide();

            $(".userlist-section").show();

            // 기존에 활성화된 항목들을 비활성화합니다.
            $(".nav-link").removeClass("active");
            $(this).addClass("active");
            // 페이지 로드 시 초기 데이터 로딩
            loadUserList($('#userPagingPg').val());
            $('#userPagingDiv').on('click', '.paging', function() {
                var pg = $(this).text();
                loadUserList(pg);
            });
        });

        // 대시보드 링크를 클릭했을 때
        $(".dashboard-link").click(function(e) {
            e.preventDefault(); // 기본 동작 방지

            $("[class$='-section']").hide();

            // 대시보드 섹션을 보여줍니다.
            $(".dashboard-section").show();

            // 기존에 활성화된 항목들을 비활성화합니다.
            $(".nav-link").removeClass("active");
            $(this).addClass("active");

            $(function() {
                loadDashboard1('/admin/managerPage/boardUpload');
                loadDashboard2('/admin/managerPage/signupCounts');
            });
        });


        // 알림 링크를 클릭했을 때
        $(".notice-link").click(function(e) {
            e.preventDefault(); // 기본 동작 방지

            $("[class$='-section']").hide();

            // 대시보드 섹션을 보여줍니다.
            $(".notice-section").show();

            // 기존에 활성화된 항목들을 비활성화합니다.
            $(".nav-link").removeClass("active");
            $(this).addClass("active");
        });

        //유저리스트 유저 검색
        $("#search-btn").click(function(e) {
            e.preventDefault();

            var input = $('#search-input option:selected').val();
            var value = $('#search-value').val();
            var pg =$('#userPagingPg').val();
            loadUserList2(pg,input,value);

            $('#userPagingDiv').on('click', '.paging', function() {
                var pg = $(this).text();
                loadUserList2(pg,input,value);
            });
        });

    });
});