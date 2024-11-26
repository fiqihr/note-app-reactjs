import React, { useState } from "react";
import Button from "../elements/Button";
import PopUpDetail from "./PopUpDetail";

const Card = (props) => {
  const [isPopupDetail, setPopupDetail] = useState(false);

  const [cardData, setCardData] = useState({
    title: props.title,
    content: props.content,
  });

  const handleUpdate = (newTitle, newContent) => {
    setCardData({ title: newTitle, content: newContent }); // Update data
  };

  return (
    <>
      <div
        onClick={() => setPopupDetail(true)} // Buka pop-up
        className="my-4 rounded bg-gray-50 p-4 shadow-md h-56 relative hover:shadow-lg hover:cursor-pointer hover:-translate-y-1 transition-all duration-100"
      >
        <p className="text-xl font-bold ">{cardData.title}</p>
        <p className="text-sm italic text-gray-500">{props.date}</p>
        <hr className="my-2" />
        <div className="h-20">
          <p className="line-clamp-3">{cardData.content}</p>
        </div>
        <div className="flex mt-2 gap-2 w-full mx-auto justify-center absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2">
          <Button
            text="Hapus"
            icon="/icons/delete.svg"
            click={(e) => {
              e.stopPropagation();
              props.deletebtnclick();
            }}
          />
          <Button
            text={props.archivebtntext}
            icon={props.archivebtnicon}
            click={(e) => {
              e.stopPropagation();
              props.archivebtnclick();
            }}
          />
        </div>
      </div>

      {/* PopUpDetail */}
      {isPopupDetail && (
        <PopUpDetail
          setPopupDetail={setPopupDetail}
          title={cardData.title}
          content={cardData.content}
          onUpdate={(updatedTitle, updatedContent) => {
            setCardData({ title: updatedTitle, content: updatedContent });
            const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
            const updatedNotes = storedNotes.map((note) =>
              note.id === props.id
                ? { ...note, title: updatedTitle, content: updatedContent }
                : note
            );
            localStorage.setItem("notes", JSON.stringify(updatedNotes));
          }}
        />
      )}
    </>
  );
};

export default Card;
