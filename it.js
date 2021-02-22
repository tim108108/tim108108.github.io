console.log("bang");
console.log("bang");
console.log("bang");
console.log("http://www.colorhunt.co/c/81674");
function ShowTime(){
    var NowDate=new Date();
    var y=NowDate.getFullYear();
    var mo=NowDate.getMonth();
    var d=NowDate.getDate();
    var h=NowDate.getHours();
    var mi=NowDate.getMinutes();
    var s=NowDate.getSeconds();　
    document.getElementById('nowtime').innerHTML = '<br>目前時間&nbsp'+h+'時'+mi+'分'+s+'秒';
    document.getElementById('nowdate').innerHTML = '<br>西元&nbsp'+y+'年'+mo+'月'+d+'日';
    setTimeout('ShowTime()',1000);
    }
function processFormData() {
  const form = document.forms['updat'];
  const should = form.elements.should.value;
  const real = form.elements.real.value;
  document.getElementById('should').innerHTML = should;
  document.getElementById('real').innerHTML = real;
  //alert("should " + should + "\nreal " + real);
}