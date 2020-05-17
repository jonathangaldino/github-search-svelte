<script>
	import api from '../services/api';
	import { addRepo } from '../store';
	
	let repo = 'jonathangaldino/scrimbuff';

	const handleFormSubmit = async () => {
		const { data } = await api.get(`/${repo}`);

		const { full_name, description, owner: { avatar_url} } = data;

		const repoToAdd = {
			name: full_name,
			description,
			avatar: avatar_url
		}

		addRepo(repoToAdd);
	}

</script>

<section>
	<form on:submit|preventDefault="{handleFormSubmit}">
		<input type="text" placeholder="user/repo" bind:value={repo} />

		<button type="submit">Search</button>
	</form>
</section>

<style>
	section {
		margin-top: 80px;
		width: 100%;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	form {
		max-width: 700px;
		display: flex;		
		flex: 1;
	}

	button, input {
		border: 0;
		outline: 0;
		background: transparent;
		margin: 0;
	}

	input {
		flex: 1;
    height: 70px;
    padding: 0 24px;
    color: #fff;
    background-color: rgb(47, 58, 79);
    border: 2px solid #1b2436;
    border-radius: 5px 0px 0px 5px;
    border-right: 0;
	}

	input::placeholder {
		color: #a8a8b3;
	}

	button {
		width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    color: #fff;
    border: 0;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s ease 0s;
	}

	button:hover {
		background: #04d361;
	}
</style>