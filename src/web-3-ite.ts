import {
  Approved as ApprovedEvent,
  OwnershipChanged as OwnershipChangedEvent,
  PageCreated as PageCreatedEvent,
  PageFeesWithdrawn as PageFeesWithdrawnEvent,
  PageTreasuryDistributed as PageTreasuryDistributedEvent,
  UpdateExecuted as UpdateExecutedEvent,
  UpdateRequested as UpdateRequestedEvent
} from "../generated/Web3ite/Web3ite"
import {
  Approved,
  OwnershipChanged,
  PageCreated,
  PageFeesWithdrawn,
  PageTreasuryDistributed,
  UpdateExecuted,
  UpdateRequested
} from "../generated/schema"

export function handleApproved(event: ApprovedEvent): void {
  let entity = new Approved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pageId = event.params.pageId
  entity.requestId = event.params.requestId
  entity.approver = event.params.approver

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipChanged(event: OwnershipChangedEvent): void {
  let entity = new OwnershipChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pageId = event.params.pageId
  entity.oldType = event.params.oldType
  entity.newType = event.params.newType

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePageCreated(event: PageCreatedEvent): void {
  let entity = new PageCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pageId = event.params.pageId
  entity.creator = event.params.creator
  entity.ownershipType = event.params.ownershipType
  entity.updateFee = event.params.updateFee
  entity.imt = event.params.imt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePageFeesWithdrawn(event: PageFeesWithdrawnEvent): void {
  let entity = new PageFeesWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pageId = event.params.pageId
  entity.receiver = event.params.receiver
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePageTreasuryDistributed(
  event: PageTreasuryDistributedEvent
): void {
  let entity = new PageTreasuryDistributed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pageId = event.params.pageId
  entity.winner = event.params.winner
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateExecuted(event: UpdateExecutedEvent): void {
  let entity = new UpdateExecuted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pageId = event.params.pageId
  entity.requestId = event.params.requestId
  entity.newHtml = event.params.newHtml

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateRequested(event: UpdateRequestedEvent): void {
  let entity = new UpdateRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pageId = event.params.pageId
  entity.requestId = event.params.requestId
  entity.requester = event.params.requester

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
