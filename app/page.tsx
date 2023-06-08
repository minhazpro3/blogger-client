"use client"
import HomeGrowYou from '@/components/grow_your/Grow_banner'
import HomeBanner from '@/components/home/Banner'
import HomeTrustSecurity from '@/components/home/Banner_trust_security'
import Docs from '@/components/home/banner_doc/Docs'
import Help_articles from '@/components/home/banner_doc/Help_articles'
import Share from '@/components/share_and_talk/Share'
import React from 'react'

const Page = () => {
  return (
    <div>
      <div className="my-8">

        <HomeBanner />
        <HomeTrustSecurity />
        <Docs />

        <div className='mb-12'>
          <Help_articles />
        </div>

        {/* share and talk section */}
        <div>
          <Share/>
        </div>
        <HomeGrowYou/>
      </div>
    </div>
  )
}

export default Page