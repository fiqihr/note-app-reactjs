import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layouts/Header";
import Button from "../components/elements/Button";
import Card from "../components/fragments/Card";
import PopUpAdd from "../components/fragments/PopUpAdd";
import PageHeader from "../components/layouts/PageHeader";
import { getInitialData } from "../data/Notes";
import Swal from "sweetalert2";

const Home = () => {
  // const [isPopupOpen, setPopupOpen] = useState(false);
  // const [notes, setNotes] = useState(() => {
  //   return JSON.parse(localStorage.getItem("notes")) || [];
  // });
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [notes, setNotes] = useState(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      return storedNotes;
    } else {
      const initialData = getInitialData();
      localStorage.setItem("notes", JSON.stringify(initialData));
      return initialData;
    }
  });

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
    document.title = "Home | Note App";
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

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
    Swal.fire({
      title: "Arsipkan catatan?",
      showCancelButton: true,
      confirmButtonText: "Iya",
      confirmButtonColor: "#88AB8E",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          text: "Catatan berhasil diarsipkan",
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
          title="Semua Catatan Kamu"
          buttonicon="/icons/archive.svg"
          buttontext="Arsip Kamu"
          linkto="/arsip"
        />
        <div className="lg:w-auto w-1/3">
          <Button
            text="Tambah Catatan"
            icon="/icons/add.svg"
            click={() => setPopupOpen(true)}
          />
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-3 lg:gap-4">
          {notes.filter((note) => !note.isArchived).length === 0 ? (
            <p className="flex justify-center py-28 italic text-4xl text-center text-gray-300 col-span-full">
              Tidak ada catatan
            </p>
          ) : (
            notes
              .filter((note) => !note.isArchived)
              .map((note) => (
                <Card
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  date={note.date}
                  content={note.content}
                  archivebtntext="Arsipkan"
                  archivebtnicon="/icons/add-archive.svg"
                  archivebtnclick={() => archiveNote(note.id)}
                  deletebtnclick={() => deleteNote(note.id)}
                />
              ))
          )}
        </div>
      </div>
      {isPopupOpen && (
        <PopUpAdd setPopupOpen={setPopupOpen} addNote={addNote} />
      )}
    </div>
  );
};

export default Home;
