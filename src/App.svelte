<script>
	import Header from './components/Header.svelte';
	import UserInput from './components/UserInput.svelte';
	import List from './components/List.svelte';

</script>

<div id="content">
	<Header />
	<UserInput />
	<List />
</div>


<style>
	#content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 40px;
	}
</style>