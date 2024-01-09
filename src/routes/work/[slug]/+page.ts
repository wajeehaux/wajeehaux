import { error } from '@sveltejs/kit';
import { PROJECTS } from '../../../lib/project-constants';

export function load({ params }) {
    const project = PROJECTS.find((project) => project.slug === params.slug);

    if (!project) throw error(404);

    return {
        ...project
    };
}


export const prerender = true;