/*======================HEADER BACKGROUND===================== */
var className = 'inverted';
var scrollTrigger = 60;

window.onscroll = function ()
{
  if ( window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger )
  {
    document.getElementsByTagName( 'header' )[ 0 ].classList.add( className );
  } else
  {
    document.getElementsByTagName( 'header' )[ 0 ].classList.remove( className );
  }
}




/*=========================BACK TO TOP==================== */
var btn = $( '#button' );

$( window ).scroll( function ()
{
  if ( $( window ).scrollTop() > 100 )
  {
    btn.addClass( 'show' );
  } else
  {
    btn.removeClass( 'show' );
  }
} );

btn.on( 'click', function ( e )
{
  e.preventDefault();
  $( 'html, body' ).animate( { scrollTop: 0 }, '100' );
} );


// Back to top button
$( window ).scroll( function ()
{
  if ( $( this ).scrollTop() > 100 )
  {
    $( '#button' ).fadeIn( 'slow' );
  } else
  {
    $( '#button' ).fadeOut( 'slow' );
  }
} );
$( '#button' ).click( function ()
{
  $( 'html, body' ).animate( { scrollTop: 0 }, 1500, 'easeInOutExpo' );
  return false;
} );
