import { Box, Link, Text, VStack, Flex } from '@chakra-ui/react'
import { ArrowUpRight } from 'react-feather'

const RESOURCE_LINKS = {
  'Builder resources': [
    {
      label: 'v3 Scaffold',
      href: 'https://github.com/balancer/scaffold-balancer-v3',
      isExternal: true,
    },
    { label: 'Code & Contracts', href: 'https://github.com/balancer', isExternal: true },
    {
      label: 'Data & Analytics',
      href: 'https://docs.balancer.fi/data-and-analytics/data-and-analytics/subgraph.html',
      isExternal: true,
    },
    {
      label: 'Partner onboarding',
      href: 'https://docs.balancer.fi/partner-onboarding/onboarding-overview/introduction.html',
      isExternal: true,
    },
    {
      label: 'DAO & Partner OPs',
      href: 'https://balancer.defilytica.tools/',
      isExternal: true,
    },
  ],
  'In the docs': [
    {
      label: 'v3 core concepts',
      href: 'https://docs.balancer.fi/concepts/core-concepts/introduction.html',
      isExternal: true,
    },
    {
      label: 'Build an AMM',
      href: 'https://docs.balancer.fi/build/build-an-amm/create-custom-amm-with-novel-invariant.html',
      isExternal: true,
    },
    {
      label: 'Build a hook',
      href: 'https://docs.balancer.fi/build/build-a-hook/extend-existing-pool-type.html',
      isExternal: true,
    },
    {
      label: 'Build a router',
      href: 'https://docs.balancer.fi/build/build-a-router/create-custom-router.html',
      isExternal: true,
    },
    {
      label: 'Integration guides',
      href: 'https://docs.balancer.fi/integration-guides/',
      isExternal: true,
    },
  ],
}

export function BuildPopover({ closePopover }: { closePopover?: () => void }) {
  return (
    <Flex
      align="flex-start"
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: '5', sm: '20px', md: '40px' }}
    >
      {Object.entries(RESOURCE_LINKS).map(([title, links]) => (
        <VStack align="flex-start" key={title} minW={{ base: 'auto', md: '150px' }} spacing="sm">
          <Text fontWeight="bold">{title}</Text>
          <VStack align="flex-start" mt="xs">
            {links.map(link => (
              <Link
                _hover={{ textDecoration: 'none', color: 'font.highlight' }}
                alignItems="center"
                color="font.secondary"
                data-group
                display="flex"
                fontSize={{ base: 'sm', md: 'md' }}
                gap="xxs"
                href={link.href}
                isExternal={link.isExternal}
                key={link.label}
                onClick={closePopover}
              >
                {link.label}{' '}
                {link.isExternal && (
                  <Box
                    _groupHover={{ opacity: 1 }}
                    opacity="0.5"
                    transition="all 0.2s var(--ease-out-cubic)"
                  >
                    <ArrowUpRight size={12} />
                  </Box>
                )}
              </Link>
            ))}
          </VStack>
        </VStack>
      ))}
    </Flex>
  )
}

