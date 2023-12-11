import { styled } from 'styled-components'
import { Box, Text } from '@pancakeswap/uikit'

const TransactionsContainer = styled(Box)`
  max-height: 300px;
  overflow-y: auto;
`

interface WalletTransactionsProps {
  onDismiss: () => void
}

const WalletTransactions: React.FC<React.PropsWithChildren<WalletTransactionsProps>> = ({ onDismiss }) => {

  return (
    <Box minHeight="120px">
    </Box>
  )
}

export default WalletTransactions
