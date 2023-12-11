import { useUserCakeLockStatus } from 'hooks/useUserCakeLockStatus'
import { useMemo } from 'react'
import { PotteryDepositStatus } from 'state/types'
import { useCompetitionStatus } from './useCompetitionStatus'
import { usePotteryStatus } from './usePotteryStatus'
import { useVotingStatus } from './useVotingStatus'
import { useIfoStatus } from './useIfoStatus'

export const useMenuItemsStatus = (): Record<string, string> => {
  const ifoStatus = useIfoStatus()
  const competitionStatus = useCompetitionStatus()
  const potteryStatus = usePotteryStatus()
  const votingStatus = useVotingStatus()
  const isUserLocked = useUserCakeLockStatus()

  return useMemo(() => {
    return {
      '/competition': competitionStatus || '',
      '/ifo': ifoStatus || '',
      ...(votingStatus && {
        '/voting': votingStatus,
      }),
      ...(isUserLocked && {
        '/pools': 'lock_end',
      })
    }
  }, [competitionStatus, ifoStatus, potteryStatus, votingStatus, isUserLocked])
}
