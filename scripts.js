$(function() {
	document.body.onkeydown = function(e) {
		if (!e.metaKey)
			e.preventDefault();
		document.getElementById('which').innerHTML = e.which;
		document.getElementById('code').innerHTML = e.code;
		$('#history').prepend('<option>' + e.which + ' | ' + e.code + '</option>');
		$('#hint').removeClass('highlight');
		$('#bodyDiv').removeClass('hidden');
	}
	$('#clear').click(function() {
		$('#history').html('');
	});
});
