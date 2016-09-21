<?php

/**
 * Template Name: >> Theme Styleguide << 
 * 
 * An example template file showing the typography of your theme. It has all it needs
 * for you to test if your elements look good on different viewports, div wrappers, colors
 * and so on. 
 * 
 * There is a file - assets/sass/base/_preview.scss where you can setup all the colors and
 * extra stylings you need. You can use this as a styleguide file for your projects.
 * 
 * It is still work in progress, if you find something more that needs to be added please
 * open a GitHub issue at https://github.com/DevriX/DX-Starter/issues
 */
?>

<?php get_header(); ?>

<?php while ( have_posts() ) : the_post(); ?>

<div class="dxstarter-styleguide-wrapper">
	<!-- Separate each section this way onwards. -->
	<section class="fullwidth-section">
		<div class="dxstarter-styleguide">
			<div class="row">
				<div class="column">
					<header class="page-heading">
						<h1 class="page-header"><?php the_title() ?></h1><!-- .page-header -->
					</header><!-- .page-heading -->
				</div><!-- .columns -->
			</div><!-- .row -->

			<div class="row">
				<div class="column">
					<h2 class="section-title">Grid preview</h2>
				</div><!-- .column -->
			</div><!-- .row -->

			<div class="row">
				<div class="column">
					<h3>Column</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
				</div><!-- .column -->
			</div><!-- .row -->

			<hr />

			<div class="row">
				<div class="column">
					<h3>Column 1/2</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
				</div><!-- .column -->

				<div class="column">
					<h3>Column 1/2</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
				</div><!-- .column -->
			</div><!-- .row -->

			<hr />

			<div class="row">
				<div class="column">
					<h3>Column 1/3</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
				</div><!-- .column -->

				<div class="column">
					<h3>Column 1/3</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
				</div><!-- .column -->

				<div class="column">
					<h3>Column 1/3</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
				</div><!-- .column -->
			</div><!-- .row -->

			<hr />

			<div class="row">
				<div class="column">
					<h3>Column 1/4</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
				</div><!-- .column -->

				<div class="column">
					<h3>Column 1/4</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
				</div><!-- .column -->

				<div class="column">
					<h3>Column 1/4</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
				</div><!-- .column -->

				<div class="column">
					<h3>Column 1/4</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
				</div><!-- .column -->
			</div><!-- .row -->

		</div><!-- .dxstarter-styleguide -->
	</section><!-- .fullwidth-section -->

	<section class="fullwidth-section">
		<div class="dxstarter-styleguide">
			<div class="row">
				<div class="column">
					<h2 class="section-title">Colors</h2>
				</div><!-- .column -->
			</div><!-- .row -->

			<div class="row">
				<div class="column">
					<div class="theme-colors">
						<div class="colorbox color-primary">
							<div class="color"></div><!-- .color -->
							<code class="name">.color-primary</code>
						</div><!-- .colorbox -->

						<div class="colorbox color-secondary">
							<div class="color"></div><!-- .color -->
							<code class="name">.color-secondary</code>
						</div><!-- .colorbox -->

						<div class="colorbox color-accent">
							<div class="color"></div><!-- .color -->
							<code class="name">.color-accent</code>
						</div><!-- .colorbox -->

						<div class="colorbox color-neutral-dark">
							<div class="color"></div><!-- .color -->
							<code class="name">.color-neutral-dark</code>
						</div><!-- .colorbox -->

						<div class="colorbox color-neutral-light">
							<div class="color"></div><!-- .color -->
							<code class="name">.color-neutral-light</code>
						</div><!-- .colorbox -->

						<div class="colorbox color-divider">
							<div class="color"></div><!-- .color -->
							<code class="name">.color-divider</code>
						</div><!-- .colorbox -->

						<div class="colorbox color-text-body">
							<div class="color"></div><!-- .color -->
							<code class="name">.color-text-body</code>
						</div><!-- .colorbox -->

						<div class="colorbox color-text-muted">
							<div class="color"></div><!-- .color -->
							<code class="name">.color-text-muted</code>
						</div><!-- .colorbox -->
					</div><!-- .theme-colors -->
				</div><!-- .column small-4 medium-2 -->
			</div><!-- .row -->
		</div><!-- .dxstarter-styleguide -->
	</section><!-- .fullwidth-section -->
</div><!-- .dxstarter-styleguide-wrapper -->

<?php endwhile; ?>

<?php get_footer(); ?>
