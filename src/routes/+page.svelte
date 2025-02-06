<script>
	import Projects from "./Projects.svelte";
	import logo from "$lib/images/logo.png";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Wajeeha Batool" />
</svelte:head>

<section>
	<div class="flex items-end justify-between min-w-[25%] md:w-[20%]">
		<div class="flex flex-col">
			<h3 class="heading-medium">Wajeeha Batool</h3>
			<h4 class="heading-small text-gray-400">Product Designer</h4>
		</div>
		<img src={logo} class="w-24 h-24" alt="" />
	</div>
	<h2 class="mb-2 text-4xl text-gray-900 heading-jumbo">
		Hey there! I’m a creative graphic and web designer based in sunny San
		Jose, CA.
	</h2>
</section>

<section>
	<Projects />
</section>

<style>
	section {
		margin: 60px 30px;
		max-width: 1140px;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.heading-medium {
		font-size: 20px;
		line-height: 34px;
		font-weight: 400;
	}

	.heading-small {
		font-size: 16px;
		line-height: 28px;
	}

	.heading-jumbo {
		margin-top: 10px;
		margin-bottom: 10px;
		font-size: 64px;
		line-height: 80px;
		text-transform: none;
	}

	@media (max-width: 1180px) {
		section {
			padding: 0 1rem;
		}
	}
</style>
