
var geneName=[]
var geneID=[]
function fun(gene_h){
  var num
  for(i=0;i<geneName.length;i++){
    if(gene_h==geneName[i]){
      num=i
      break
    }
    }
    window.location.href="http://solanaceae.plantbiology.msu.edu/cgi-bin/annotation_report.cgi?gene_id="+geneID[num]+"&Submit=Submit"
}

function gene_sch(){
  var textbox=document.querySelector('body > section > div.container.shape-container.d-flex.align-items-center.py-lg > div > div > div > li > form > div > div > input')
  var text=textbox.value
  if(text==''){
    window.alert("文本不能为空！")
  }
  else{
    var num
    var count=0
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
        window.alert("未查询到！")
      }
      else{
        window.location.href="http://solanaceae.plantbiology.msu.edu/cgi-bin/annotation_report.cgi?gene_id="+geneID[num]+"&Submit=Submit"
      }
  }
}




var geneStr

function task1 () {
  return new Promise(resolve => {
    setTimeout(() => {
      var url = "gene.csv"
      var request = new XMLHttpRequest();
      request.open("get", url);
      request.send(null);
      request.onload = function () {
      geneStr=request.responseText;
      }
      resolve('done');
    }, 400);
  });
}

function task2 () {

  return new Promise(resolve => {
    setTimeout(() => {
      console.log(geneStr)
     var gene=geneStr.split('\n')
    for(i=0;i<gene.length;i++){
      var genetemp=gene[i].split(',');
      geneName.unshift(genetemp[0]);
      geneID.unshift(genetemp[1]);
    }
      geneName.shift(0);
      geneID.shift(0);
      resolve('done');
    }, 400)
  });
}


function task3 () {
  return new Promise(resolve => {

    setTimeout(() => {
      var bd=document.getElementsByClassName('card shadow content-card list-card content-card-head')[0]

      var div=document.createElement("div");
      for(i=geneID.length-1;i>0;i--){
        var a=document.createElement("a");
        a.style='margin:0 50px'
        a.href='javascript:fun(\''+geneName[i]+'\')'
        var butt=document.createElement("button");
        butt.className='btn btn-icon btn-3 btn-outline-primary'
        butt.style="margin-bottom:30px;width:100px"
        butt.type='button'
        var span=document.createElement("span");
        span.textContent=geneName[i]
        span.clasName='btn-inner--text'
        butt.appendChild(span)
        a.appendChild(butt)
        div.appendChild(a)
        bd.appendChild(div)
}

      resolve('done');
    }, 400)
  });
}


async function allTasks () {
  await task1();
  await task2();
  await task3();
}




allTasks()
