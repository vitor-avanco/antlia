<?php
/**
 * Antlia functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Antlia
 */

if ( ! function_exists( 'antlia_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function antlia_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Antlia, use a find and replace
		 * to change 'antlia' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'antlia', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'antlia' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'antlia_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'antlia_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function antlia_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'antlia_content_width', 640 );
}
add_action( 'after_setup_theme', 'antlia_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function antlia_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'antlia' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'antlia' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'antlia_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function antlia_scripts() {
	wp_enqueue_style( 'antlia-style', get_stylesheet_uri() );

	wp_enqueue_script( 'antlia-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'antlia-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'antlia_scripts' );

function cptui_register_my_cpts() {

	/**
	 * Post Type: Serviços.
	 */

	$labels = array(
		"name" => __( "Serviços", "antlia" ),
		"singular_name" => __( "Serviço", "antlia" ),
		"menu_name" => __( "Serviços", "antlia" ),
		"all_items" => __( "Todos os serviços", "antlia" ),
		"add_new" => __( "Adicionar serviço", "antlia" ),
		"add_new_item" => __( "Novo serviço", "antlia" ),
		"edit_item" => __( "Editar serviço", "antlia" ),
		"new_item" => __( "Novo serviço", "antlia" ),
		"view_item" => __( "Ver serviço", "antlia" ),
		"view_items" => __( "Ver serviços", "antlia" ),
		"search_items" => __( "Procurar serviço", "antlia" ),
		"not_found" => __( "Nenhum serviço encontrado", "antlia" ),
		"not_found_in_trash" => __( "Nenhum serviço encontrado", "antlia" ),
		"featured_image" => __( "Icone", "antlia" ),
		"set_featured_image" => __( "Escolher icone", "antlia" ),
		"remove_featured_image" => __( "Remover icone", "antlia" ),
		"use_featured_image" => __( "Usar icone", "antlia" ),
	);

	$args = array(
		"label" => __( "Serviços", "antlia" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "",
		"has_archive" => false,
		"show_in_menu" => true,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => array( "slug" => "servicos", "with_front" => true ),
		"query_var" => true,
		"supports" => array( "title", "editor", "thumbnail" ),
	);

	register_post_type( "servicos", $args );

	/**
	 * Post Type: produtos.
	 */

	$labels = array(
		"name" => __( "produtos", "antlia" ),
		"singular_name" => __( "Produto", "antlia" ),
		"menu_name" => __( "Produtos", "antlia" ),
		"all_items" => __( "Todos os produtos", "antlia" ),
		"add_new" => __( "Adicionar produto", "antlia" ),
		"add_new_item" => __( "Adicionar produto", "antlia" ),
		"edit_item" => __( "Editar produto", "antlia" ),
		"new_item" => __( "Adicionar produto", "antlia" ),
		"view_item" => __( "Ver produto", "antlia" ),
		"featured_image" => __( "Icone", "antlia" ),
		"set_featured_image" => __( "Escolher icone", "antlia" ),
		"remove_featured_image" => __( "Remover icone", "antlia" ),
		"use_featured_image" => __( "Usar icone", "antlia" ),
	);

	$args = array(
		"label" => __( "produtos", "antlia" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "",
		"has_archive" => false,
		"show_in_menu" => true,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => array( "slug" => "produtos", "with_front" => true ),
		"query_var" => true,
		"supports" => array( "title", "editor", "thumbnail" ),
	);

	register_post_type( "produtos", $args );

	/**
	 * Post Type: Vagas.
	 */

	$labels = array(
		"name" => __( "Vagas", "antlia" ),
		"singular_name" => __( "Vaga", "antlia" ),
		"menu_name" => __( "Vagas", "antlia" ),
		"all_items" => __( "Todas as vagas", "antlia" ),
		"add_new" => __( "Adicionar vaga", "antlia" ),
		"add_new_item" => __( "Adicionar nova vaga", "antlia" ),
		"edit_item" => __( "Editar vaga", "antlia" ),
		"new_item" => __( "Adicionar vaga", "antlia" ),
		"view_item" => __( "Ver vaga", "antlia" ),
		"view_items" => __( "Ver vagas", "antlia" ),
	);

	$args = array(
		"label" => __( "Vagas", "antlia" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "",
		"has_archive" => false,
		"show_in_menu" => true,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => array( "slug" => "vagas", "with_front" => true ),
		"query_var" => true,
		"supports" => array( "title", "editor", "thumbnail" ),
	);

	register_post_type( "vagas", $args );
}

add_action( 'init', 'cptui_register_my_cpts' );

/**
 * Remove the slug from published post permalinks. Only affect our custom post type, though.
 */
function gp_remove_cpt_slug( $post_link, $post, $leavename ) {
 
    if ( 'race' != $post->post_type || 'publish' != $post->post_status ) {
        return $post_link;
    }
 
    $post_link = str_replace( '/' . $post->post_type . '/', '/', $post_link );
 
    return $post_link;
}
add_filter( 'post_type_link', 'gp_remove_cpt_slug', 10, 3 );




function gp_add_cpt_post_names_to_main_query( $query ) {
	// Bail if this is not the main query.
	if ( ! $query->is_main_query() ) {
		return;
	}
	// Bail if this query doesn't match our very specific rewrite rule.
	if ( ! isset( $query->query['page'] ) || 2 !== count( $query->query ) ) {
		return;
	}
	// Bail if we're not querying based on the post name.
	if ( empty( $query->query['name'] ) ) {
		return;
	}
	// Add CPT to the list of post types WP will include when it queries based on the post name.
	$query->set( 'post_type', array( 'post', 'page', 'produtos', 'servicos', 'vagas' ) );
}
add_action( 'pre_get_posts', 'gp_add_cpt_post_names_to_main_query' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

