export const getPublicationUrl = (title: string, id: string): string =>
  `publication/${encodeURI(title.replaceAll(' ', '-').toLocaleLowerCase())}-${id}`
