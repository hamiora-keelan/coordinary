import request from 'superagent'
import { DonationWithJoinedData } from '../../models/donation'

const rootURL = new URL(`/api/v1`, document.baseURI).toString()

export async function getDonorHistory({
  token,
  id,
}: {
  token: string
  id: number
}) {
  const result = await request
    .get(`${rootURL}/donations/donor/${id}`)
    .set('Authorization', `Bearer ${token}`)

  return result.body as DonationWithJoinedData[]
}

export async function getDonorHistoryWithPeriod({
  token,
  id,
  period,
}: {
  token: string
  id: number
  period: string
}) {
  const result = await request
    .get(`${rootURL}/donations/donor/${id}`)
    .query({ period })
    .set('Authorization', `Bearer ${token}`)

  return result.body as DonationWithJoinedData[]
}
