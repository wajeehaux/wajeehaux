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

    <h2 class="position-name-text" style="margin-bottom: 24px">Design</h2>
    <div class="image-container">
        {#each data.allImages as image, idx}
            <h2 class="image-label">Frame {idx + 1}</h2>
            <img
                class="project-image"
                src={image}
                alt={`Frame ${idx + 1}`}
            />
            <hr class="divider" />
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

    /* Image Styling */
    .image-container {
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        width: 100%;
    }

    .image-label {
        align-self: flex-start;
        font-size: 14px;
        color: #6b7280;
        margin-bottom: 8px;
    }

    .project-image {
        width: 100%;
        max-width: 900px;
        height: auto;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    .divider {
        width: 100%;
        height: 4px;
        margin: 24px 0;
        background-color: #e5e7eb;
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
        .heading-jumbo {
            font-size: 48px;
            line-height: 60px;
        }

        .header-grid {
            display: flex;
            flex-direction: column;
            gap: 40px;
        }

        .image-label {
            font-size: 12px;
        }

        .project-image {
            max-width: 100%;
        }
    }

    @media (max-width: 768px) {
        .heading-jumbo {
            font-size: 36px;
            line-height: 48px;
        }

        .header-grid {
            gap: 30px;
        }

        .project-image {
            max-width: 100%;
            border-radius: 6px;
        }

        .divider {
            height: 2px;
        }
    }

    @media (max-width: 480px) {
        .heading-jumbo {
            font-size: 28px;
            line-height: 40px;
        }

        section {
            margin: 0 15px;
        }

        .project-image {
            border-radius: 4px;
        }
    }
</style>
