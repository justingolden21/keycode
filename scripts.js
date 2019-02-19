$(function() {
	document.body.onkeydown = function(e) {
		if (!e.metaKey)
			e.preventDefault();
		document.getElementById('which').innerHTML = e.which;
		document.getElementById('code').innerHTML = e.code;
		$('#history').append('<option>' + e.which + ' | ' + e.code + '</option>');
	}
	$('#clear').click(function() {
		$('#history').html('');
	});
});
