
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
    console.log(gene_h,geneName[77],num,geneName[77]==gene_h)
    //window.location.href="http://solanaceae.plantbiology.msu.edu/cgi-bin/annotation_report.cgi?gene_id="+geneID[num]+"&Submit=Submit"
  
}


var geneStr

function task1 () {
  return new Promise(resolve => {
    setTimeout(() => {
      var url = "gene.csv"/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
      var request = new XMLHttpRequest();
      request.open("get", url);/*设置请求方法与路径*/
      request.send(null);/*不发送数据到服务器*/
      request.onload = function () {/*XHR对象获取到返回信息后执行*/
      geneStr=request.responseText;
      }
      resolve('done');
    }, 300);
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
    }, 300)
  });
}



async function allTasks () {
  await task1();
  await task2();
}

            


allTasks()







