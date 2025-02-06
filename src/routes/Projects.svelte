<script>
    import { base } from "$app/paths";
    import { PROJECTS } from "../lib/project-constants";
</script>

<div class="grid">
    {#each PROJECTS as project, idx}
        <div class="project-{idx + 1}">
            <div class="flex">
                {#each project.displayImages as image}
                    <a
                        href="{base}/work/{project.slug}"
                        class="project-img"
                        style:background-image={`url(${image})`}
                        aria-label={`View ${project.title}`}
                    >
                        <span class="sr-only">View {project.title}</span>
                    </a>
                {/each}
            </div>
            <div class="work-description">
                <a href="{base}/work/{project.slug}" class="project-name-link">
                    {project.title}<br />
                </a>
                <div class="paragraph-light">{project.subtitle}</div>
            </div>
        </div>
    {/each}
</div>


<style>
    .grid {
        display: flex;
        flex-direction: column;
        gap: 60px;
        margin-bottom: 80px;
        width: 100%;
    }

    .project-img {
    background-image: url(https://d3e54v103j8qbb.cloudfront.net/img/example-bg.png);
    background-size: cover;
    display: flex;
    height: 800px;
    margin-bottom: 40px;
    flex: 1;
    justify-content: center;
    align-items: stretch;
    background-color: #f4f4f4;
    text-align: center;
    text-decoration: none;
    position: relative;
}

.project-img::after {
    content: attr(aria-label);
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

    .flex {
        display: flex;
        gap: 30px;
        width: 100%;
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
.project-1 .project-img {
    background-size:cover;
    background-position:center;
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
            gap: 40px;
        }
        
        .flex {
            flex-direction: column;
            gap: 20px;
        }

        .project-img {
            flex: none;
            height: 300px;
            margin-bottom: 20px;
            width: 100%;
        }
    }
</style>
