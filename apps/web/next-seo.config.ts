import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s',
  defaultTitle: '',
  description:
    'Cheaper and faster than Uniswap? Discover , the leading DEX on BNB Smart Chain (BSC) with the best farms in DeFi and a lottery for CAKE.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '',
    site: '',
  },
  openGraph: {
    title: '🥞  - A next evolution DeFi exchange on BNB Smart Chain (BSC)',
    description:
      '',
    images: [{ url: 'https://hero.jpg' }],
  },
}
