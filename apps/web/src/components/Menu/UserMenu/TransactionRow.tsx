import { Flex } from '@pancakeswap/uikit'
import { styled } from 'styled-components'

interface TransactionRowProps {
  chainId: number
  onDismiss: () => void
}

const TxnIcon = styled(Flex)`
  align-items: center;
  flex: none;
  width: 24px;
`

const Summary = styled.div`
  flex: 1;
  padding: 0 8px;
`

const TxnLink = styled.div`
  cursor: pointer;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  margin-bottom: 16px;
  width: 100%;

  &:hover {
    text-decoration: none;
  }
`

const renderIcon = () => {
  return (<></>)
}

const TransactionRow: React.FC<React.PropsWithChildren<TransactionRowProps>> = ({ }) => {
  return (<></>)
}

export default TransactionRow
