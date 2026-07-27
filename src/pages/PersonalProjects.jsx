import ProjectListPage from '../components/ProjectListPage.jsx'
import { personalProjects } from '../data/projects.js'

export default function PersonalProjects() {
  return (
    <ProjectListPage
      title="Personal Projects"
      documentTitle="Personal Projects"
      description="Personal software projects by Danilo Pace, built in React outside of university work."
      intro="What I build in my own time. These are mostly React, and they are how I am moving my day to day work towards the web."
      projects={personalProjects}
    />
  )
}
