function fun(gene){
        var gene_arr ={
'StPUB1':'PGSC0003DMG400022775',
'StPUB2':'PGSC0003DMG400032151',
'StPUB3':'PGSC0003DMG400021360',
'StPUB4':'PGSC0003DMG400021359',
'StPUB5':'PGSC0003DMG400021358'
}

var geneID=gene_arr[gene]
console.log();
console.log(geneID)
window.location.href="http://solanaceae.plantbiology.msu.edu/cgi-bin/annotation_report.cgi?gene_id="+geneID+"&Submit=Submit";
}

var url = "gene.json"/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
            var request = new XMLHttpRequest();
            request.open("get", url);/*设置请求方法与路径*/
            request.send(null);/*不发送数据到服务器*/
            request.onload = function () {/*XHR对象获取到返回信息后执行*/
                if (request.status == 200) {/*返回状态为200，即为数据获取成功*/
                    var json = JSON.parse(request.responseText);
                    for(var i=0;i<json.length;i++){
                    	console.log(json[i].name);
                    }
                    console.log(json);
                }
            }



