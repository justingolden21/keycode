window.onload = ()=> {
	document.body.onkeydown = e => {
		if(!e.metaKey) e.preventDefault();
		u('#which').html(e.which);
		u('#code').html(e.code);
		u('#history').prepend('<option>' + e.which + ' | ' + e.code + '</option>');
		u('#hint').removeClass('highlight');
		u('#bodyDiv').removeClass('hidden');
	};
	u('#clear').on('click', ( ()=> u('#history').html('') ) );
	u('#copyWhichBtn').on('click', ( ()=> copyText(u('#which').html() ) ) );
	u('#copyCodeBtn').on('click', ( ()=> copyText(u('#code').html() ) ) );
};

function copyText(txt) {
	const tmp = document.createElement('textarea');
	tmp.value = txt;
	document.body.appendChild(tmp);
	tmp.select();
	document.execCommand('copy');
	document.body.removeChild(tmp);
}