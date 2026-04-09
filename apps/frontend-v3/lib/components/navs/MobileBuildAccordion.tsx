'use client'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'
import { ArrowUpRight } from 'react-feather'
import { FormSubsection } from '@repo/lib/shared/components/inputs/FormSubsection'

const RESOURCE_LINKS = [
  {
    label: 'v3 Scaffold',
    href: 'https://github.com/balancer/scaffold-balancer-v3',
  },
  {
    label: 'Code & Contracts',
    href: 'https://github.com/balancer',
  },
  {
    label: 'Documentation',
    href: 'https://docs.balancer.fi/',
  },
]

type MobileBuildAccordionProps = {
  onClose?: () => void
}

export function MobileBuildAccordion({ onClose }: MobileBuildAccordionProps) {
  return (
    <Accordion allowToggle w="full">
      <AccordionItem border="none">
        <AccordionButton _hover={{ bg: 'transparent' }} pt="sm" px="0">
          <Text flex="1" fontSize="xl" fontWeight="medium" textAlign="left">
            Build
          </Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb="0" pt="0" px="0">
          <FormSubsection mx="0" py="0">
            <VStack align="start" spacing="md">
              {/* Builder resources section */}
              <VStack align="start" spacing="sm" w="full">
                <Text color="grayText" fontSize="sm" fontWeight="bold">
                  Builder resources
                </Text>
                {RESOURCE_LINKS.map(link => (
                  <Link
                    _hover={{ color: 'font.highlight', textDecoration: 'none' }}
                    alignItems="center"
                    color="font.primary"
                    display="flex"
                    fontSize="xs"
                    gap="xxs"
                    href={link.href}
                    isExternal
                    key={link.label}
                    onClick={onClose}
                  >
                    {link.label}
                    <Box color="grayText">
                      <ArrowUpRight size={12} />
                    </Box>
                  </Link>
                ))}
              </VStack>
            </VStack>
          </FormSubsection>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
