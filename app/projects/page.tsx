import React from 'react'
import ProjectsList from '@/components/Projects/ProjectsList'
import { collection, getDocs, getFirestore } from '@firebase/firestore'
import { app } from '@/lib/firebase'
import projects from '@/lib/projects'

// export const revalidate = 600

const ProjectsPage = async () => {
    // const db = getFirestore(app)
    // const projectsCollection = collection(db, 'projects')
    // const querySnapshot = await getDocs(projectsCollection)
    // const projects: IProjectDoc[] = []
    // querySnapshot.forEach((doc) => {
    //     const data = doc.data() as IProjectDoc
    //     projects.push(data)
    // })
    return (
        <section className={'p-8 lg:p-24 pt-32 lg:pt-32 min-h-[90vh]'}>
            {/* {projects.length === 0 && <p>No projects right now</p>} */}
            <ProjectsList projects={projects} />
        </section>
    )
}

export default ProjectsPage
