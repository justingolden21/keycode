window.onload = ()=> {
	document.body.onkeydown = e => {
		if(!e.metaKey) e.preventDefault();
		u('#which').html(e.which);
		u('#code').html(e.code);
		u('#key').html(e.key);
		u('#keyCode').html(e.keyCode);
		u('#history').prepend('<option>' + e.which + ' &mdash; ' + e.code + ' &mdash; ' + e.key + ' &mdash; ' + e.keyCode + '</option>');
		u('#hint').removeClass('highlight');
		u('#bodyDiv').removeClass('hidden');
	};
	u('#clear').on('click', ( ()=> u('#history').html('') ) );
	u('#copyWhichBtn').on('click', ( ()=> copyText(u('#which').html() ) ) );
	u('#copyCodeBtn').on('click', ( ()=> copyText(u('#code').html() ) ) );
	u('#copyKeyBtn').on('click', ( ()=> copyText(u('#key').html() ) ) );
	u('#copyKeyCodeBtn').on('click', ( ()=> copyText(u('#keyCode').html() ) ) );
};

function copyText(txt) {
	const tmp = document.createElement('textarea');
	tmp.value = txt;
	document.body.appendChild(tmp);
	tmp.select();
	document.execCommand('copy');
	document.body.removeChild(tmp);
}