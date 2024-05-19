<script>
	export let id;
	export let name;
</script>

<div
	class="modal fade"
	id="deleteUser{id}"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-body d-flex justify-content-center align-items-center">
				<span
					>Apakah Anda yakin ingin menghapus user <span class="name">{name}</span
					>?</span
				>
			</div>
			<div class="modal-footer d-flex justify-content-center">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
				<form method="POST">
					<input type="hidden" name="id" value={id} />
					<button type="submit" class="btn btn-danger">Ya!</button>
				</form>
			</div>
		</div>
	</div>
</div>

<style>
	.modal-body {
		height: 80px;
	}
	.btn {
		font-size: 13px;
	}
	.name {
		font-weight: 700;
	}
</style>
