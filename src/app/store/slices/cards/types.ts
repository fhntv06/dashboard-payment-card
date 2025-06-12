export interface ICards {
  data: [
    {
      id: number,
      ident_num: string,
      status_id: number,
      status_name: string,
      nominal: number,
      dealer_id: number,
      dealer_name: string,
      secret_code: string,
      created_dt: string
    }
  ]
}