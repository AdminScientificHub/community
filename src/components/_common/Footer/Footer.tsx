import { Flex, Icon, Link, Paragraph } from '@src/components/_core'
import React, { FunctionComponent } from 'react'
import { Divider } from '..'

import LogoWhiteIcon from '@src/assets/icons/logo-white.svg'
import { useScreenSize } from '@src/utils/hooks'

type TProps = {}

export const Footer: FunctionComponent<TProps> = () => {
  const { isMobile, isTablet, isSmallTablet } = useScreenSize()

  return (
    <Flex
      flex={false}
      padding={{ vertical: isMobile || isSmallTablet ? 'large' : 'xxlarge' }}
      as="footer"
      background={{ color: 'dark-background', opacity: 0.9 }}
      margin={{ top: 'huge' }}
      direction="column"
      align="start"
    >
      <Flex maxWidth={128} direction="column" gap="xlarge">
        {!isMobile && (
          <>
            {/* <Flex direction={isTablet || isSmallTablet ? 'column' : 'row'} gap="xlarge">
              <Flex direction="column" gap="xsmall">
                <Paragraph size="xlarge" color="light-text" weight="semi-bold">
                  Learn more.
                </Paragraph>
                <Paragraph size="small" color="light-text">
                  Medium is an open platform where 170 million readers come to find insightful and
                  dynamic thinking. Here, expert and undiscovered voices alike dive into the heart
                  of any topic and bring new ideas to the surface.
                </Paragraph>
              </Flex>
              <Flex direction="column" gap="xsmall">
                <Paragraph size="xlarge" color="light-text" weight="semi-bold">
                  Make ScientificHub yours.
                </Paragraph>
                <Paragraph size="small" color="light-text">
                  Follow the writers, publications, and topics that matter to you, and you’ll see
                  them on your homepage and in your inbox.
                </Paragraph>
              </Flex>
              <Flex direction="column" gap="xsmall">
                <Paragraph size="xlarge" color="light-text" weight="semi-bold">
                  Share your work with the world
                </Paragraph>
                <Paragraph size="small" color="light-text">
                  If you have a story to tell, knowledge to share, or a perspective to offer —
                  welcome home. It’s easy and free to post your thinking on any topic.
                </Paragraph>
              </Flex>
            </Flex>
            <Divider /> */}
          </>
        )}

        <Flex
          direction={isMobile ? 'column' : 'row'}
          align={isMobile ? 'initial' : 'center'}
          justify="between"
          gap={isMobile ? 'small' : 'xlarge'}
        >
          <Link href="/">
            <Icon icon={LogoWhiteIcon} />
          </Link>
          {/* <Flex direction="row" gap="small" flex={false}>
            <Link href="/" variant="footer-white">
              Help
            </Link>

            <Link href="/" variant="footer-white">
              Contact Us
            </Link>

            <Link href="/" variant="footer-white">
              About
            </Link>
          </Flex> */}
        </Flex>
      </Flex>
    </Flex>
  )
}

export type TFooterProps = TProps
