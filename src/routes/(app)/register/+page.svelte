<script>
	let password = '';
	let retype;
	let match;
	let passwordLength;

	$: {
		if (password === '') {
			match = 'is-invalid';
		} else if (password === retype && password.length >= 6) {
			match = 'is-valid';
		} else {
			match = 'is-invalid';
		}
	}
	$: {
		if (password.length >= 6) {
			passwordLength = 'is-valid';
		} else {
			passwordLength = 'is-invalid';
		}
	}
</script>

<h4 class="text-center my-2">REGISTRATION FORM</h4>
<div class="row justify-content-center">
	<div class="col-5 card p-3 rounded-4 shadow">
		<form method="post">
			<div class="mb-3">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="form-label">Name</label>
				<input type="text" class="form-control form-control-sm" name="name" required />
			</div>
			<div class="mb-3">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="form-label">Email</label>
				<input type="email" class="form-control form-control-sm" name="email" required />
			</div>
			<div class="mb-3">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="form-label">Password</label>
				<input
					type="password"
					class="form-control form-control-sm {passwordLength}"
					name="password"
					bind:value={password}
					required
				/>
				<div class="valid-feedback">Character length is accepted</div>
				<div class="invalid-feedback">Must be more than 6 characters</div>
			</div>
			<div class="mb-3">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="form-label">Retype Password</label>
				<input type="password" class="form-control form-control-sm {match}" bind:value={retype} />
				<div class="valid-feedback">Password is appropriate!</div>
				<div class="invalid-feedback">Password does not match</div>
			</div>
			<div class="mb-4">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="form-label">Role</label>
				<input type="text" class="form-control form-control-sm" name="role" required />
			</div>
			<div class="d-flex justify-content-center">
				<button
					class="btn btn-success text-center text-light"
					type="submit"
					disabled={match === 'is-valid' ? false : true}>Submit</button
				>
			</div>
		</form>
	</div>
</div>

<style>
	h4{
		font-weight: 700;
	}
	.btn {
		border: none;
		color: #2a9d8f;
	}
	.btn:hover {
		color: #264653;
	}
	label {
		font-weight: 600;
	}
</style>
