import { v4 } from 'uuid'

export const idMaker = (): string => {
  return v4()
}