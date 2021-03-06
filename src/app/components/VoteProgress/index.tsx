import React from 'react';
import { kFormatter } from 'utils/helpers';

interface Props {
  value: number;
  max: number;
  color: 'green' | 'red' | 'gray';
  showVotes?: boolean;
}

const colorMap = {
  green: 'bg-green-500',
  red: 'bg-red-600',
  gray: 'bg-gray-600',
  indigo: 'bg-indigo-600',
};

export function VoteProgress(props: Props) {
  const percentage = Math.min(
    Math.round((props.value / props.max) * 100) || 0,
    100,
  );
  return (
    <div className="w-full flex flex-row flex-no-wrap items-center justify-between mt-3">
      <div
        className={`bg-opacity-25 ${colorMap[props.color]} h-1 rounded w-full`}
      >
        <div
          className={`${colorMap[props.color]} h-1 rounded`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {props.showVotes && (
        <div className="w-2/6 pl-3 text-xs">{kFormatter(props.value)}</div>
      )}
    </div>
  );
}
