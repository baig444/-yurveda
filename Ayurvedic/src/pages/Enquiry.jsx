const Enquiry = () => {
  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get in touch</h1>

          <p className="mt-4 text-gray-500">
            Ask your questions or get in touch with our friendly team.
          </p>
        </div>

        <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>

            <div className="relative">
              <input
                type="name"
                className="w-full outline rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full outline rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="text" className="sr-only">
              Message
            </label>

            <div className="relative">
             <textarea name="text" placeholder="Enter Message" id="text"
             className="w-full outline rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
             ></textarea>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="inline-block rounded-lg bg-black px-10 py-3 text-sm font-medium text-white"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Enquiry;
