<script>
	import Header from '../../lib/components/Header.svelte';

	export let data
</script>

<svelte:head>
	<title>User Manager</title>
	<meta name="description" content="UserManager" />
</svelte:head>

<main class="position-relative">
	<div class="header position-absolute top-0 start-50 translate-middle-x">
		<Header name={data.token.name} />
	</div>
	<div class="content container">
		<div class="row justify-content-center">
			<div class="col-8"><slot /></div>
		</div>
	</div>
</main>

<style>
	main {
		background-size: cover;
		background-image: url('../../lib/img/bg.jpg');
	}
	.header {
		width: 100%;
		z-index: 1;
	}
	.content {
		height: 100vh;
		overflow-x: hidden;
		overflow-y: auto;
		padding-top: 70px;
		padding-bottom: 50px;
	}
</style>
