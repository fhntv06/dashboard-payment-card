import { get } from '../core'

export const exampleRequest = (example: number) => get(`/api/${example}`)
