/**
 * He definido una función que se encargará de dar los estilos necesarios
 * a los diferentes elementos del documento.
 **/
$( function ( ) {

	//Estilos ul.
	$( "ul:nth-child(2) >" )
	.addClass( "horizontal" );
	$( "li >" )
	.addClass( "sub-level" );
	$( 'ul' )
	.find( 'li' )
	.eq( 0 )
	.addClass( "big-letter" );
	$( 'ul' )
	.find( 'li' )
	.eq( 5 )
	.addClass( "big-letter" );
	$( 'ul' )
	.find( 'li' )
	.eq( 9 )
	.addClass( "big-letter" );

	//Estilos enlaces.
	$( 'a[href^="mailto:"]' )
	.addClass( "mailto" );
	$( 'a[href$=".pdf"]' )
	.addClass( "pdflink" );
	$( 'a[href^="http:"]' && 'a[ href *= "henryv" ]' )
	.addClass( "external" );


	//Estilos tabla.
	$( 'tr:nth-child(odd)' )
	.addClass( "alt" );

	$( 'li > :contains("Henry")' )
	.addClass( "highlight" );
} );
