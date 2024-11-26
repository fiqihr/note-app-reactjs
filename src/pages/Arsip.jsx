import React, { useEffect, useState } from "react";
import Header from "../components/layouts/Header";
import PageHeader from "../components/layouts/PageHeader";
import Button from "../components/elements/Button";
import Card from "../components/fragments/Card";
import Swal from "sweetalert2";

const Arsip = () => {
  useEffect(() => {
    document.title = "Arsip | Note App";
  }, []);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("notes")) || [];
  });

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
    document.title = "Home | Note App";
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    Swal.fire({
      title: "Hapus catatan?",
      showCancelButton: true,
      confirmButtonText: "Iya",
      confirmButtonColor: "#88AB8E",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          text: "Catatan berhasil dihapus",
          icon: "success",
          confirmButtonText: "Okay",
          confirmButtonColor: "#88AB8E",
        });
        setNotes(updatedNotes);
      }
    });
  };

  const archiveNote = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, isArchived: true } : note
    );
    setNotes(updatedNotes);
  };

  const unarchiveNote = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, isArchived: false } : note
    );
    Swal.fire({
      title: "Keluarkan catatan dari arsip?",
      showCancelButton: true,
      confirmButtonText: "Iya",
      confirmButtonColor: "#88AB8E",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          text: "Catatan berhasil dikeluarkan dari arsip",
          icon: "success",
          confirmButtonText: "Okay",
          confirmButtonColor: "#88AB8E",
        });
        setNotes(updatedNotes);
      }
    });
  };
  return (
    <div>
      <div className="container mx-auto lg:w-2/3 w-5/6">
        <Header />
        <PageHeader
          title="Arsip Kamu"
          buttonicon="icons/home.svg"
          buttontext="Halaman Utama"
          linkto="/"
        />
        <div className="md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-3 lg:gap-4">
          {notes
            .filter((note) => note.isArchived)
            .map((note) => (
              <Card
                key={note.id}
                id={note.id}
                title={note.title}
                date={note.date}
                content={note.content}
                archivebtntext="Keluarkan"
                archivebtnicon="/icons/unarchive.svg"
                archivebtnclick={() => unarchiveNote(note.id)}
                deletebtnclick={() => deleteNote(note.id)}
              />
            ))}
        </div>
      </div>
      {/* {isPopupOpen && <PopUpAdd setPopupOpen={setPopupOpen} />} */}
    </div>
  );
};

export default Arsip;
