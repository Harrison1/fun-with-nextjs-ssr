# NextJS SSR with WordPress
Boilerplate for nextjs ssr with wordpress

```
yarn
yarn dev
```

### functions.php additions
```
remove_filter( 'the_excerpt', 'wpautop' );
```