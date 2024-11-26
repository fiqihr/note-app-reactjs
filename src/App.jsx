import React from "react";

const App = () => {
  return (
    <div className="container mx-auto w-2/3 bg-red-200">
      <div className="mb-4">
        <h2 className="text-4xl font-bold">Note App</h2>
      </div>
      <hr />
      <div className="my-4 w-2/3 mx-auto flex flex-col items-center border p-4 gap-4">
        <p className="text-center text-2xl ">Catat</p>
        <input
          type="text"
          className="w-full border border-emerald-500 rounded-md px-2 py-1"
          placeholder="Judul Catatan"
        />
        <textarea
          className="w-full h-40 border border-emerald-500 rounded-md px-2 py-1"
          name=""
          id=""
          placeholder="Isi Catatan"
        ></textarea>
        <button className="bg-emerald-600 text-white rounded-md px-4 py-1">
          Simpan
        </button>
      </div>
      <hr />
      <div className="my-4">
        <h3 className="text-3xl font-bold mb-4">Catatan Kamu</h3>
        <div className=" grid grid-cols-3 gap-4">
          <div className="bg-gray-50 p-5 rounded-md border shadow-md">
            <p className="text-xl font-bold">Judul Catatan</p>
            <p className="text-sm mb-2 italic text-gray-500">
              Jumat, 22 November 2024
            </p>
            <hr />
            <p className="my-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              architecto corrupti perspiciatis reprehenderit consectetur
              aspernatur praesentium modi sapiente odio, doloremque a odit
              repudiandae, rerum, illum provident quaerat dolorem non harum
              excepturi maiores numquam porro.
            </p>
            <hr />
            <div className="flex mt-2 gap-2 justify-center">
              <button className="bg-yellow-400 text-white rounded-md w-1/4 py-1 hover:bg-opacity-70 hover:shadow-md">
                Edit
              </button>
              <button className="bg-red-400 text-white rounded-md w-1/4 py-1 hover:bg-opacity-70 hover:shadow-md">
                Hapus
              </button>
              <button className="bg-blue-400 text-white rounded-md w-1/4 py-1 hover:bg-opacity-70 hover:shadow-md">
                Arsipkan
              </button>
            </div>
          </div>
          <div className="bg-gray-50 p-5 rounded-md border shadow-md">
            <p className="text-xl font-bold">Judul Catatan</p>
            <p className="text-sm mb-2 italic text-gray-500">
              Jumat, 22 November 2024
            </p>
            <hr />
            <p className="my-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              architecto corrupti perspiciatis reprehenderit consectetur
              aspernatur praesentium modi sapiente odio, doloremque a odit
              repudiandae, rerum, illum provident quaerat dolorem non harum
              excepturi maiores numquam porro.
            </p>
            <hr />
            <div className="flex mt-2 gap-2 justify-center">
              <button className="bg-yellow-400 text-white rounded-md w-1/4 py-1 hover:bg-opacity-70 hover:shadow-md">
                Edit
              </button>
              <button className="bg-red-400 text-white rounded-md w-1/4 py-1 hover:bg-opacity-70 hover:shadow-md">
                Hapus
              </button>
              <button className="bg-blue-400 text-white rounded-md w-1/4 py-1 hover:bg-opacity-70 hover:shadow-md">
                Arsipkan
              </button>
            </div>
          </div>
          <div className="bg-gray-50 p-5 rounded-md border shadow-md">
            <p className="text-xl font-bold">Judul Catatan</p>
            <p className="text-sm mb-2 italic text-gray-500">
              Jumat, 22 November 2024
            </p>
            <hr />
            <p className="my-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              architecto corrupti perspiciatis reprehenderit consectetur
              aspernatur praesentium modi sapiente odio, doloremque a odit
              repudiandae, rerum, illum provident quaerat dolorem non harum
              excepturi maiores numquam porro.
            </p>
            <hr />
            <div className="flex mt-2 gap-2 justify-center">
              <button className="bg-yellow-400 text-white rounded-md w-1/4 py-1 hover:bg-opacity-70 hover:shadow-md">
                Edit
              </button>
              <button className="bg-red-400 text-white rounded-md w-1/4 py-1 hover:bg-opacity-70 hover:shadow-md">
                Hapus
              </button>
              <button className="bg-blue-400 text-white rounded-md w-1/4 py-1 hover:bg-opacity-70 hover:shadow-md">
                Arsipkan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
