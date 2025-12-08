import React from 'react'
import Hero from './start/components/Hero'
import StartNav from './start/components/StartNav'
import Features from './start/components/Features'
import CTA_Section from './start/components/CTA_Section'
import Footer from './shared/components/Footer'

const page = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <StartNav />
            <div className="flex h-[90vh] items-center justify-center">
                <Hero />
            </div>
            <div>
                <Features />
            </div>
            <div className="flex h-[50vh] items-center justify-center">
                <CTA_Section />
            </div>
            <Footer />
        </div>
    )
}

export default page
