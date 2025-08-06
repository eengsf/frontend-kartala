import Skeleton from './Skeleton';

interface LoadingTableProps {
  rows?: number;
  cols?: number;
  positions?: string[];
  height?: string;
}

const LoadingTable = ({
  rows = 5,
  cols = 5,
  positions = [],
}: LoadingTableProps) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr key={rowIndex} className="animate-pulse border-t border-customThin">
          {Array.from({ length: cols }).map((_, colIndex) => (
            <td key={colIndex} className="p-3.5">
              <Skeleton
                height={'h-3'}
                width={'w-[65%]'}
                className={positions[colIndex] === 'center' ? 'mx-auto' : ''}
              />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

export default LoadingTable
