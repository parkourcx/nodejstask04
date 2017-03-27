/**
 * Created by chenxiang on 2017/3/20.
 */
var PORT = 9529;//设定监听的端口号
var http =require('http');
var qs = require('qs');
var TOKEN = 'chenxiangwd';//我自己设定的token
function checkSignature(params,token) {
    var key = [token,params.timeStamp,params.nonce].sort().join('');//将token （自己设置的） 、timestamp（时间戳）、nonce（随机数）三个参数进行字典排序
    var sha1 = require('crypto').createHash('sha1'); //将上面三个字符串拼接成一个字符串再进行sha1加密
    sha1.update(key);
    return sha1.digest('hex') == params.signature; //将加密后的字符串与signature进行对比
}//建立一个服务
var server = http.createServer(function (request,response) {
    var query = require('url').parse(request.url).query;
    var params = qs.parse(query);
    console.log(params);
    console.log('token-->',TOKEN);

    if(checkSignature(params,TOKEN)){
        response.end(params.echostr);

    }else{
        response.end('failed');
    }

});

server.listen(PORT);
console.log("server Running at port" + PORT + ".");/**
 * Created by chenxiang on 2017/3/27.
 */
