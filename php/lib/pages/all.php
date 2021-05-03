<?php
function get_description() {
    $cat_desc = is_single() ? get_the_title() . " | " . get_bloginfo('description') : category_description();
    return $cat_desc ? preg_replace('/^\s*(<p>)|(<\/p>)|\s+$/','',$cat_desc) : get_bloginfo('description');
}
