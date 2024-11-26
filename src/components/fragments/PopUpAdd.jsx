import React, { useState } from "react";
import Button from "../elements/Button";
import InputJudul from "../elements/InputJudul";
import InputIsi from "../elements/InputIsi";
import Swal from "sweetalert2";

const PopUpAdd = ({ setPopupOpen, addNote }) => {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");

  const handleSave = () => {
    const newNote = {
      id: Date.now(),
      title: judul,
      date: new Date().toLocaleString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      content: isi,
      isArchived: false,
    };
    Swal.fire({
      text: "Catatan berhasil dibuat",
      icon: "success",
      confirmButtonText: "Okay",
      confirmButtonColor: "#88AB8E",
    });
    addNote(newNote);
    setPopupOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-color4 p-6 rounded-lg shadow-md lg:w-1/2 w-11/12 transform transition-transform duration-300 scale-100">
        <h2 className="text-4xl lg:text-2xl font-bold mb-4 text-center lg:text-left">Catatan Baru</h2>
        <InputJudul
          name="judul"
          placeholder="Judul Catatan"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
        />
        <InputIsi
          name="isi"
          placeholder="Isi Catatan"
          value={isi}
          onChange={(e) => setIsi(e.target.value)}
        />
        <div className="flex justify-center md:justify-end lg:justify-end gap-2 mt-4">
          <Button
            text="Batal"
            icon="/icons/cancel.svg"
            click={() => setPopupOpen(false)}
          />
          <Button text="Simpan" icon="/icons/save.svg" click={handleSave} />
        </div>
      </div>
    </div>
  );
};

export default PopUpAdd;
