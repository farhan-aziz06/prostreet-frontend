import Header from '@/components/header/Header'
import Sidebar from '@/components/sidebar/Sidebar'
import React from 'react'

const AdminLayout = ({ children }) => {
    return (
        <div className='flex w-full h-full overflow-y-auto max-h-screen'>
            <Sidebar />
            <div className='flex flex-col w-full h-full md:pl-[300px]'>
                <Header />
                {children}
            </div>
        </div>
    )
}

export default AdminLayout