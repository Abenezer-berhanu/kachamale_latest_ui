export default function Loading() {
  return (
    <div className="p-4 w-full h-screen">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full">
        <div className="hidden md:block bg-gray-200 animate-pulse rounded-lg h-full col-span-1" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 col-span-3">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 animate-pulse rounded-lg aspect-video"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
