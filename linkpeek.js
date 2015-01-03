( function() {

  var linkpeek = document.createElement( 'b' );
  linkpeek.id = 'linkpeek';
  document.body.appendChild( linkpeek );

  var visible, showTimeout, hideTimeout;

  document.body.addEventListener( 'mouseover', function( event ) {

    if ( event.target.nodeName !== 'A' ) return;

    linkpeek.innerHTML = event.target.href;

    window.clearTimeout( hideTimeout );
    visible = true;
    showTimeout = window.setTimeout( function() {
      linkpeek.style.opacity = '0.9';
    }, 500 );

  });

  document.addEventListener( 'mouseout', function( event ) {

    if ( event.target.nodeName !== 'A' ) return;

    window.clearTimeout( showTimeout );
    hideTimeout = window.setTimeout( function() {
      linkpeek.style.opacity = '0.0';
      visible = false;
    }, 100 );

  });

})();
