
export default function ChatLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  return (
      <div className="absolute bottom-[5%] right-[70px] min-w-[500px] h-[90%] border-gray-300 border overflow-auto bg-white shadow-lg rounded-lg p-3" >
            <div className="bg-pebble-200 h-[30px] rounded-lg text-center mb-3">
                채팅방
            </div>
            <div className="">
              {children}
            </div>
      </div>
  );
}
