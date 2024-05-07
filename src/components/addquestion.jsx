export default function Addquestion() {
  return (
    <div>
      <form className="flex justify-center items-center flex-col">
        <div className="flex justify-center items-center mt-16 w-full">
          <div className="flex flex-col m-3 mx-12">
            <label className="text-neutral-700 font-light">Title</label>
            <input
              className="border border-1 border-slate-600 rounded-sm outline-none p-[.40em] w-[20vw]"
              type="text"
            />
          </div>
          <div className="flex flex-col mx-12">
            <label className="text-neutral-700 font-light">Tags</label>
            <input
              className="border border-1 border-slate-600 rounded-sm outline-none p-[.40em] w-[20vw]"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col mt-20">
          <label>Describe</label>
          <textarea
            className="resize-none rounded-md border border-1 border-slate-700 outline-none w-[50vw] p-2 "
            name=""
            rows="7"
            id=""
          ></textarea>
        </div>
        <div className="flex justify-between items-center w-[50vw] mt-10">
          <button className="bg-red-600 rounded-lg text-white p-2 w-40 hover:bg-red-700 transition .4s ease-in-out duration-200">Reset</button>
          <button className="bg-green-600 rounded-lg text-white p-2 w-40 hover:bg-green-700 transition .4s ease-in-out duration-200">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
