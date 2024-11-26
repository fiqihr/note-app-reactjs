const notes = [
  {
    id: 1,
    title: "Catatan Pertama",
    date: "Jumat, 22 November 2024",
    content: "Ini adalah isi catatan pertama.",
    archivebtntext: "Arsipkan",
    archivebtnicon: "/icons/add-archive.svg",
    archivebtnclick: () => alert("Mengarsipkan catatan pertama"),
  },
  {
    id: 2,
    title: "Catatan Kedua",
    date: "Sabtu, 23 November 2024",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus accusantium necessitatibus aut commodi esse fugiat impedit, omnis similique ducimus neque, nesciunt sint velit illo consectetur at nihil beatae quasi fuga, in perferendis quis blanditiis inventore vel nisi.",
    archivebtntext: "Arsipkan",
    archivebtnicon: "/icons/add-archive.svg",
    archivebtnclick: () => alert("Mengarsipkan catatan kedua"),
  },
];

export default notes;