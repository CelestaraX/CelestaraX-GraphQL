import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  Approved,
  OwnershipChanged,
  PageCreated,
  PageFeesWithdrawn,
  PageTreasuryDistributed,
  UpdateExecuted,
  UpdateRequested
} from "../generated/Web3ite/Web3ite"

export function createApprovedEvent(
  pageId: BigInt,
  requestId: BigInt,
  approver: Address
): Approved {
  let approvedEvent = changetype<Approved>(newMockEvent())

  approvedEvent.parameters = new Array()

  approvedEvent.parameters.push(
    new ethereum.EventParam("pageId", ethereum.Value.fromUnsignedBigInt(pageId))
  )
  approvedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  approvedEvent.parameters.push(
    new ethereum.EventParam("approver", ethereum.Value.fromAddress(approver))
  )

  return approvedEvent
}

export function createOwnershipChangedEvent(
  pageId: BigInt,
  oldType: i32,
  newType: i32
): OwnershipChanged {
  let ownershipChangedEvent = changetype<OwnershipChanged>(newMockEvent())

  ownershipChangedEvent.parameters = new Array()

  ownershipChangedEvent.parameters.push(
    new ethereum.EventParam("pageId", ethereum.Value.fromUnsignedBigInt(pageId))
  )
  ownershipChangedEvent.parameters.push(
    new ethereum.EventParam(
      "oldType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(oldType))
    )
  )
  ownershipChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newType))
    )
  )

  return ownershipChangedEvent
}

export function createPageCreatedEvent(
  pageId: BigInt,
  creator: Address,
  ownershipType: i32,
  updateFee: BigInt,
  imt: boolean
): PageCreated {
  let pageCreatedEvent = changetype<PageCreated>(newMockEvent())

  pageCreatedEvent.parameters = new Array()

  pageCreatedEvent.parameters.push(
    new ethereum.EventParam("pageId", ethereum.Value.fromUnsignedBigInt(pageId))
  )
  pageCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  pageCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "ownershipType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(ownershipType))
    )
  )
  pageCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "updateFee",
      ethereum.Value.fromUnsignedBigInt(updateFee)
    )
  )
  pageCreatedEvent.parameters.push(
    new ethereum.EventParam("imt", ethereum.Value.fromBoolean(imt))
  )

  return pageCreatedEvent
}

export function createPageFeesWithdrawnEvent(
  pageId: BigInt,
  receiver: Address,
  amount: BigInt
): PageFeesWithdrawn {
  let pageFeesWithdrawnEvent = changetype<PageFeesWithdrawn>(newMockEvent())

  pageFeesWithdrawnEvent.parameters = new Array()

  pageFeesWithdrawnEvent.parameters.push(
    new ethereum.EventParam("pageId", ethereum.Value.fromUnsignedBigInt(pageId))
  )
  pageFeesWithdrawnEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  pageFeesWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return pageFeesWithdrawnEvent
}

export function createPageTreasuryDistributedEvent(
  pageId: BigInt,
  winner: Address,
  amount: BigInt
): PageTreasuryDistributed {
  let pageTreasuryDistributedEvent =
    changetype<PageTreasuryDistributed>(newMockEvent())

  pageTreasuryDistributedEvent.parameters = new Array()

  pageTreasuryDistributedEvent.parameters.push(
    new ethereum.EventParam("pageId", ethereum.Value.fromUnsignedBigInt(pageId))
  )
  pageTreasuryDistributedEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  pageTreasuryDistributedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return pageTreasuryDistributedEvent
}

export function createUpdateExecutedEvent(
  pageId: BigInt,
  requestId: BigInt,
  newHtml: string
): UpdateExecuted {
  let updateExecutedEvent = changetype<UpdateExecuted>(newMockEvent())

  updateExecutedEvent.parameters = new Array()

  updateExecutedEvent.parameters.push(
    new ethereum.EventParam("pageId", ethereum.Value.fromUnsignedBigInt(pageId))
  )
  updateExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  updateExecutedEvent.parameters.push(
    new ethereum.EventParam("newHtml", ethereum.Value.fromString(newHtml))
  )

  return updateExecutedEvent
}

export function createUpdateRequestedEvent(
  pageId: BigInt,
  requestId: BigInt,
  requester: Address
): UpdateRequested {
  let updateRequestedEvent = changetype<UpdateRequested>(newMockEvent())

  updateRequestedEvent.parameters = new Array()

  updateRequestedEvent.parameters.push(
    new ethereum.EventParam("pageId", ethereum.Value.fromUnsignedBigInt(pageId))
  )
  updateRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  updateRequestedEvent.parameters.push(
    new ethereum.EventParam("requester", ethereum.Value.fromAddress(requester))
  )

  return updateRequestedEvent
}
