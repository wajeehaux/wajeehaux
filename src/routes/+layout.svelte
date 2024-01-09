<script>
	import "../app.pcss";
	import Header from "./Header.svelte";
	import "./styles.css";
</script>

<div class="app">
	<Header></Header>

	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 1;
		width: 100%;
		padding: 4rem 0rem;
		box-sizing: border-box;
	}
</style>
