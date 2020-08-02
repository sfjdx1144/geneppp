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




url=$.get('./genedata/gene.csv');
console.log(url);
