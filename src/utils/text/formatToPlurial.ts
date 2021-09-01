export const formatToPlurial = (text: string, condition: boolean): string =>
  condition ? `${text}s` : text
