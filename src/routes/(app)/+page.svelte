<script>
	import ModalDelete from '../../lib/components/ModalDelete.svelte';

	export let data;

	const users = data.data.length > 0 ? data.data : [];
</script>

<div class="d-flex justify-content-evenly mt-3">
	<h2>USERS LIST</h2>
	<a href="/register" class="btn btn-primary register mb-3">Register</a>
</div>
<div class="card px-4 pt-4 pb-2 rounded-4 shadow">
	<table class="table table-bordered">
		<thead class="text-center">
			<tr>
				<th scope="col">No</th>
				<th scope="col">Name</th>
				<th scope="col">Email</th>
				<th scope="col">Role</th>
				<th scope="col">Password</th>
				<th scope="col">Actions</th>
			</tr>
		</thead>
		<tbody class="text-center">
			{#each users as user, index}
				<tr>
					<td class="align-middle">{index + 1}</td>
					<td class="text-start align-middle">{user.Name}</td>
					<td class="align-middle">{user.Email}</td>
					<td class="align-middle">{user.Role}</td>
					<td class="align-middle">**********</td>
					<td>
						<div>
							<a href="/update/{user.ID}"><i class="bi-input-cursor btn btn-sm btn-success"></i></a>
							<i
								class="bi-trash btn btn-sm btn-danger"
								data-bs-toggle="modal"
								data-bs-target="#deleteUser{user.ID}"
							></i>
							<ModalDelete id={user.ID} name={user.Name} />
						</div>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	h2 {
		font-weight: 700;
	}
	.register {
		width: 15%;
	}
</style>
