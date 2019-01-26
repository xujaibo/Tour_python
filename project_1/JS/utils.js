/**
 * Created by lzhan on 2019/1/8.
 */
function getData(url,args=null,cb) {
    // 创建Ajax对象
    var oAjax = null;
    oAjax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    //拼接url
    if(args){
       for(var key in args){

           url=addURLParam(url,key,args[key]);
       }
    }
    oAjax.open('get',url,true);
    // if(headers){
    //     for(var key in headers){
    //         oAjax.setRequestHeader(key,headers[key]);
    //     }
    // }
    oAjax.send(null);
    oAjax.onreadystatechange=function(){
        if(oAjax.readyState==4){
            if(oAjax.status>=200 && oAjax.status<300 || oAjax.status==304){
                var con=JSON.parse(oAjax.responseText);
                cb(con);
            }else{
                window.sessionStorage.setItem('status',oAjax.status);
                window.sessionStorage.setItem('statusText',oAjax.statusText);
                location.href='pages/404.html';
            }
        }
    }

    function addURLParam(url,name,value) {
        url+=(url.indexOf("?")==-1)?"?":"&";
        url+=encodeURIComponent(name)+"="+encodeURIComponent(value);
        return url;
    }

}


function postData(url,args=null,cb) {
    var oAjax = null;
    oAjax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');

    oAjax.open('post',url,true);


    //提交数据方式一
  //设置请求头：提交数据的格式是 x-www-form-urlencoded
  //   oAjax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  //   oAjax.send(addData(args));
    // oAjax.send('telephone=000&password=111');

    //提交方式二

    oAjax.setRequestHeader("Content-Type","application/json");
    oAjax.send(JSON.stringify(args));   //传输的只能是字符串，args为json，这里把json转化成字符串
    oAjax.onreadystatechange=function(){
        if(oAjax.readyState==4){
            if(oAjax.status>=200 && oAjax.status<300 || oAjax.status==304){

                var con=JSON.parse(oAjax.responseText);   //返回的responseText是字符换，转化成JSON
                cb(con);      //con是json，那么返回值res也是json
            }else{
                window.sessionStorage.setItem('status',oAjax.status);
                window.sessionStorage.setItem('statusText',oAjax.statusText);
                location.href='pages/404.html';
            }
        }
    }


    //转化格式
    function addData(con) {
        var str='';
        for(var key in con){
            str+=key+'='+con[key]+'&';
        }
        return str.slice(0,-1);
    }



}

// function saveToken(token) {
//     localStorage.setItem('token',token)
// }




