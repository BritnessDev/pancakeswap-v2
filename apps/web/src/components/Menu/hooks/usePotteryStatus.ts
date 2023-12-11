import useSWRImmutable from 'swr/immutable'

export const usePotteryStatus = () => {
  const { data: potteryStatus } = useSWRImmutable('potteryLastStatus', async () => {
    return []
  })

  return potteryStatus
}
