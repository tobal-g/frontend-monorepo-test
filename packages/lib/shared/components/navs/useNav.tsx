import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { IconType } from './SocialIcon'

export type AppLink = {
  href?: string
  label?: string
  icon?: ReactNode
  isExternal?: boolean
  iconType?: IconType
  analyticsEvent?: string
  onClick?: () => void
}

export function useNav() {
  const pathname = usePathname()

  const defaultAppLinks: AppLink[] = [
    {
      analyticsEvent: 'ClickNavPools',
      href: '/pools',
      label: 'Pools',
    },
    {
      analyticsEvent: 'ClickNavPortfolio',
      href: '/portfolio',
      label: 'Portfolio',
    },
  ]

  function linkColorFor(path: string) {
    return pathname === path ? 'font.highlight' : 'font.primary'
  }

  return { defaultAppLinks, linkColorFor }
}
