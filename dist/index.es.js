var t=function(){function t(){}return t.prototype.greet=function(t){return"Hello, "+t},t}(),e=function(){function e(){this.greet=new t}return e.prototype.hello=function(t){return this.greet.greet(t)},e}();export default e;
