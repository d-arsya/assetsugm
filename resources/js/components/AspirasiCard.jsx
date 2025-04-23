// AspirasiCard.jsx
import { useState } from "react";
import AspirasiModal from "./AspirasiModal";

export default function AspirasiCard({ name, angkatan, aspiration }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div 
        className="flex flex-col font-inter py-7 px-7 min-w-[200px] md:w-full min-h-[200px] md:h-[300px] cursor-pointer hover:text-white bg-[#F6F6F6] hover:bg-[#115C5B] border border-[#C6C6C6] rounded-2xl"
        onClick={openModal}
      >
        <div className="flex items-center gap-5 flex-wrap">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src="elon.jpg" alt="profile picture" className="object-cover" />
          </div>
          <div>
            <p className="font-bold text-base md:text-lg lg:text-xl">{name}</p>
            <p className="font-light text-xs md:text-sm text-[#989898]">{angkatan}</p>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center my-5">
          <p className="text-sm md:text-base lg:text-lg text-center line-clamp-3">" {aspiration} "</p> 
        </div>
      </div>

      {/* Modal */}
      <AspirasiModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        name={name}
        angkatan={angkatan}
        aspiration={aspiration}
      />
    </>
  );
}