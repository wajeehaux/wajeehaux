<script>
    import { base } from "$app/paths";
    import { PROJECTS } from "../lib/project-constants";
</script>

<div class="grid">
    {#each PROJECTS as project, idx}
        <div class="project-{idx + 1}">
            <div class="flex">
                <a
                    href="{base}/work/{project.slug}"
                    class="project-img flex-1"
                    style:background-image={`url(${project.previewImage})`}
                    >{" "}</a
                >
                <a
                    href="{base}/work/{project.slug}"
                    class="project-img flex-1"
                    style:background-image={`url(${project.allImages[1]})`}
                    >{" "}</a
                >
            </div>
            <div class="work-description">
                <a href="{base}/work/{project.slug}" class="project-name-link"
                    >{project.title}<br /></a
                >
                <div class="paragraph-light">{project.subtitle}</div>
            </div>
        </div>
    {/each}
</div>

<style>
    .grid {
        margin-bottom: 80px;
        grid-column-gap: 30px;
        grid-row-gap: 30px;
        grid-template-areas:
            ". . ."
            ". . .";
        grid-template-columns: 1.5fr 1fr 1.5fr;
        grid-template-rows: auto auto;
    }

    .project-img {
        background-image: url(https://assets.website-files.com/5c6e6f4…/5cdbece…_portfolio%201%20-%20wide.svg);
        background-size: cover;
        display: flex;
        height: 460px;
        margin-bottom: 40px;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        background-color: #f4f4f4;
        background-image: url(https://d3e54v103j8qbb.cloudfront.net/img/example-bg.png);
        background-size: cover;
        text-align: center;
        text-decoration: none;
    }

    .project-img:hover {
        opacity: 0.8;
    }

    .work-description {
        display: flex;
        width: 100%;
        margin-bottom: 60px;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .project-name-link {
        margin-bottom: 5px;
        font-size: 20px;
        line-height: 34px;
        font-weight: 400;
        text-decoration: none;
    }
    .project-name-link:hover {
        opacity: 0.8;
    }

    .paragraph-light {
        opacity: 0.6;
    }

    .project-1 {
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 2;
    }

    .project-3 {
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 2;
    }

    .project-2 {
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 3;
    }

    @media (max-width: 1180px) {
        .grid {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-align: stretch;
            -webkit-align-items: stretch;
            -ms-flex-align: stretch;
            align-items: stretch;
        }
    }
</style>
