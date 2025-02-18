"use client";
import { useState } from "react";

interface KeyFeature {
  value: string;
  id: string;
  label: string;
  carId: string;
}

interface FeatureListProps {
  features: KeyFeature[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  const [visibleCount, setVisibleCount] = useState(10);

  const showMore = () => setVisibleCount((prev) => prev + 10);
  const showLess = () => setVisibleCount(10);

  return (
    <div>
      <ul className="list-disc pl-5 flex flex-col gap-2">
        {features.slice(0, visibleCount).map((feature) => (
          <li key={feature.id}>{feature.value}</li>
        ))}
      </ul>
      <div className="mt-2 flex gap-2">
        {visibleCount < features.length && (
          <button onClick={showMore} className="text-sky-500 font-semibold">
            Show More
          </button>
        )}
        {visibleCount > 10 && (
          <button onClick={showLess} className="text-yellow-500 font-semibold">
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default FeatureList;
