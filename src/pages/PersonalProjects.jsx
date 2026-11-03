import ProjectListPage from '../components/ProjectListPage.jsx'
import { personalProjects } from '../data/projects.js'

export default function PersonalProjects() {
  return (
    <ProjectListPage
      title="Personal Projects"
      documentTitle="Personal Projects"
      description="Personal software projects by Danilo Pace, built in React, React Native and plain JavaScript outside of university work."
      intro="What I build in my own time. These are web and mobile, in React, React Native and plain JavaScript, and they are how I am moving my day to day work towards building software."
      projects={personalProjects}
    />
  )
}
