(function ( less_options){

    // Document.ready
    if ( document.readyState !== 'complete') {
        var message = ("document not ready ! set loadOnReady=true on apex:includeScript");
        if (console) {
            console.error(message);
        } else {
            alert(message);
        }
    }
    
    var l,s;
    
    for (var i in less_options.files ) {
        l = document.createElement('link');
        l.setAttribute('rel','stylesheet/less');
        l.setAttribute('type','text/css');
        if (less_options.files.hasOwnProperty(i)) {
	        l.setAttribute('href',less_options.files[i]);
        }
    }

    s = document.createElement('script');
    s.setAttribute('type','text/javascript');
    s.setAttribute('src',less_options.compiler);

    document.body.appendChild(l);
    document.body.appendChild(s);
    
})(window.less_options);