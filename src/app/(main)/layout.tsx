import React from 'react'
import Sidebar from '@/components/sidebar'
import I1nfobar from '@/components/infobar'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full">
        <I1nfobar />
        {props.children}
      </div>
    </div>
  )
}

export default Layout