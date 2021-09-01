export const formatQueryParams = (
  path: string,
  queryParams: { query?: string | null; value?: string | null }[],
): string => {
  const filteredParams = queryParams.filter(({ value, query }) => query && value)

  if (!filteredParams.length) {
    return path
  }

  return filteredParams.reduce((fullPath, param, index) => {
    if (index === 0) {
      return `${path}?${param.query}=${param.value}`
    }

    return `${fullPath}&${param.query}=${param.value}`
  }, '')
}
