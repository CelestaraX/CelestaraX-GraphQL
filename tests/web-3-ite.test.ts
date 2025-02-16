import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { Approved } from "../generated/schema"
import { Approved as ApprovedEvent } from "../generated/Web3ite/Web3ite"
import { handleApproved } from "../src/web-3-ite"
import { createApprovedEvent } from "./web-3-ite-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let pageId = BigInt.fromI32(234)
    let requestId = BigInt.fromI32(234)
    let approver = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newApprovedEvent = createApprovedEvent(pageId, requestId, approver)
    handleApproved(newApprovedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Approved created and stored", () => {
    assert.entityCount("Approved", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Approved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "pageId",
      "234"
    )
    assert.fieldEquals(
      "Approved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "requestId",
      "234"
    )
    assert.fieldEquals(
      "Approved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "approver",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
