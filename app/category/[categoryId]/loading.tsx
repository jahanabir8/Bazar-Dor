import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-green-50 px-4 py-6">
      <div className="mx-auto max-w-7xl animate-pulse">
        {/* category header skeleton */}
        <div className="flex items-center gap-4 rounded-2xl border bg-white p-5">
          <div className="h-12 w-12 rounded-full bg-gray-200" />
          <div className="space-y-2">
            <div className="h-6 w-28 rounded bg-gray-200" />
            <div className="h-4 w-52 rounded bg-gray-200" />
          </div>
        </div>

        {/* sort bar skeleton */}
        <div className="mt-4 flex justify-end rounded-2xl border bg-white p-4">
          <div className="h-8 w-36 rounded-lg bg-gray-200" />
        </div>

        <div className="mt-4 h-4 w-44 rounded bg-gray-200" />

        {/* card skeletons */}
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="rounded-2xl border bg-white p-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-gray-200" />
                <div className="space-y-2">
                  <div className="h-4 w-28 rounded bg-gray-200" />
                  <div className="h-3 w-16 rounded bg-gray-200" />
                </div>
              </div>

              <div className="mt-4 h-3 w-20 rounded bg-gray-200" />
              <div className="mt-2 flex items-end justify-between">
                <div className="h-6 w-24 rounded bg-gray-200" />
                <div className="h-6 w-14 rounded-full bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;