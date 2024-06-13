import { json } from "react-router-dom";
import './Contact.css';
import { useEffect } from "react";

export const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:davis.7289@buckeyemail.osu.edu';
  };
  const handleTextClick = () => {
    window.location.href = 'sms:9542408952';
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="bg-brand-300 text-center">
      <h1 className="transition-all duration-500 text-shadow-xl hover:text-shadow-lg font-bold text-6xl p-7vh">Contact.</h1>
      <div className="flex bg-brand-300">
        <div className="flex-grow bg-brand-300 hidden sm:block lg:flex-grow-1"></div>
        <div className="flex-grow bg-brand-300">
          <div className="text-center bg-white rounded-lg hover transition duration-300">
            <h1 className="font-semibold text-xl pt-5vh">Please reach out to me.</h1>
            <div className="flex justify-center">
              <button onClick={handleEmailClick} className="hover m-5vh bg-brand-400 text-white p-10 rounded-3xl hover:bg-brand-500 transition duration-300">Send Email</button>
              <button onClick={handleTextClick} className="hover transition duration-300 m-5vh bg-brand-400 text-white p-10 rounded-3xl hover:bg-brand-500">Send Text</button>
            </div>
          </div>
        </div>
        <div className="flex-grow bg-brand-300 hidden sm:block lg:flex-grow-1"></div>
      </div>

      <h1 className="transition-all duration-500 text-shadow-xl hover:text-shadow-lg  font-bold text-6xl p-7vh">Socials.</h1>
      <div className="flex bg-brand-300 pb-4vh">
        <div className="flex-grow bg-brand-300 hidden sm:block lg:flex-grow-1"></div>
        <div className="flex-grow bg-brand-300">
          <div className="hover transition duration-300 text-center bg-white rounded-lg">
            <h1 className="font-semibold text-xl pt-5vh">Please reach out to me.</h1>
            <div className="flex justify-center">
              <div className="pl-7vh m-5vh flex justify-center items-center">
                <div className="linkedin badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="victor-davis-osu" data-version="v1">
                  <a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/victor-davis-osu?trk=profile-badge"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow bg-brand-300 hidden sm:block lg:flex-grow-1"></div>
      </div>
    </div>
  );
};
