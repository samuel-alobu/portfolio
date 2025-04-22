function App() {
  return (
    <main className="bg-gray-800 text-white capitalize">
      {/* navbar */}
      <nav className="border-b flex justify-between items-center p-5 md:px-10">
        <div className="text-xl md:text-2xl font-bold">samuel alobu</div>
        <ul className="flex justify-between items-center gap-10">
          <a href="#" className="text-sm md:text-xl">
            Home
          </a>
          <a href="#" className="text-sm md:text-xl">
            Projects
          </a>
          <a href="#" className="text-sm md:text-xl">
            About
          </a>
        </ul>
      </nav>
      {/* header */}
      <header className="grid grid-cols-1 md:grid-cols-2">
        <img
          src="public\assets\Samuel Uche.jpeg"
          alt="Samuel Uche"
          className="p-20 md:p-32 md:pl-10"
        />
        <div className="text flex flex-col items-center text-center md:text-start md:items-start gap-5 justify-center">
          <div className="text-7xl font-bold">hi, i'm samuel!</div>
          <div className="text-xl text-gray-300">
            i'm a software developer based in abakaliki, ebonyi state. working
            towards creating software that makes life easier and more meaningful
          </div>
          <button className="bg-green-700 p-3 px-6 rounded-lg hover:bg-green-900 transition">
            Projects
          </button>
        </div>
      </header>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-6 animate-bounce"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
        />
      </svg>
      {/* about me */}
      <section className="p-10 md:p-32">
        <div className="text-4xl text-center font-bold">about me</div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-10">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-bold">get to know me!</div>
            <div className="text-lg text-gray-300">
              Hi, my name is Muhammad Ali and I am a highly ambitious,
              self-motivated, and driven software engineer based in Los Angeles,
              CA.
            </div>
            <div className="text-lg text-gray-300">
              I graduated from APTECH , Karchi in 2019 with a BS Diploma in
              Software Development and have been working in the field ever
              since.
            </div>
            <div className="text-lg text-gray-300">
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, to making YouTube videos,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </div>
            <div className="text-lg text-gray-300">
              I believe that you should never stop growing and that's what I
              strive to do, I have a passion for technology and a desire to
              always push the limits of what is possible. I am excited to see
              where my career takes me and am always open to new opportunities.
              🙂
            </div>
          </div>
          <div className="2">
            <div className="text-xl font-bold">my skills</div>
            <div className="flex flex-wrap py-3 space-x-3 gap-4">
              <button className="bg-green-500 hover:bg-green-800 p-3 rounded-md text-gray-700 px-5">
                HTML
              </button>
              <button className="bg-green-500 hover:bg-green-800 p-3 rounded-md text-gray-700 px-5">
                CSS
              </button>
              <button className="bg-green-500 hover:bg-green-800 p-3 rounded-md text-gray-700 px-5">
                JAVASCRIPT
              </button>
              <button className="bg-green-500 hover:bg-green-800 p-3 rounded-md text-gray-700 px-5">
                REACT JS
              </button>
              <button className="bg-green-500 hover:bg-green-800 p-3 rounded-md text-gray-700 px-5">
                NEXT JS
              </button>
              <button className="bg-green-500 hover:bg-green-800 p-3 rounded-md text-gray-700 px-5">
                GIT
              </button>
              <button className="bg-green-500 hover:bg-green-800 p-3 rounded-md text-gray-700 px-5">
                GITHUB
              </button>
              <button className="bg-green-500 hover:bg-green-800 p-3 rounded-md text-gray-700 px-5">
                WORDPRESS
              </button>
            </div>
            <img
              src="public\assets\hero-image.png"
              alt="hero-image"
              className="p-20"
            />
          </div>
        </div>
      </section>
      {/* projects */}
      <section className="p-10 md:px-32">
        <div className="text-4l text-center font-bold">projects</div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 space-x-5 space-y-5">
          <img
            src="public\assets\thankfulthoughts.png"
            alt="thankful-thoughts"
            className="rounded-2xl"
          />
          <div className="text flex flex-col justify-center items-start gap-3">
            <div className="text-3xl font-bold">thankful thoughts</div>
            <div className="text-xl text-gray-300">
              Thankful Thoughts is a web app that generates an appreciative
              sentence of something or someone you are thankful for.
            </div>
            <div className="flex">
              <img
                src="https://th.bing.com/th/id/OIP.tHtJ4T6wu4vXj2TRC9k2jgAAAA?w=80&h=80&c=7&o=6&dpr=1.3&pid=13.1"
                alt="github"
                className="w-10 h-10 rounded-full"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 grid grid-cols-2 py-10 space-x-5 space-y-5">
          <img
            src="public\assets\platoio.png"
            alt="thankful-thoughts"
            className="rounded-2xl"
          />
          <div className="text flex flex-col justify-center items-start gap-3">
            <div className="text-3xl font-bold">PlatoIO</div>
            <div className="text-xl text-gray-300">
              PlatoIO is a to-do list app that I built using PERN stack
            </div>
            <div className="flex">
              <img
                src="https://th.bing.com/th/id/OIP.tHtJ4T6wu4vXj2TRC9k2jgAAAA?w=80&h=80&c=7&o=6&dpr=1.3&pid=13.1"
                alt="github"
                className="w-10 h-10 rounded-full"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid grid-cols-2 py-10 space-x-5 space-y-5">
          <img
            src="public\assets\familyphotos.png"
            alt="thankful-thoughts"
            className="rounded-2xl"
          />
          <div className="text flex flex-col justify-center items-start gap-3">
            <div className="text-3xl font-bold">Kator Family Photos</div>
            <div className="text-xl text-gray-300">
              Kator Family Photos is a photos and video digitization service in
              the LA area.
            </div>
            <div className="flex">
              <img
                src="https://th.bing.com/th/id/OIP.tHtJ4T6wu4vXj2TRC9k2jgAAAA?w=80&h=80&c=7&o=6&dpr=1.3&pid=13.1"
                alt="github"
                className="w-10 h-10 rounded-full"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <div className="px-10 md:px-32">
        <div className="border"></div>
      </div>
      <div className="flex justify-between items-center p-10 px-32">
        <div>&copy; 2025 Samuel Alobu</div>
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.tHtJ4T6wu4vXj2TRC9k2jgAAAA?w=80&h=80&c=7&o=6&dpr=1.3&pid=13.1"
            alt="github"
            className="w-7 h-7 rounded-full"
          />
        </div>
      </div>
    </main>
  );
}

export default App;
