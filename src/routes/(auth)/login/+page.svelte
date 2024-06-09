<script>
	import Alert from '../../../lib/components/Alert.svelte';

	export let form;

	console.log(form)

	const response = form ? form.message : '';
</script>

<section>
	{#if response}
		<Alert message={response} color="danger" icon="x-circle" />
	{/if}
	<div
		class="outer ms-auto d-flex align-items-center justify-content-center bg-secondary-subtle opacity-75"
	>
		<form method="POST" class="w-75">
			<div class="input-group mb-1">
				<span class="input-group-text text-light"><i class="bi-person-circle" /></span>
				<div class="form-floating">
					<input
						type="email"
						class="form-control bg-dark-subtle"
						id="floatingInputGroup1"
						placeholder="Email User"
						name="email"
					/>
					<label for="floatingInputGroup1">Email User</label>
				</div>
			</div>
			<div class="input-group">
				<span class="input-group-text text-light"><i class="bi-key" /></span>
				<div class="form-floating">
					<input
						type="password"
						class="form-control bg-dark-subtle"
						id="floatingInputGroup1"
						placeholder="Password"
						name="password"
					/>
					<label for="floatingInputGroup1">Password</label>
				</div>
			</div>
			<div class="mt-3 d-flex justify-content-center">
				<button class="btn btn-login w-50 text-light" type="submit">Login</button>
			</div>
		</form>
	</div>
</section>

<style>
	section {
		background-image: url('../../../lib/img/wp.jpg');
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
		height: 100vh;
		opacity: 0.95;
	}
	.outer {
		width: 30%;
		height: 100vh;
	}
	button,
	input,
	span {
		border-radius: 0px;
	}
	.btn-login {
		background-color: #22223b;
	}
	.btn-login:hover {
		background-color: #22223bdf;
	}
	span {
		background-color: #22223b;
	}
</style>
