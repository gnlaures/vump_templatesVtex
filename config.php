<?php
	$http = 'http://';
	$urllocal = '/vump_templatesVTEX';
	$title = 'Templates VTEX';

	#Retorna a página
	$URL = str_replace($urllocal, '', $_SERVER['REQUEST_URI']);
	$geturl = explode('/', $URL);
	$params = count($geturl);
	$pagina = explode('?', $geturl[1]);
	$pagina = reset($pagina);
	$fileSys = 'index.php';
	
	switch ($pagina) {
		case 'componentslist':
			$file = 'page_components.php';
			$title_page = 'Components - '.$title;
			break;
		
		case 'template1':
			$file = 'page_template1.php';
			$title_page = 'Template 1';
			break;
		case 'template1-produto':
			$file = 'page_template1_produto.php';
			$title_page = 'Template 1 - Produto';
			break;
		case 'template2':
			$file = 'page_template2.php';
			$title_page = 'Template 2';
			break;
		case 'template2-produto':
			$file = 'page_template2_produto.php';
			$title_page = 'Template 2 - Produto';
			break;

		case '' :
		case 'home' :
		default :
			$file = 'page_home.php';
			$title_page = $title;
			break;
	}

#Monta a base url
	$url_site = $http . $_SERVER['SERVER_NAME'] . $urllocal;
	$base_page = '<base href="' . $url_site . '/" />';
	include($fileSys);
?>