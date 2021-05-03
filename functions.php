<?php
/**
 * - глобалдьные константы
 * - wp-config
 * - подготовка Wordpress (ускорение/отключение лишнего)
 * - свои методы для работы со страницами/постами и тп.
 * - регистрирация основной ссылки на ajax
 * - свои методы для работы с ajax
 *
 * Author: Artem Zubarev aka iqwik
 **/

// глобальные константы
define('TEMPLATE_URL', get_bloginfo('template_url'));
define('SITE_URL', get_site_url());
define('SITE_NAME', get_bloginfo('name'));
define('ADMIN_EMAIL', get_option('admin_email'));
define('TEMPLATE_PARTS', 'php/templates/_parts/');
define('TEMPLATE_LIB', __DIR__ . '/php/lib/');
// wp-config
// пример, размещается в корневой директории сайта в файле wp-config.php
/*
define( 'WP_POST_REVISIONS', 0 ); // disable revision
// SMTP
define( 'SMTP_USER', 'example@mail.com' );
define( 'SMTP_PASS', '123456' );
define( 'SMTP_HOST', 'smtp.mail.com' );
define( 'SMTP_FROM', 'example@mail.com' );
define( 'SMTP_NAME', 'Website' );
define( 'SMTP_PORT', 465 );
define( 'SMTP_SECURE', 'ssl' );
define( 'SMTP_AUTH', true );
define( 'SMTP_DEBUG', 0 ); // Levels (0, 1, 2)
*/
function send_smtp_phpmailer($phpmailer) {
    $phpmailer->isSMTP();
    $phpmailer->Host       = SMTP_HOST;
    $phpmailer->SMTPAuth   = SMTP_AUTH;
    $phpmailer->Port       = SMTP_PORT;
    $phpmailer->Username   = SMTP_USER;
    $phpmailer->Password   = SMTP_PASS;
    $phpmailer->SMTPSecure = SMTP_SECURE;
    $phpmailer->From       = SMTP_FROM;
    $phpmailer->FromName   = SMTP_NAME;
    $phpmailer->SMTPDebug  = SMTP_DEBUG;
}
add_action( 'phpmailer_init', 'send_smtp_phpmailer' );

// подготовка Wordpress (ускорение/отключение лишнего)
include_once TEMPLATE_LIB . 'common/index.php';

// свои методы для работы со страницами/постами и тп.
include_once TEMPLATE_LIB . 'pages/index.php';

add_action('wp_footer', function() {
    $settings = json_encode([
        'settings' => [
            'title' => SITE_NAME,
            'description' => get_description(),
            'email' => ADMIN_EMAIL,
            'url' => SITE_URL,
        ],
    ]);
?>
    <script type="text/javascript">window.wp_data = <?php echo $settings; ?>;</script>
<?php
});

// свои методы для работы с ajax
//include_once  TEMPLATE_LIB . 'ajax/feedback.php';
