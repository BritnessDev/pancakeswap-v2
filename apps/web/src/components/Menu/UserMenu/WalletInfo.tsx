import {
  Box,
  Button,
  InjectedModalProps,
  Text,
  FlexGap,
  useTooltip
} from '@pancakeswap/uikit'
import { WNATIVE } from '@pancakeswap/sdk'
import { ChainId } from '@pancakeswap/chains'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useTranslation } from '@pancakeswap/localization'
import useAuth from 'hooks/useAuth'
import useNativeCurrency from 'hooks/useNativeCurrency'
import useTokenBalance, { useBSCCakeBalance } from 'hooks/useTokenBalance'
import { isMobile } from 'react-device-detect'
import { useState } from 'react'
import InternalLink from 'components/Links'

const COLORS = {
  ETH: '#627EEA',
  BNB: '#14151A',
}

interface WalletInfoProps {
  hasLowNativeBalance: boolean
  switchView: (newIndex: number) => void
  onDismiss: InjectedModalProps['onDismiss']
}

const WalletInfo: React.FC<WalletInfoProps> = ({ hasLowNativeBalance, onDismiss }) => {
  const { t } = useTranslation()
  const { account, chainId, chain } = useActiveWeb3React()
  const isBSC = chainId === ChainId.BSC
  const native = useNativeCurrency()
  const wBNBToken = WNATIVE[ChainId.BSC]
  const [mobileTooltipShow, setMobileTooltipShow] = useState(false)
  const { logout } = useAuth()

  const handleLogout = () => {
    onDismiss?.()
    logout()
  }
  const {
    tooltip: buyCryptoTooltip,
    tooltipVisible: buyCryptoTooltipVisible,
    targetRef: buyCryptoTargetRef,
  } = useTooltip(
    <>
      <Box maxWidth="140px">
        <FlexGap gap="8px" flexDirection="column" justifyContent="space-between">
          <Text as="p">
            {t('%currency% Balance Low. You need %currency% for transaction fees.', {
              currency: native?.symbol,
            })}
          </Text>
          <InternalLink href="/buy-crypto" onClick={() => onDismiss?.()}>
            <Button height="30px">{t('Buy %currency%', { currency: native?.symbol })}</Button>
          </InternalLink>
        </FlexGap>
      </Box>
    </>,
    {
      isInPortal: false,
      placement: isMobile ? 'top' : 'bottom',
      trigger: isMobile ? 'focus' : 'hover',
      ...(isMobile && { manualVisible: mobileTooltipShow }),
    },
  )

  return (
    <>
    </>
  )
}

export default WalletInfo
