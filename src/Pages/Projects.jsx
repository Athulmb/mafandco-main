import React from 'react'
import ProjectHero from '../Components/Projects/ProjectsHero'
import ReviewSection from '../Components/Projects/Review'
import OffPlans from '../Components/Projects/OffPlans'
import SecondaryProperties from '../Components/Projects/SecondaryProperties'
import OffPlanProjectsHeader from '../Components/Projects/OffPlanProjectsHeader'

const Projects = () => {
  return (
    <>
    <ProjectHero/>
    <OffPlanProjectsHeader/>

    <OffPlans/>
    <SecondaryProperties/>
    </>
  )
}

export default Projects
