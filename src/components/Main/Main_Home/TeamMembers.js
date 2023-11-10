import React from 'react'
import './TeamMembers.css'
import Button from '../../Generics/Button'
import SectionTitle from '../../Generics/SectionTitle'


import KristinePalmer from '../../../assets/images/Kristine-Palmer.png'
import MarkAubri from '../../../assets/images/Mark-Aubri.png'
import KimberlyHansen from '../../../assets/images/Kimberly-Hansen.png'
import JustinWilloman from '../../../assets/images/Justin-Willoman.png'
import MembersBox from './MembersBox'




const TeamMembers = () => {
  return (
    <section className="team-members">
        <div className="container">
            <div className="tophead">
                <SectionTitle title="Meet Our Team" description="Experience Team Members" />
                <div className="right-content">
                    <Button type="yellow" title="Browse Team" url="/services/members" />
                </div>
            </div>
            <div className="team">
                <MembersBox src={KristinePalmer} title="Kristine Palmer" description="Chef Operation Officer" />
                <MembersBox src={MarkAubri} title="Mark Aubri" description="Senior Consultant" />
                <MembersBox src={KimberlyHansen} title="Kimberly Hansen" description="Senior Consultant" />
                <MembersBox src={JustinWilloman} title="Justin Willoman" description="Senior Tech Consultant" />
            </div>
            <div className="center-content">
                <div className="dot"></div>
                <div className="dot-black"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    </section>
  )
}

export default TeamMembers