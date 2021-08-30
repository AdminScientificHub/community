const removeAccents = (s: string, options?: { toLowerCase: boolean }): string => {
  if (!s) {
    return s
  }
  if (options?.toLowerCase) {
    s = s.toLowerCase()
  }

  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export const compareText = ({ item, query }: { item: string; query: string }): boolean => {
  return removeAccents(item.toLocaleLowerCase()).includes(removeAccents(query.toLocaleLowerCase()))
}
