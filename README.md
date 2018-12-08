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

### Mac Run Chrome security disabled for local routing testing
```
open -a Google\ Chrome --args --disable-web-security --user-data-dir=""
```