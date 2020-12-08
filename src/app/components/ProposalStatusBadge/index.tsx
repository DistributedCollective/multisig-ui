import React from 'react';
import { ProposalState } from 'types/Proposal';

const getTitle = (state: ProposalState) => {
  switch (state) {
    case ProposalState.Pending:
      return 'Pending';
    case ProposalState.Active:
      return 'Active';
    case ProposalState.Succeeded:
    case ProposalState.Queued:
    case ProposalState.Executed:
      return 'Passed';
    case ProposalState.Canceled:
    case ProposalState.Defeated:
    case ProposalState.Expired:
      return 'Failed';
  }
};

const getBorderColor = (state: ProposalState) => {
  switch (state) {
    case ProposalState.Pending:
    case ProposalState.Active:
      return 'border-indigo-700';
    case ProposalState.Succeeded:
    case ProposalState.Queued:
    case ProposalState.Executed:
      return 'border-green-500';
    case ProposalState.Canceled:
    case ProposalState.Defeated:
    case ProposalState.Expired:
      return 'border-gray-500';
  }
};

const getTextColor = (state: ProposalState) => {
  switch (state) {
    case ProposalState.Pending:
    case ProposalState.Active:
      return 'text-indigo-700';
    case ProposalState.Succeeded:
    case ProposalState.Queued:
    case ProposalState.Executed:
      return 'text-green-500';
    case ProposalState.Canceled:
    case ProposalState.Defeated:
    case ProposalState.Expired:
      return 'text-gray-500';
  }
};

interface Props {
  state: ProposalState;
}

export function ProposalStatusBadge({ state }: Props) {
  return (
    <div
      className={`border rounded py-0 px-1 text-xs ${getBorderColor(
        state,
      )} ${getTextColor(state)} text-center`}
      style={{ width: '70px' }}
    >
      {getTitle(state)}
    </div>
  );
}
