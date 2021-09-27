
var geneName=[]
var geneID=[]
var judge0=true
var judge1=false
var judge2=false
function fun(gene_h){
  var num
  for(i=0;i<geneName.length;i++){
    if(gene_h==geneName[i]){
      num=i;
      break;
    }
    }
    window.location.href="https://phytozome-next.jgi.doe.gov/report/gene/Stuberosum_v4_03/"+geneID[num]
}

function gene_sch(){
  var textbox=document.querySelector("body > section > div.container.shape-container.d-flex.align-items-center.py-lg > div > div > div > div > div > input")
  var text=textbox.value.replace(/\s/g, "");
  if(text==''){
    window.alert("Text property must not be blank!")
  }
  else{
    var num;
    var count=0;
    for(i=0;i<geneName.length;i++){
      if(text==geneName[i]){
        num=i
        break
      }
      else{
        count++;
      }
      }
      if(count==geneName.length){
        window.alert("Not found!")
      }
      else{
       window.location.href="https://phytozome-next.jgi.doe.gov/report/gene/Stuberosum_v4_03/"+geneID[num]

      }
  }
}
var geneStr
function getkey(e)
{
  var evt = window.event || e;
   if (evt.keyCode == 13){
     gene_sch();
   }
}
setInterval(() => {
  if(judge0){
  var url = "gene.csv"
  var request = new XMLHttpRequest();
  request.open("get", url);
  request.send(null);
  request.onload = function () {
  geneStr=request.responseText;
  }
  judge0=false
  judge1=true
}
}, 400);

setInterval(() => {
  if(judge1){
 var gene=geneStr.split('\n')
for(i=0;i<gene.length;i++){
  var genetemp=gene[i].split(',');
  geneName.unshift(genetemp[0]);
  geneID.unshift(genetemp[1]);
}
  geneName.shift(0);
  geneID.shift(0);
  judge1=false
  judge2=true
}
}, 500)

setInterval(() => {
    if(judge2){
  var bd=document.getElementsByClassName('card shadow content-card list-card content-card-head')[0];
  var div=document.createElement("div");
  for(i=geneID.length-2;i>=0;i--){
    var a=document.createElement("a");
    a.style='margin:0 65px'
    a.href='javascript:fun(\''+geneName[i]+'\')'
    var butt=document.createElement("button");
    butt.className='btn btn-icon btn-3 btn-outline-primary'
    butt.style="margin-bottom:50px;width:95px"
    butt.type='button'
    var span=document.createElement("span");
    span.textContent=geneName[i].replace(/\s/g, "")
    span.clasName='btn-inner--text'
    butt.appendChild(span)
    a.appendChild(butt)
    div.appendChild(a)
    bd.appendChild(div)
    judge2=false
}
}
}, 600)
