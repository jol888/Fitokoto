<div id="yiyanBlock">
<h4 id="yiyan"></h4>
<p>
<i id="yiyan-from" style="color:#303030"></i><br>
<i id="yiyan-from_who"></i></p>
</div>
<p>
<script src="https://cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>
<script>
newYiyan=()=>{
    var obj = { c:['a','b','c']}; //要传的参数
    var xhr = new XMLHttpRequest();  //这里没有考虑IE浏览器，如果需要择if判断加
    xhr.open('GET', "https://v1.hitokoto.cn?c=a&c=d",true);
    xhr.send(null);//这里要是没有参数传，就写null
    xhr.onreadystatechange = function () {
        if (xhr.status === 200 && xhr.readyState === 4) {
            json=JSON.parse(xhr.response);
            console.log(json)
            $('#yiyan').text(json['hitokoto']);
            $('#yiyan-from').text('「'+json.from+'」');
            $('#yiyan-from_who').text(json.from_who);
        }
    }
}
$(newYiyan)
$('#yiyanBlock').dblclick(newYiyan);</p>
<p></script>
</p>