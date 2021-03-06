/*

gloss.js - simple interlinear gloss noting.
Author : Yoxem <yoxem.tem98^^^AT^^^nctu.edu.tw>
usage:
{% gloss}
I believe You.
Gua2 siong1-sin3 Li2.
{% endgloss}

*/

hexo.extend.filter.register('after_post_render', (data) => {
	var css_content = `
	.css-table1{
		display: table;
		border: none;}
		
	.css-tr1{
		display:table-row;
	}
	
	.css-td1{
		display: table-cell;
		padding-right: 1ex;
	}`;
	
	var css_rendered = css_content.replace(/([ ]|\t|\n)+/g, " ");


	var link_js = `<script type="text/javascript">
	var head = document.getElementsByTagName(\"head\");
	var link_css = document.createElement('style');
	
	link_css.setAttribute('type', 'text/css');
	link_css.innerHTML = '${css_rendered}';
	
	document.getElementsByTagName('head')[0].appendChild(link_css);</script>`;

	var link_js_rendered = link_js.replace(/(\t|\n)+/g, " ").replace(/‘/g, "'");

    data.content += link_js_rendered;
    return data;
});



hexo.extend.tag.register('gloss', function(args, content){


var content2dArray = [];
var contentSplitted = content.split("\n");
var content2dArrayMaxLen = 0;

for (var i=0; i < contentSplitted.length; i++){
    var SplittedInsideALine = contentSplitted[i].split(/\s+/);

	content2dArray.push(SplittedInsideALine);
}


var render_result = "";
	
for (var i=0; i<content2dArray.length; i++){
	var line_result = "<div class=\"css-tr1\">";

	for (var j=0; j<content2dArray[i].length; j++){
		line_result += ("<div class=\"css-td1\">" + content2dArray[i][j] + "</div>");
	}

	line_result += "</div>";
	
	render_result += line_result;
}

return "<div class='css-table1'>" + render_result + "</div></div></div>" },
{ends: true});
