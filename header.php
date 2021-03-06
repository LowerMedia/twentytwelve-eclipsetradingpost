<?php
/**
 * The Header template for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width, width=device-width" />
<meta name="google-site-verification" content="c34OJyv661m0aVBJ2QHXSGOvtUoZsFgnQMUCboppfXI" />
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<?php // Loads HTML5 JavaScript file to add support for HTML5 elements in older IE versions. ?>
<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
<![endif]-->
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
	<header id="masthead" class="site-header" role="banner">
		<hgroup>
			<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
			<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
			<div id='hgroup-img-wrap' class='hgroup-img-wrap alignleft'>
				<?php if(is_front_page()) { ?>
				<img src="/wp-content/themes/twentytwelve-eclipsetradingpost/eclipse-logo.png" />
				<?php } else { ?>
				<a alt='Eclipse Trading Post Home Link' title='Eclipse Trading Post Home Link' href='/'>
					<img src="/wp-content/themes/twentytwelve-eclipsetradingpost/eclipse-logo.png" />
				</a>
				<?php } ?>
			</div>
		</hgroup>
		<div id='site-slogan-holder' class='site-slogan-holder'>
			<p>Eclipse Trading Post continuously seeks to deliver the finest ethically traded, earth-friendly goods from around the planet to the public market.</p>
			<br/>
			<p>Check out our posts to learn more about the stories of artisans who create and the people who help make available our exquisite personal care products, accessories and home fashions.</p>
		</div>


		<?php if ( get_header_image() ) : ?>
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php header_image(); ?>" class="header-image" width="<?php echo get_custom_header()->width; ?>" height="<?php echo get_custom_header()->height; ?>" alt="" /></a>
		<?php endif; ?>
	</header><!-- #masthead -->
		<nav id="site-navigation" class="main-navigation" role="navigation">
			<h3 class="menu-toggle"><?php _e( 'Menu', 'twentytwelve' ); ?></h3>
			<a class="assistive-text" href="#content" title="<?php esc_attr_e( 'Skip to content', 'twentytwelve' ); ?>"><?php _e( 'Skip to content', 'twentytwelve' ); ?></a>
			<?
				/*
				#
				#	CUSTOM CODE THAT FIXES:
				#	Primary menu does not show up on product archive pages and category archive pages
				#	http://wordpress.org/support/topic/menus-not-displaying-on-archive-pages
				#
				*/

				// if(!getMainMenu('primary')) {
				//   $backup = $wp_query;
				//   $wp_query = NULL;
				//   $wp_query = new WP_Query(array('post_type' => 'post'));
				//   getMainMenu('primary');
				//   $wp_query = $backup;
				// }

				if (is_category) {
					$backup_query = $wp_query;
					$wp_query = new WP_Query(array('post_type' => 'post'));

					wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu', 'items_wrap' => '<ul id="%1$s" class="%2$s"><div>%3$s</div></ul>',) ); 

					$wp_query = $backup_query;
				} else {
					wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu', 'items_wrap' => '<ul id="%1$s" class="%2$s"><div>%3$s</div></ul>',) ); 
				}

			?>
		</nav><!-- #site-navigation -->
	<div id="main" class="wrapper">
		<div id="inner-main" class="inner-wrapper inner-main">
