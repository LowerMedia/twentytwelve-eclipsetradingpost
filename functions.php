<?php 

/*
#
#   ADD PRODUCTS CONTENT TYPE (CUSTOM POST TYPE)
#
*/

function products_custom_init() {
  $labels = array(
    'name' => 'Products',
    'singular_name' => 'Product',
    'add_new' => 'Add Product',
    'add_new_item' => 'Add New Product',
    'edit_item' => 'Edit Product',
    'new_item' => 'New Product',
    'all_items' => 'All Products',
    'view_item' => 'View Product',
    'search_items' => 'Search Products',
    'not_found' =>  'No Products found',
    'not_found_in_trash' => 'No Products found in Trash', 
    'parent_item_colon' => '',
    'menu_name' => 'Products'
  );

  $args = array(
    'labels' => $labels,
    'description'   => 'Eclipse Trading Post Product',
    'menu_position' => 1,
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true, 
    'show_in_menu' => true, 
    'query_var' => true,
    'rewrite' => array( 'slug' => 'eclipse-products' ),
    'capability_type' => 'post',
    'has_archive' => true, 
    'hierarchical' => false,
    'menu_position' => null,
    'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' ),
    'taxonomies' => array('category', 'post_tag')
  ); 

  register_post_type( 'products', $args );
}
add_action( 'init', 'products_custom_init' );

/*
 function people_custom_init() {
   $labels = array(
     'name' => 'People',
     'singular_name' => 'Person',
     'add_new' => 'Add Person',
     'add_new_item' => 'Add New Person',
     'edit_item' => 'Edit Person',
     'new_item' => 'New Person',
     'all_items' => 'All People',
     'view_item' => 'View Person',
     'search_items' => 'Search People',
     'not_found' =>  'No People found',
     'not_found_in_trash' => 'No People found in Trash', 
     'parent_item_colon' => '',
     'menu_name' => 'People'
   );

   $args = array(
     'labels' => $labels,
     'description'   => 'Eclipse Trading Post Person',
     'menu_position' => 1,
     'public' => true,
     'publicly_queryable' => true,
     'show_ui' => true, 
     'show_in_menu' => true, 
     'query_var' => true,
     'rewrite' => array( 'slug' => 'eclipse-people' ),
     'capability_type' => 'post',
     'has_archive' => true, 
     'hierarchical' => false,
     'menu_position' => null,
     'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' ),
     'taxonomies' => array('category', 'post_tag')
   ); 

   register_post_type( 'people', $args );
 }
 add_action( 'init', 'people_custom_init' );
*/
// flush_rewrite_rules();
// add_action('admin_init', 'flush_rewrite_rules');
/*
#
#   REGISTER JS
#
*/

function is_ipad() {
    $is_ipad = (bool) strpos($_SERVER['HTTP_USER_AGENT'],'iPad');
    if ($is_ipad)
        return true;
    else return false;
}
function is_iphone() {
    $cn_is_iphone = (bool) strpos($_SERVER['HTTP_USER_AGENT'],'iPhone');
    if ($cn_is_iphone)
        return true;
    else return false;
}

function lowermedia_scripts() {
    if (!is_iphone()){
        wp_enqueue_script(
            'continent-map',
            get_stylesheet_directory_uri() . '/continentmap.js',
            array( 'jquery' )
        );

        wp_enqueue_script(
            'map-data',
            get_stylesheet_directory_uri() . '/mapdata.js',
            array( 'jquery' )
        );
    }
}

add_action( 'wp_enqueue_scripts', 'lowermedia_scripts' );

/*
#
#   Make Archives.php Include Custom Post Types
#   http://css-tricks.com/snippets/wordpress/make-archives-php-include-custom-post-types/
#
*/

function namespace_add_custom_types( $query ) {
  if( is_category() || is_tag() && empty( $query->query_vars['suppress_filters'] ) ) {
    $query->set( 'post_type', array(
     'post', 'products'
        ));
      return $query;
    }
}
add_filter( 'pre_get_posts', 'namespace_add_custom_types' );

// Define what post types to search
function searchAll( $query ) {
    if ( $query->is_search ) {
        $query->set( 'post_type', array( 'post', 'page', 'feed', 'products', 'people'));
    }
    return $query;
}

// The hook needed to search ALL content
add_filter( 'the_search_query', 'searchAll' );

/*
#
#   http://wordpress.org/support/topic/wp-nav-menu-dissapears-in-category-pages-1?replies=21
#
#
*/

function getMainMenu($menulocation){
  $locations = get_nav_menu_locations();
  $menuItems = wp_get_nav_menu_items( $locations[ $menulocation ] );
    if(empty($menuItems))
      return false;
    else{
      //wp_nav_menu(array('theme_location' => $menulocation));
      return true;
    }
}

/*
#
#	ADJUSTING EXPERT/READMORE TEXT
#   http://codex.wordpress.org/Function_Reference/the_excerpt
#
#
*/

function custom_excerpt_length( $length ) {
	return 20;
}
add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );

function new_excerpt_more( $more ) {
	return ' <a class="read-more" href="'. get_permalink( get_the_ID() ) . '">' . __('... Read More', 'LowerMedia') . '</a>';
}
add_filter( 'excerpt_more', 'new_excerpt_more' );

function squareup_shortcode() {
    return '<a href="https://mkt.com/eclipse-trading-post" 
class="sq-embed-menu" 
data-menu-item-images="large" 
data-menu-accent-color="3f4040" 
data-menu-template="column" 
data-menu-border="hide"
data-menu-item-descriptions="show"> 
Order Online 
</a> 
<script src="https://cdn.sq-api.com/market/embed.js" charset="utf-8"> </script>';
}
add_shortcode('squareup', 'squareup_shortcode');

