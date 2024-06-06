"use client"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink,  NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-full'><NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Link</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
  </div>
  )
}

export default Home