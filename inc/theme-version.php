<?php

/**
 * Set a define variable for the assets version. This is going to be used, so we can prevent issues
 * with the caching.
 * 
 * An example format would be: 20180126, which means January, 26th 2018.
 * Use the hour, only of we have a few styling updates on the same day, e.g. 20180126-11:05
 */
if ( ! defined( 'DX_ASSETS_VERSION' ) ) {
	sdefine( 'DX_ASSETS_VERSION', '00000000-0' );
}