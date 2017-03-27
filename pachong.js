/**
 * Created by chenxiang on 2017/3/27.
 */
var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio');
http.get("http://www.pku.edu.cn/about/index.htm", function(res) {
    var html = ''; // 保存抓取到的HTML源码
    var news = [];  // 保存解析HTML后的数据
    res.setEncoding('utf-8');
    // 抓取页面内容
    res.on('data', function(chunk) {
        html += chunk;
    });

    //网页内容抓取完毕
    res.on('end', function() {
        console.log(html);
    });

}).on('error', function(err) {
    console.log(err);
});
