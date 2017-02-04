<?php
/**
 * Template Name: >> All sections <<
 *
 * Use this for reference when developing your themes. There
 * are comments to help you out setitng up these sections. Feel free
 * to use get_template_part or copy-paste the markup for more freedom.
 *
 * @since  v1.0.0
 * @package DevriX_Starter
 */

get_header(); ?>

<!-- This is a large background image with text overlaying it. -->
<?php get_template_part( 'snippets/section', 'hero' ); ?>

<div class="section-fullwidth inverted">
	<div class="row">
		<div class="columns">
			<p>
			...clearing away the brambles with the
			<span data-tooltip aria-haspopup="true" class="has-tip top" data-disable-hover="false" tabindex="2" title="You see?  I'm open!">tooltip will stay open</span>
			At the spot thus attained a second peg was driven, and about this, as a centre, a rude circle, about four feet in diameter, described. Taking now a spade himself, and giving one to Jupiter and one to me, Legrand begged us to set about one to digging as quickly as possible.
			</p>
			<?php get_template_part( 'snippets/flex', 'grid' ); ?>
		</div><!-- .columns -->
	</div><!-- .row -->
</div><!-- .section-fullwidth -->

<!-- Left and right aligned image with text next to them -->
<section class="section-fullwidth">
	<div class="row">
		<div class="column">
			<?php get_template_part( 'snippets/section', 'heading' ); ?>
			<?php get_template_part( 'snippets/section', 'halfsplit' ); ?>
		</div><!-- .column -->
	</div><!-- .row -->
</section><!-- .section-fullwidth -->

<div class="section-fullwidth border-top border-bottom">
	<div class="row">
		<div class="columns">
			<?php get_template_part( 'snippets/flex', 'grid' ); ?>
		</div><!-- .columns -->
	</div><!-- .row -->
</div><!-- .section-fullwidth -->

<!-- Basic fullwidth view. Open the file and grab what you need from there -->
<?php get_template_part( 'snippets/section', 'fullwidth-basic' ); ?>
<?php get_template_part( 'snippets/section', 'faq-large' ); ?>
<?php get_template_part( 'snippets/section', 'list-mirror' ); ?>

<?php get_footer(); ?>
