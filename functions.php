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

/*
#
#   REGISTER JS
#
*/

function lowermedia_scripts() {
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

add_action( 'wp_enqueue_scripts', 'lowermedia_scripts' );

add_filter('pre_get_posts', 'query_post_type');
function query_post_type($query) {
  if(is_category() || is_tag() || is_home() && empty( $query->query_vars['suppress_filters'] ) ) {
    $post_type = get_query_var('post_type');
    if($post_type)
        $post_type = $post_type;
    else
        $post_type = array('post','products','nav_menu_item');
    $query->set('post_type',$post_type);
    return $query;
    }
}

/**
 * Proper way to enqueue scripts and styles
 */
// function lowermedia_styles() {
//     wp_enqueue_style( 'style', get_stylesheet_uri() . '/style.css' );
// }
// add_action( 'wp_enqueue_scripts', array(&$this, 'style.css'), 99 );

//function lowermedia_styles(){
//    wp_enqueue_style('lowermedia_style', get_stylesheet_directory_uri() . '/style.css', array('lowermedia_style'));
//}
//add_action('wp_enqueue_scripts', 'lowermedia_styles');
