<script lang="ts">
	import '@fontsource/bebas-neue';
	import '@fontsource/montserrat';
	import type { data } from './+page';

	export let data: data;
	const { vendidas, disponibles, objetivo, avance } = data;

	const porcentaje = Math.ceil((avance / objetivo) * 100);

	function createLink(number: number) {
		const message = `¡Quiero el ${number}!`;
		let phone: string;

		if (number >= 1 && number <= 150) {
			phone = '5491157553203';
		} else {
			phone = '5491162957756';
		}

		return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
	}

	function createOnClick(number: number) {
		const URL = createLink(number);
		return function onClick() {
			window.open(URL, '_blank');
		};
	}
</script>

<section>
	<h1>Rifando Asado 😎</h1>
	<p>1 x 200$, 5 x 500$, <span>¡10 x 800$!</span>, llevate varios y tené más chances de ganar 🏆</p>
	<p>Que la parrilla te acompañe en este carnaval 🔥</p>

	<h2>disponibles 👀</h2>
	<ul class="disponibles">
		{#each disponibles as row, index}
			<li>
				<button on:click={createOnClick(Number(row['Número']))}>
					{row['Número']}
				</button>
			</li>
		{/each}
	</ul>
	<h2>en juego 😽</h2>
	<ul class="vendidos">
		{#each vendidas as row, index}
			<li>
				<div>
					{row['Número']}
				</div>
			</li>
		{/each}
	</ul>
</section>
<p class="copy">
	&copy; página creada por <a href="https://www.linkedin.com/in/nahuel-rabey-260857180/"
		>Nahuel Rabey</a
	>
</p>

<style>
	section {
		font-family: sans-serif;
		width: 75vw;
		margin: auto;
	}

	@media (max-width: 600px) {
		section {
			width: 95vw;
		}
	}

	h1 {
		font-family: 'Bebas Neue', cursive;
		font-size: 3em;
	}
	h2 {
		font-family: 'Montserrat', sans-serif;
		font-weight: lighter;
		color: #2f2f2f;
	}

	span {
		color: #2f2f2f;
		font-style: italic;
	}

	ul {
		padding: 0px;
		display: grid;
		grid-template-columns: repeat(10, 10%);
		/* flex-wrap: wrap;
		gap: 10px; */
		/* justify-content: space-between; */
		justify-content: left;
	}
	@media (max-width: 600px) {
		ul {
			grid-template-columns: repeat(5, 20%);
		}
	}
	ul li {
		/* width: 100%; */
		text-align: center;
		list-style: none;
		padding: none;
	}

	.disponibles li button {
		width: 90%;
		margin: auto;
		font-size: medium;
		text-align: center;
		padding: 1em 0em;
		display: block;
		border: 2px solid rgb(138, 138, 138);
		border-radius: 5px;
		background-color: white;
	}
	.disponibles li button:hover {
		cursor: pointer;
		border-color: rgb(0, 0, 0);
		/* border-width: 1px; */
	}

	.vendidos li div{
		width: 90%;
		margin: auto;
		font-size: medium;
		text-align: center;
		padding: 1em 0em;
		display: block;
		border: 2px solid rgb(138, 138, 138);
		border-radius: 5px;
		background-color: #2f2f2f0f;
	}

	.copy {
		text-align: center;
		font-size: smaller;
		font-family: sans-serif;
	}
	.copy a {
		color: rgb(0, 0, 0);
		font-weight: bold;
		text-decoration: none;
	}
	.copy a:visited {
		color: rgb(0, 0, 0);
	}
</style>
