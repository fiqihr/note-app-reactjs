import React, { useState } from "react";
import InputJudul from "../elements/InputJudul";
import InputIsi from "../elements/InputIsi";
import Button from "../elements/Button";
import Swal from "sweetalert2";

const PopUpDetail = (props) => {
  const {
    setPopupDetail,
    title: initialTitle,
    content: initialContent,
    onUpdate,
  } = props;

  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  const handleUpdate = () => {
    Swal.fire({
      text: "Catatan berhasil diperbarui",
      icon: "success",
      confirmButtonText: "Okay",
      confirmButtonColor: "#88AB8E",
    });
    onUpdate(title, content);
    setPopupDetail(false);
  };

  return (
    <div className="fixed inset-0 bg-slate-900 bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-color4 p-6 rounded-lg shadow-md lg:w-1/2 w-11/12 transform transition-transform duration-300 scale-100">
        <h2 className="text-4xl lg:text-2xl font-bold mb-4 text-center lg:text-left">
          Detail Catatan
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Judul</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Update state judul
            className="w-full text-2xl  lg:text-xl p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Isi Catatan</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)} // Update state isi
            className="w-full h-80 p-2 border rounded "
          />
        </div>
        <div className="flex justify-center md:justify-end lg:justify-end gap-2 mt-4">
          <Button
            text="Batal"
            icon="/icons/cancel.svg"
            click={() => setPopupDetail(false)}
          />
          <Button
            text="Update"
            icon="/icons/update.svg"
            click={handleUpdate} // Simpan perubahan
          />
        </div>
      </div>
    </div>
  );
};

export default PopUpDetail;
