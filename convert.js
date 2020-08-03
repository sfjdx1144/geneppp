
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
    geneName=["a","b"]
    geneID=["c","d"]
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
        window.alert(geneID[num])
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
      console.log('2', '第二个任务');
      console.log(geneStr)
     var gene=geneStr.split('\n')
    for(i=0;i<gene.length;i++){
      var genetemp=gene[i].split(',');
      geneName.unshift(genetemp[0]);
      geneID.unshift(genetemp[1]);
    }
      geneName.shift(1);
      geneID.shift(1);
      resolve('done');
    }, 400)
  });
}



async function allTasks () {
  await task1();
  await task2();
}




allTasks()
