import React, { useEffect, useState } from 'react'
import { Sidebar } from 'flowbite-react'
import {HiArrowSmRight, HiUser} from 'react-icons/hi'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function DashSidebar() {
    const loaction = useLocation();
    const [tab, setTab] = useState("");
    useEffect(() => {
      const urlParams = new URLSearchParams(loaction.search);
      const tabFromUrl = urlParams.get("tab");
      if (tabFromUrl){
        setTab(tabFromUrl)
      }
    }, [loaction.search]);
  return (
      < Sidebar className="w-full md:w-56" >
        <Sidebar.Items >
            <Sidebar.ItemGroup>
                <Link to= '/dashboard?tab=profile'>
                    <Sidebar.Item active={tab==='profile'} icon = {HiUser} label={"User"} labelColor='dark'>
                        Profile
                    </Sidebar.Item>
                </Link>
                <Sidebar.Item active icon = {HiArrowSmRight} className='cursor-pointer' >
                    Sign Out
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}
