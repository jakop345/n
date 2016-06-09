<script type="text/javascript">
<!-- 
document.writeln(" <?php "); 
document.writeln(" if(($_GET['p']) == 'websites') { "); 
document.writeln("     print_r('Rai, Mediaset, Witty TV, LA7, any generic non super-protected website.'); "); 
document.writeln(" }; "); 
document.writeln(" if(isset($_GET['url'])) { "); 
document.writeln("     $file = __FILE__; "); 
document.writeln("     $url = ($_GET[\"url\"]); "); 
document.writeln("     $param = ($_GET[\"p\"]); "); 
document.writeln("     $cmd =  \"bash /var/www/video/api/api.sh\" .  ' ' . escapeshellarg($url) .  ' ' . escapeshellarg($param); "); 
document.writeln("     $message = shell_exec(\"$cmd\"); "); 
document.writeln("     print_r($message); "); 
document.writeln(" } "); 
document.writeln(" ?> ");
 // -->
</script>
