/*
ruby.js: A filter for Hexo to generate ruby chracters(ルビ). Place this file in /scripts/ruby.js.
========================================================================
Author: kuanyui(azazabc123[at]g~~~m~~~a~~~i~~~l[dot]com), Yoxem <yoxem.tem98[ A T ]nctu.edu.tw>
Date: 20180730
License: WTFPL 1.0
========================================================================
The string in article:
    {rb|機巧少女|machine doll}
Will be converted to:
    <ruby><rb>機巧少女</rb><rp>[</rp><rt>machine doll</rt><rp>]</rp></ruby>
*/

hexo.extend.filter.register('post', function(data, callback) {
	var reRb = new RegExp('\\{rb\\|(.+?)\\|(.+?)\\}', 'g');
	data.content = data.content.replace(reRb, '<ruby><rb>$1</rb><rp>[</rp><rt>$2</rt><rp>]</rp></ruby>');
	// callback(null, data);
    return data;
});
