export const getReadTime = (content: string): number =>
  Math.ceil((content.replace(/<\/?[^>]+(>|$)/g, '').split(' ').length || 0) / 300)
