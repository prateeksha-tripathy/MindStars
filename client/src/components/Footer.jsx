import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsInstagram , BsTwitter , BsGithub ,BsDiscord } from 'react-icons/bs';

export default function FooterComp() {
  return (
    <Footer container className='border border-t-8 border-blue-400 bg-blue-300'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full  '>
                <div className='mt-5'>
                    <Link to = '/' className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                        <span className='px-2 py-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-lg text-white'>MindStars</span>
                        Blog
                    </Link>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                        <Footer.Title title='About' />
                        <Footer.Link 
                            href = 'https://www.100jsprojects.com'
                            target='_blank'
                            rel = 'noopener noreferrer'
                        >
                            100 JS Projects 
                        </Footer.Link>
                        <Footer.Link 
                            href = '/about'
                            target='_blank'
                            rel = 'noopener noreferrer'
                        >
                            MindStars Blog
                        </Footer.Link>
                    </div>
                    <div>
                        <Footer.Title title='Follow Us' />
                        <Footer.Link 
                            href = 'https://github.com/prateeksha-tripathy'
                            target='_blank'
                            rel = 'noopener noreferrer'
                        >
                            Github
                        </Footer.Link>
                        <Footer.Link 
                            href = 'https://twitter.com/Prateeksha1073'
                            target='_blank'
                            rel = 'noopener noreferrer'
                        >
                            Twitter
                        </Footer.Link>
                    </div>
                    <div>
                        <Footer.Title title='Legal' />
                        <Footer.Link 
                            href = '#'
                            // target='_blank'
                            // rel = 'noopener noreferrer'
                        >
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link 
                            href = '#'
                            target='_blank'
                            rel = 'noopener noreferrer'
                        >
                            Terms &amp; Conditions
                        </Footer.Link>
                    </div>
                </div>
            </div>
            <Footer.Divider />
            <div className=''>
                <Footer.Copyright href='#' by="Prateeksha's Blog" year = {new Date().getFullYear()} />
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href = '#' icon={BsInstagram}/>
                    <Footer.Icon href = 'https://twitter.com/Prateeksha1073' icon={BsTwitter}/>
                    <Footer.Icon href = 'https://github.com/prateeksha-tripathy' icon={BsGithub}/>
                    <Footer.Icon href = '#' icon={BsDiscord}/>
                </div>
            </div>
        </div>
    </Footer>
  )
}
