# NextJS SSR with WordPress
Boilerplate for nextjs ssr with wordpress

```
yarn
yarn dev
```

### functions.php additions (currently removed)
```
remove_filter( 'the_excerpt', 'wpautop' );
```

### Mac: terminal command to run chrome with security disabled for local routing testing
```
open -a Google\ Chrome --args --disable-web-security --user-data-dir=""
```

### Simple Custom Post Type from the WP Documentation
```
function create_post_type() {
  register_post_type( 'acme_product',
    array(
      'labels' => array(
        'name' => __( 'Products' ),
        'singular_name' => __( 'Product' )
      ),
      'public' => true,
	  'show_in_rest' => true,
      'has_archive' => true,
    )
  );
}
add_action( 'init', 'create_post_type' );
```