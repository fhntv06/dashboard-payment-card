import { TypeStatus, TypeStatusId } from './ui/types'

export interface ICard {
  id: number,
  ident_num: string,
  status_id: TypeStatusId,
  status_name: TypeStatus,
  nominal: number,
  dealer_id: number,
  dealer_name: string,
  secret_code: string,
  created_dt: string
}
export interface IColumn {
  key: string,
  title: string
  width: number
}