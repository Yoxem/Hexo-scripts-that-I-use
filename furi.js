/*
furi.js (former furigana.js): A filter for Hexo to generate 2-language comparison like furigana. Place this file in /scripts/furigana.js.
========================================================================
Author: Yoxem <yoxem.tem98[ A T ]nctu.edu.tw>,kuanyui(azazabc123[at]g~~~m~~~a~~~i~~~l[dot]com)
Date: 20180730
License: WTFPL 1.0
========================================================================
The string in article:
    {fr|平安|peace}
Will be converted to: 2 lines.
*/

hexo.extend.filter.register('post', function(data, callback) {
	var reRb = new RegExp('\\{fr\\|(.+?)\\|(.+?)\\}', 'g');
	data.content = data.content.replace(reRb, '<div style="display:table;float:left;margin-right:0.2em;"><div style="display:table-row;">$1</div><div style="display:table-row;font-size:70%;text-align:center;">$2</div></div>');

// fre: added to the end punctuation of the line. eg. {fr|Eh|e}{frb|?}
	var reRb = new RegExp('\\{fre\\|(.+?)\\}', 'g');
	data.content = data.content.replace(reRb, '<div style="left:-0.2em;position: relative;">$1</div><div style="clear:left;"></div>');
	//callback(null, data);
    return data;
});
