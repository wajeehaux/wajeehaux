<script>
    /** @type {import('../../../lib/project-constants').Project} */
    export let data;
</script>

<section>
    <div class="container">
        <div class="header-grid">
            <div class="header">
                <h1 class="heading-jumbo">{data.title}</h1>
                <p class="text-gray-400">{data.subtitle}</p>
                <p class="text-gray-400">{data.date}</p>
            </div>
            <div class="description-1">
                <div class="position-name-text">Project overview</div>
                <p class="text-gray-400">
                    {data.description}
                </p>
            </div>
            <!-- <div class="description-2">
                <div class="position-name-text">My contributions</div>
                <p class="text-gray-400">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                </p>
            </div> -->
        </div>
    </div>

    <h2 class="position-name-text" style:margin-bottom="24px">Design</h2>
    <div class="flex flex-col items-start justify-center">
        {#each data.allImages as image, idx}
            <h2 class="self-start text-sm text-gray-500">Frame {idx + 1}</h2>
            <img
                class="h-auto max-w-screen-md rounded-lg shadow-lg"
                src={image}
                alt=""
            />
            <hr class="h-4 w-full my-4" />
        {/each}
    </div>
</section>

<style>
    .heading-jumbo {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 64px;
        line-height: 80px;
        text-transform: none;
    }

    section {
        margin: 0 30px;
    }

    h1 {
        text-align: left;
    }
    p {
        /* font-size: 16px; */
        line-height: 28px;
        font-weight: 400;
    }

    .container {
        width: 100%;
        max-width: 1140px;
        margin-right: auto;
        margin-left: auto;
    }

    .header-grid {
        display: grid;
        margin-top: 120px;
        margin-bottom: 60px;
        grid-column-gap: 50px;
        grid-row-gap: 100px;
        grid-template-areas:
            ". . . ."
            ". . . .";
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto auto;
    }

    .header {
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 2;
    }

    .description-1 {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
    }

    .description-2 {
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 2;
        grid-row-end: 3;
    }

    .position-name-text {
        margin-bottom: 10px;
        font-size: 20px;
        line-height: 34px;
        font-weight: 400;
        text-transform: none;
    }
</style>
