/*var x = NaN;
var y = 2.0;
y = "hello";
var z = {
	airline : "asia",
	num:815,
	depart:{
	time:"2014-1-5",
	city:"shanghai"
	},
	arrival:{
	IATA:"lax",
	time:"2014-1-6",
	city:"beijing"
	}
};

z.num = 818;
var name;
for(name in z){
	document.writeln(name + ":" + z[name]);
}*/

var data = [4,8,15,16,23,42];
var add = function(a,b){
	return a+b;	
};
var mult = function(a,b){
	return a*b;
};

var sum = data.reduce(add,0);
var product = data.reduce(mult,1);
document.writeln("aaa");
document.writeln(sum);
document.writeln(product);

var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

var url = "http://www.ora.com:80/goodparts?q#fragment";
//var url = "www.baidu.com";

var result =  parse_url.exec(url);

var names = ['url','scheme','slash','host','port','path','query','hash'];

var blanks = '	';
for(var i = 0; i < names.length;i++){
	document.writeln(names[i]+":"+blanks.substring(names[i].length),result[i]);
}


var arr1 = ['a','b','c'];
var arr2 = ['x','y','z'];
var arr3 = arr1.concat(arr2,true);
document.writeln(arr3);
document.writeln(arr2);
































