import ProjectListPage from '../components/ProjectListPage.jsx'
import { uniProjects } from '../data/projects.js'

export default function UniProjects() {
  return (
    <ProjectListPage
      title="Uni Projects"
      documentTitle="Uni Projects"
      description="University projects from Danilo Pace's BSc Computer Games Programming at Kingston University London. Unity, Unreal Engine, C++ and C#."
      intro="Projects from my BSc in Computer Games Programming at Kingston University London. Engine work in Unity and Unreal, written in C# and C++."
      projects={uniProjects}
    />
  )
}
