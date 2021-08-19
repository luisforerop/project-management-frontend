import { projects } from '../../../dbSimulation'

export const HttpProjects = projectsList => {
    const projetsInfo = []
    projectsList.forEach(idProject => {
        projetsInfo.push(...projects.filter( project => project.id === idProject))
    });
    return projetsInfo
}