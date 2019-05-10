/*
ZEUS ACCOUNT
*/

function accountBob(done){
	if(!window.DOMParser || !document.querySelector){
		return;
	}
	const form = document.forms[0];
	if(!form){
		return;
	}
	const timeout = 30;
	const jiji = document.querySelector(".jiji.account");
	const bob = jiji.querySelector("#bob-main");
	const parser = new DOMParser;
	const xhttp = new XMLHttpRequest();
	
	var error_cnt = bob.querySelector(".error");
	
	
	xhttp.onreadystatechange = function(){
		if(this.readyState === 4 && this.status === 200){
			checkError(this.responseText);
		}
	}
	xhttp.onerror = xhttp.ontimeout = conn_err;
	xhttp.timeout = 1000 * timeout;
	
	
	
	function go_done(){
		location.href = done;
	}
	function checkError(data){
		const DOM = parser.parseFromString(data, 'text/html');
		const main = DOM.querySelector("#bob-main");
		if(main){
			const error = main.querySelector(".error");
			if(error){
				showError(error.textContent);
			}
			else {
				go_done();
			}
		}
		else {
			go_done();
		}
	}
	
	function conn_err(){
		zeus_notification('Connection error, try again!'.fontcolor("red"), 1500);
		jiji.classList.remove("active");
	}
	
	function showError(text){
		if(!error_cnt){
			error_cnt = document.createElement("div");
			error_cnt.classList.add("error");
		}
		error_cnt.textContent = text;
		bob.prepend(error_cnt);
		jiji.classList.remove('active');
	}

	function makeRequest(){
		if(error_cnt){
			error_cnt.remove();
		}
		
		xhttp.abort();
		xhttp.open("GET", form.action, true);
		xhttp.send(null);
	}
	
	function bubble(ev){
		ev.preventDefault();
		jiji.classList.add('active');
		makeRequest();
	}
	
	jiji.classList.remove('active');
	form.addEventListener("submit", bubble);
}
