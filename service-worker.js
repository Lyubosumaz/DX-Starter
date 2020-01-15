importScripts( "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js" );

if ( workbox ) {
	cacheAssets();
}

function cacheAssets() {
	workbox.setConfig({ debug: true });

	workbox.routing.registerRoute(
		/\/wp-content\/themes\/dx-starter\/.+\.(?:css|js)\?ver=.+/,
		new workbox.strategies.StaleWhileRevalidate({
			cacheName: "assets",
			plugins: [
				new workbox.expiration.Plugin({
					maxEntries: 1000,
					maxAgeSeconds: 31536000
                }),
                new workbox.cacheableResponse.Plugin({
                    statuses: [0, 200],
                })
			]
		})
	);
}
