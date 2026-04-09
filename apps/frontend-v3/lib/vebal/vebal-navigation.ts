import { useSearchParams } from 'next/navigation'

export const fromManage = 'manage'

// Used to determine the redirect path after a vebal lock action
export type VeBalSourcePage = 'manage'
export type VeBalAction = 'lock' | 'unlock' | 'extend'

export function getVeBalManagePath(veBalAction: VeBalAction, sourcePage: VeBalSourcePage) {
  return `/vebal/manage/${veBalAction}?from=${sourcePage}`
}

export function useVeBalRedirectPath() {
  const searchParams = useSearchParams()
  const from = searchParams.get('from')

  let redirectPath = '/vebal/'
  let returnLabel = 'Return to veBAL page'
  if (from === 'manage') {
    redirectPath = '/vebal/manage'
    returnLabel = 'Return to veBAL manage'
  }

  return { redirectPath, returnLabel }
}
