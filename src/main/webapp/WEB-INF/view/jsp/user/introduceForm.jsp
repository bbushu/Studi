<%--
  Created by IntelliJ IDEA.
  User: KTJ
  Date: 2024-04-02
  Time: 오후 5:37
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="ko">
<head class="navbar navbar-expand-lg bd-navbar sticky-top">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원소개 화면</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <link rel="stylesheet" href="../../css/header.css">
    <link rel="stylesheet" href="../../css/introduceForm.css">

</head>
<body>
<%@ include file="../include/header.jsp"%>


<form action="user/introduce" >
    <div class="input-form-background row mb-0 mt-0">
        <div class="input-form col-md-12 mx-auto">
            <label for="position"><span>주요 포지션</span></label>
            <input type="text" class="form-control" id="position" placeholder="back-end" required >
        </div>
    </div>
    <div class="input-form-backgroud row mb-0 mt-0 p-1">
        <div class="input-form col-md-12 mx-auto">
            <label for="career"><span>경력/신입</span></label>
            <input type="text" class="form-control" id="career" name="career" placeholder="경력" required >
        </div>
    </div>
    <div class="input-form col-md-12 mx-auto mb-0 mt-0 p-1">
        <label for="skill"><span>사용가능 언어(다중선택)</span></label>
        <div class="skill" id="skill" role="group" aria-label="Basic checkbox toggle button group" >
            <input type="checkbox" class="btn-check" id="java" >
            <label class="btn btn-outline-dark" for="java">JAVA</label>
            <input type="checkbox" class="btn-check" id="c" >
            <label class="btn btn-outline-dark" for="c">C</label>
            <input type="checkbox" class="btn-check" id="cpp" >
            <label class="btn btn-outline-dark" for="cpp">C++</label>
            <input type="checkbox" class="btn-check" id="cs" >
            <label class="btn btn-outline-dark" for="cs">C#</label>
            <input type="checkbox" class="btn-check" id="python" >
            <label class="btn btn-outline-dark" for="python">Python</label>
            <input type="checkbox" class="btn-check" id="javascript" >
            <label class="btn btn-outline-dark" for="javascript">javascript</label>
            <input type="checkbox" class="btn-check" id="kotlin" >
            <label class="btn btn-outline-dark" for="kotlin">kotlin</label>
            <input type="checkbox" class="btn-check" id="go" >
            <label class="btn btn-outline-dark" for="go">Go</label>
            <input type="checkbox" class="btn-check" id="mysql" >
            <label class="btn btn-outline-dark" for="mysql">MySQL</label>
            <input type="checkbox" class="btn-check" id="oracle" >
            <label class="btn btn-outline-dark" for="oracle">Oracle</label>
        </div>
    </div>
    <div class="input-form-backgroud row mb-0 mt-0 p-1">
        <div class="mb-3">
            <div class="input-form col-md-12 mx-auto">
                <label for="simpleIntroduce"><span>간단한 소개</span></label>
                <input type="text" class="form-control" id="simpleIntroduce" name="introduce" required >
                <div class="button-container mt-3 col-md-6 ms-auto">
                    <button type="submit" id="insertBtn" class="btn btn-outline-dark btn-lg" >입력</button>
                    <button type="button" id="cancelBtn" class="btn btn-outline-dark btn-lg" >취소</button>
                </div>
            </div>
        </div>
    </div>
</form>
<%@include file="../include/footer.jsp"%>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<script type="text/javascript" src="http://code.jQuery.com/jquery-3.7.1.min.js"></script>
<%--<script type="text/javascript" src="${pageContext.request.contextPath}/js/user/introduce.js"></script>--%>
</body>
</html>
