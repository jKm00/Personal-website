import { projects } from '$lib/data/projects'

export const load = async ({ params }) => {
  const project = projects.find((project) => project.id === Number(params.id))

  return {
    project
  }
};