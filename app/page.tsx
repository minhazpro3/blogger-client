"use client"
import Docs from '@/components/home/banner_doc/Docs'
import Help_articles from '@/components/home/banner_doc/Help_articles'
import React from 'react'

const Page = () => {
  return (
    <div>
      <div className="my-8">

      <Docs />
      <Help_articles/>
      </div>
    </div>
  )
}

export default Page