$(function(){
$('input').focus(function(){
  $(this).css('border','1px solid green');
});
$('input').blur(function(){
  $(this).css('border','1px solid red');
});
});
// this permet de selectionner l'input concerner et pas tous les inputs ce qui serait le cas si à la place de this on met 'input'
