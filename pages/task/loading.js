export default function Loading() {
  return (
    <>
      <div className="grayscale blur scale-101 animate-pulse opacity-30">
        <div className="flex justify-center flex-wrap p-10 space-y-10">
          {[...Array(5).keys()].map((i) => (
            <span key={i} className="inline-block text-3xl w-[80%] border-2">
              Loading
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
