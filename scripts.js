$( ()=> {
	document.body.onkeydown = (e)=> {
		if(!e.metaKey)
			e.preventDefault();
		$('#which').html(e.which);
		$('#code').html(e.code);
		$('#history').prepend('<option>' + e.which + ' | ' + e.code + '</option>');
		$('#hint').removeClass('highlight');
		$('#bodyDiv').removeClass('hidden');
	}
	$('#clear').click( ()=> $('#history').html('') );

	$('#copyWhichBtn').click( ()=>
		copyText($('#which').html() )
	);
	$('#copyCodeBtn').click( ()=>
		copyText($('#code').html() )
	);
});

function copyText(txt) {
	let tmp = $('<input type="text">').appendTo(document.body);
	tmp.val(txt);
	tmp.select();
	document.execCommand('copy');
	tmp.remove();	
}