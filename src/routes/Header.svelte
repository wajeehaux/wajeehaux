<script>
	import { base } from "$app/paths";
	import glass from "$lib/images/glass.png";
</script>

<header>
	<a class="ml-4 mt-4" href={base}>
		<img src={glass} alt="logo" />
	</a>

	<nav>
		<!-- <ul>
			<li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
				<a href="/">Home</a>
			</li>
			<li
				aria-current={$page.url.pathname === "/about"
					? "page"
					: undefined}
			>
				<a href="/about">About</a>
			</li>
			<li
				aria-current={$page.url.pathname.startsWith("/sverdle")
					? "page"
					: undefined}
			>
				<a href="/sverdle">Sverdle</a>
			</li>
		</ul> -->
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.7s ease-in-out;
	}

	a img {
		width: 3rem;
		height: 3em;
		object-fit: contain;
	}

	a:hover {
		transform: rotate(360deg);
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
