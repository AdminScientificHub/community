import { TAuthorType, TPublication } from '@src/components/publication/_types'
import { TUser } from '@src/components/user/_types'
import firebase from 'firebase'

type TAuthor = TPublication['authors'][0]
type TDBAuthor = { id: string; type: TAuthorType }
type TDBPublication = Omit<TPublication, 'authors'> & { authors: TDBAuthor[] }

const getPublicationAuthors = async (
  authors: { id: string; type: TAuthorType }[],
): Promise<any> => {
  const db = firebase.firestore()

  return Promise.all(
    authors.map(async ({ id, type }) => {
      const authorRes = await db.collection('users').doc(id).get()

      return {
        ...authorRes.data(),
        type,
        id: authorRes.id,
      }
    }),
  )
}

export const getPublicationMainAuthor = async (
  authors: TPublication['authors'],
  callback: (author: TAuthor) => void,
): Promise<void> => {
  const author = authors.find(({ type }) => type === 'PRINCIPAL') as TUser

  const db = firebase.firestore()

  await db
    .collection('users')
    .doc(author.id)
    .get()
    .then(res => {
      callback({
        ...(res.data() as TAuthor),
        type: 'PRINCIPAL',
        id: res.id,
      })
    })
}

export const getPublication = async (
  publicationId: string,
  onError: () => void,
): Promise<TPublication | null> => {
  const db = firebase.firestore()

  const res = await db.collection('publications').doc(publicationId).get()
  const publication = res.data() as TDBPublication

  if (publication) {
    const authors = await getPublicationAuthors(publication.authors)

    return { ...publication, authors, id: res.id }
  } else {
    onError()

    return null
  }
}
