<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package DevriX_Starter
 */

?>

	</div><!-- #content -->
	<footer id="colophon" class="site-footer section-fullwidth">
		<i class="fas fa-edit"></i>
		<i class="fa fa-camera-retro fa-lg"></i>
		<i class="fa fa-camera-retro fa-2x"></i>
		<i class="fa fa-camera-retro fa-3x"></i>
		<a class="btn-cta-freequote" href="#">Get a FREE Quote <i class="fa fa-arrow-right"></i></a>
		<i class="fa fa-camera-retro fa-4x"></i>
		<i class="fa fa-camera-retro fa-5x"></i>
		<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
		<span class="sr-only">Loading...</span>

		<div class="row">
			<div class="columns small-12">
				<div class="site-info">
					<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'dxstarter' ) ); ?>"><?php printf( esc_html__( 'Proudly powered by %s', 'dxstarter' ), 'WordPress' ); ?></a>
					<span class="sep"> | </span>
					<?php printf( esc_html__( 'Developed by: %1$s.', 'dxstarter' ), '<a href="http://devrix.com">DevriX</a>' ); ?>
				</div><!-- .site-info -->
			</div><!-- .small-12 -->
		</div><!-- .row -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
