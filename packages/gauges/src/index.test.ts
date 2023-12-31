import { expect, test } from 'vitest'
import * as namedExports from './index'

test('exports', () => {
  expect(Object.keys(namedExports)).toMatchInlineSnapshot(`
    [
      "calcGaugesVotingABI",
      "gaugesVotingABI",
      "GAUGES_ADDRESS",
      "GAUGES_CALC_ADDRESS",
      "CONFIG_TESTNET",
      "CONFIG_PROD",
      "GAUGES_CONFIG",
      "getAllGauges",
      "GaugeType",
      "GAUGE_TYPE_NAMES",
    ]
  `)
})
