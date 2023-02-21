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

    document.getElementById('nowtime').innerHTML = '當前時間&nbsp'+h+'時'+mi+'分'+s+'秒';
    document.getElementById('nowdate').innerHTML = '&nbsp'+y+'年'+mo+'月'+d+'日';
    setTimeout('ShowTime()');
    }
function shouldreal() {
    const form = document.forms['srf'];
    const should = form.elements.should.value;
    const real = form.elements.real.value;
    document.getElementById('should').innerHTML = should;
    document.getElementById('real').innerHTML = real;
}
function processFormData() {
    const form = document.forms['updat'];
//============================================================
    var sel =form.elements.sel.value;

    var NowDate=new Date();
    var h=NowDate.getHours();
    var mi=NowDate.getMinutes();
    h = parseInt(h)+parseInt(sel);
    mi = parseInt(mi)+(sel-parseInt(sel))*60
    if (mi>=60){
    mi=parseInt(mi%60);
    h +=1;
    }
    document.getElementById('sel').innerHTML = h+ '時' + mi + '分';
    if(sel==0){document.getElementById('sel').innerHTML = ' ';}
    }
//=============================================================
//    document.getElementById('sel').innerHTML = sel;
//    alert("should " + should + "real " + real);
//    alert(sel)