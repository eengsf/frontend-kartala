interface SkeletonProps {
  height?: string; 
  width?: string; 
  className?: string;
}

const Skeleton = ({
  height = 'h-4',
  width = '',
  className = '',
}: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${height} ${width} ${className}`}
    />
  );
};

export default Skeleton;

