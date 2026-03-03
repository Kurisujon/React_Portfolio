const MonoBlog = ({ data, onOpen }) => {
  return (
    <div className="group rounded-lg border border-gray-100 hover:shadow-2xl bg-white shadow-gray-300 transition-all duration-300 cursor-pointer flex flex-col h-full overflow-hidden" onClick={() => onOpen?.(data)}>
      <div className="overflow-hidden">
        <img
          src={data?.image}
          alt={data?.title || "Certificate"}
          loading="lazy"
          className="w-full h-56.5 object-cover transform transition-transform duration-500 ease-out group-hover:scale-110 motion-reduce:transform-none motion-reduce:transition-none"
        />
      </div>
      <div className="m-6 flex flex-col flex-grow">
        <p className="text-[10px] xs:text-[14px] font-normal text-gray-400">{data?.dateTime}</p>
        <p className="text-[14px] xs:text-lg font-medium text-[#333333] min-h-[3.5rem] flex items-start">
          {data?.title?.length > 40 ? `${data?.title.slice(0, 40)}...` : data?.title}
        </p>
        <p className="text-xs xs:text-[14px] text-gray-600 mt-2 min-h-[4.5rem]">
          {data?.description?.length > 80 ? `${data?.description.slice(0, 80)}...` : data?.description}
        </p>
      </div>
    </div>
  );
};

export default MonoBlog;
