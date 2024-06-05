<script>
	import disable from '../../lib/img/disable.gif';
</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="MOMA" />
</svelte:head>

<main id="desktop">
	<slot />
</main>
<main id="mobile" class="d-none position-absolute top-50 start-50 translate-middle">
	<img src={disable} class="img-fluid" alt="" />
	<h1 class="text-center">Access not available for mobile!</h1>
</main>

<style>
	@media screen and (max-width: 1000px) {
		#desktop {
			display: none;
		}
		#mobile {
			display: block !important;
		}
	}
	#desktop {
		overflow-x: hidden;
	}
	#mobile h1 {
		font-size: 3vw;
		font-weight: 300;
	}
</style>
