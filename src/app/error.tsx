"use client"; // Error boundaries must be Client Components

import { useEffect, useState } from "react";

export default function Error() {
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    if (refresh) {
      location.reload();
      setRefresh(false);
    }
  }, [refresh]);

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h2 className="text-3xl font-bold text-center text-black/50">
        Something went wrong!
      </h2>
      <button
        className="bg-main_blue text-white px-4 py-2 rounded-lg"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => setRefresh(true)
        }
      >
        Try again
      </button>
    </div>
  );
}
