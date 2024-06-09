<script>
	export let name;
</script>

<nav class="navbar bg-dark">
	<div class="container-md d-flex justify-content-around">
		<a href="/" class="navbar-brand text-light">User Manager</a>
		<div class="text-warning">
			<i class="bi bi-star-fill me-1"></i><span>{name}</span>
		</div>
		<a href="/logout" class="btn btn-sm btn-outline-secondary">Logout</a>
	</div>
</nav>

<style>
	.navbar-brand {
		font-weight: 700;
	}
	span{
		font-weight: 700;
	}
</style>
