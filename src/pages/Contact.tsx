export const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:davis.7289@buckeyemail.osu.edu';
  };

  return <div style={{ height: 'calc(100vh - 164px)' }} className="bg-brand-300 text-center">
    <h1 className="font-bold text-6xl p-7vh" >Contact.</h1>
    <div className="flex bg-brand-300 pb-4vh">
        <div className="flex-grow bg-brand-300 hidden sm:block lg:flex-grow-1"></div>
        <div className="flex-grow-2 bg-brand-300">
          <div className="bg-white rounded-lg">
          <h1 className="font-semibold text-xl pt-5vh" >Please reach me by email.</h1>
          <button onClick={handleEmailClick} className="m-24 bg-brand-400 text-white p-10 rounded-3xl hover:bg-brand-500 transition duration-300">Send Email</button>
          </div>
        </div>
        <div className="flex-grow bg-brand-300 hidden sm:block lg:flex-grow-1"></div>
      </div>
      <h1 className="font-bold text-6xl p-7vh" >Socials.</h1>
      <div className="flex bg-brand-300 pb-4vh">
        <div className="flex-grow bg-brand-300 hidden sm:block lg:flex-grow-1"></div>
        <div className="flex-grow-2 bg-brand-300">
          <div className="bg-white rounded-lg">
          <h1 className="font-semibold text-xl pt-5vh" >Please reach me by email.</h1>
          <button onClick={handleEmailClick} className="m-24 bg-brand-400 text-white p-10 rounded-3xl hover:bg-brand-500 transition duration-300">Send Email</button>
          </div>
        </div>
        <div className="flex-grow bg-brand-300 hidden sm:block lg:flex-grow-1"></div>
      </div>

</div>
}