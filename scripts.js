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
});