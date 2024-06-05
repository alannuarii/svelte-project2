<script>
	import icon from '../../../lib/img/icon.png';
	import Alert from '../../../lib/components/Alert.svelte';

	export let form;

	const response = form ? form.message : '';
</script>

<section>
	{#if response}
		<Alert message={response} color="danger" icon="x-circle" />
	{/if}
	<div
		class="outer position-absolute top-50 start-50 translate-middle border p-5 bg-secondary-subtle opacity-75"
	>
		<div class="icon d-flex justify-content-center align-items-center mb-3">
			<img src={icon} alt="" />
			<!-- <h3 class="ms-2">MOMA</h3> -->
		</div>
		<form method="POST">
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
				<button class="btn btn-outline-secondary w-50" type="reset">Reset</button>
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
		opacity: 0.8;
	}
	.outer {
		width: 30%;
		border-radius: 50px;
	}
	button,
	input,
	span {
		border-radius: 0px;
	}
	img {
		height: 80px;
	}
	/* h3 {
		font-weight: 700;
		font-size: 50px;
	} */
	.icon {
		margin-top: -12px;
	}
	.btn-login {
		background-color: #43a6a3;
	}
	.btn-login:hover {
		background-color: #43a6a3df;
	}
	span {
		background-color: #43a6a3;
	}
</style>
