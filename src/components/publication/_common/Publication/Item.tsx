import React, { FunctionComponent, useEffect, useMemo, useState } from 'react'
import { Flex, Paragraph, Image, Link } from '@src/components/_core'
import { Heading } from '@src/components/_core/Heading'
import { formatToDate } from '@src/utils/text/formatDate'
import { TPublication } from '../../_types'
import moment from 'moment'
import { Thumbnail } from '@src/components/_common'
import { useScreenSize } from '@src/utils/hooks'
import { getPublicationMainAuthor } from '@src/services'
import { getReadTime } from '@src/utils'

type TProps = TPublication & {
  direction?: 'vertical' | 'horizontal'
  variant?: 'default' | 'small' | 'hero' | 'medium'
}

export const PublicationItem: FunctionComponent<TProps> = ({
  authors,
  title,
  description,
  publishedAt,
  content,
  coverUrl,
  id,
  direction,
  variant,
}) => {
  const [mainAuthor, setMainAuthor] = useState<TPublication['authors'][0] | null>(null)
  const [isAuthorLoading, setIsAuthorLoading] = useState<boolean>(false)

  const { isDesktop, isTablet, isSmallTablet, isMobile } = useScreenSize()

  // TODO: HANDLE MULTIPLE AUTHOR
  useEffect(() => {
    setIsAuthorLoading(true)
    getPublicationMainAuthor(authors, res => {
      setIsAuthorLoading(false)
      setMainAuthor(res)
    })
  }, [authors])

  const imageSize = useMemo(() => {
    if (isDesktop || isTablet) {
      return {
        width: 20,
        height: 13.4,
      }
    }

    if (isSmallTablet) {
      return {
        width: 15,
        height: 10,
      }
    }

    if (isMobile) {
      return {
        width: 10,
        height: 10,
      }
    }
  }, [isDesktop, isMobile, isSmallTablet, isTablet])

  const publicationUrl = useMemo(() => {
    return `/publication/${encodeURI(title.replaceAll(' ', '-'))}-${id}`
  }, [id, title])

  const formattedPublishDate = useMemo(() => {
    return formatToDate(
      moment.utc(typeof publishedAt === 'number' ? publishedAt : publishedAt.toDate()).toString(),
    )
  }, [publishedAt])

  if (isAuthorLoading) {
    return <></>
  }

  if (variant === 'medium') {
    return (
      <Flex direction="row">
        <Flex direction="column" gap="small">
          <Link href={publicationUrl}>
            <Flex direction="column" gap="xxsmall">
              <Heading variant="h4">{title}</Heading>
              <Paragraph size="large">{description}</Paragraph>
            </Flex>
          </Link>
          <Flex direction="column" gap="xxsmall">
            <Paragraph size="xsmall" color="dark-text">
              {mainAuthor?.firstName} {mainAuthor?.lastName}
            </Paragraph>
            <Flex direction="row" gap="xxsmall">
              <Paragraph size="xsmall">{formattedPublishDate}</Paragraph>
              <Paragraph size="xsmall">·</Paragraph>
              <Paragraph size="xsmall">{getReadTime(content)} min read</Paragraph>
            </Flex>
          </Flex>
        </Flex>
        <Link href={publicationUrl}>
          <Image src={coverUrl} alt="" width={15.2} />
        </Link>
      </Flex>
    )
  }

  if (variant === 'hero') {
    return (
      <Flex direction="column" gap="medium">
        <Flex direction="column" gap="small" flex={false}>
          <Link href={publicationUrl}>
            <Image src={coverUrl} alt="" height={37.5} />
          </Link>
          <Link href={publicationUrl}>
            <Flex direction="column" gap="xsmall">
              <Heading variant="page-title" color="dark-text">
                {title}
              </Heading>
              <Paragraph size="medium">{description}</Paragraph>
            </Flex>
          </Link>
        </Flex>
        {mainAuthor && (
          <Flex flex={false} direction="row" gap="xsmall" align="center">
            <Thumbnail size="large" firstName={mainAuthor.firstName} />
            <Flex direction="column">
              <Paragraph color="dark-text" weight="semi-bold">
                {mainAuthor.firstName} {mainAuthor.lastName}
              </Paragraph>
              <Flex direction="row" gap="xxsmall">
                <Paragraph size="xsmall">{formattedPublishDate}</Paragraph>
                <Paragraph size="xsmall">·</Paragraph>
                <Paragraph size="xsmall">{getReadTime(content)} min read</Paragraph>
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
    )
  }

  if (variant === 'small') {
    return (
      <Flex direction="row" gap="small" align="start">
        <Flex direction="column" gap="xxsmall">
          <Link href={publicationUrl}>
            <Heading variant="h4">{title}</Heading>
          </Link>

          <Paragraph size="xsmall">{getReadTime(content)} min read</Paragraph>
        </Flex>
        <Link href={publicationUrl}>
          <Image src={coverUrl} alt="" height={5.5} width={5.5} />
        </Link>
      </Flex>
    )
  }

  if (direction === 'vertical') {
    return (
      <Flex direction="column" gap="medium">
        <Link href={publicationUrl}>
          <Image src={coverUrl} alt="" height={22} />
        </Link>
        <Link href={publicationUrl}>
          <Heading variant="h2" color="dark-text">
            {title}
          </Heading>
        </Link>

        {mainAuthor && (
          <Flex direction="row" gap="xsmall" align="center">
            <Thumbnail size="large" firstName={mainAuthor.firstName} />
            <Flex direction="column">
              <Paragraph color="dark-text" weight="semi-bold">
                {mainAuthor.firstName} {mainAuthor.lastName}
              </Paragraph>
              <Flex direction="row" gap="xxsmall">
                <Paragraph size="xsmall">{formattedPublishDate}</Paragraph>
                <Paragraph size="xsmall">·</Paragraph>
                <Paragraph size="xsmall">{getReadTime(content)} min read</Paragraph>
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
    )
  }

  return (
    <Flex flex={false} direction="row" align="center" gap="large">
      <Flex direction="column" gap="xsmall" align="start">
        {mainAuthor && (
          <Flex direction="row" gap="xsmall" align="center">
            <Thumbnail size="small" firstName={mainAuthor.firstName} />
            <Paragraph color="dark-text" weight="semi-bold">
              {mainAuthor.firstName} {mainAuthor.lastName}
            </Paragraph>
          </Flex>
        )}
        <Link href={publicationUrl}>
          <Flex direction="column" gap="xxsmall" flex={false}>
            <Heading variant="h2" color="dark-text">
              {title}
            </Heading>
            {(isDesktop || isTablet) && <Paragraph size="medium">{description}</Paragraph>}
          </Flex>
        </Link>
        <Flex flex={false} direction="row" align="center" gap="xxsmall">
          <Flex direction="row" gap="xxsmall">
            <Paragraph size="xsmall">{formattedPublishDate}</Paragraph>
            <Paragraph size="xsmall">·</Paragraph>
            <Paragraph size="xsmall">{getReadTime(content)} min read</Paragraph>
          </Flex>
          <Paragraph size="xsmall">·</Paragraph>
          <Paragraph size="xsmall">Popular on ScientificHub</Paragraph>
        </Flex>
      </Flex>

      <Link href={publicationUrl}>
        <Image src={coverUrl} alt="" {...imageSize} />
      </Link>
    </Flex>
  )
}

PublicationItem.defaultProps = {
  direction: 'horizontal',
  variant: 'default',
}

export type TPublicationItemProps = TProps
