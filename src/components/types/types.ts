export interface ITicket {
  price: number
  carrier: string
  segments: [
    {
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    },
    {
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    },
  ]
}

export interface IFetchTicketsStateTypes {
  tickets: ITicket[]
  searchId: string | null
  loading: boolean
  error: string | null
}
