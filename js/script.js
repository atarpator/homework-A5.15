let var1 = $("input[name='var1']").val();
let var2 = $("input[name='var2']").val();
let var3 = $("input[name='var3']").val();
let var4 = $("input[name='var4']").val();
let var5 = $("input[name='var5']").val();
let var6 = $("input[name='var6']").val();
let speach = $("input[name='speach']").val();


$.getJSON('https://api.myjson.com/bins/jcmhn',function(data) {
			$('div#result').html(data.text);
		}
);


function changeText() {
$("div#result").each(function() {
    var text = $(this).text();
    text = text.replace(/{var1}/g, var1);
    $(this).text(text);
});

$("div#result").each(function() {
    var text = $(this).text();
    text = text.replace(/{var2}/g, var2);
    $(this).text(text);
});

$("div#result").each(function() {
    var text = $(this).text();
    text = text.replace(/{var3}/g, var3);
    $(this).text(text);
});

$("div#result").each(function() {
    var text = $(this).text();
    text = text.replace(/{var4}/g, var4);
    $(this).text(text);
});

$("div#result").each(function() {
    var text = $(this).text();
    text = text.replace(/{var5}/g, var5);
    $(this).text(text);
});

$("div#result").each(function() {
    var text = $(this).text();
    text = text.replace(/{var6}/g, var6);
    $(this).text(text);
});

$("div#result").each(function() {
    var text = $(this).text();
    text = text.replace(/{speach}/g, speach);
    $(this).text(text);
});

}

$("#button-change").click(changeText);