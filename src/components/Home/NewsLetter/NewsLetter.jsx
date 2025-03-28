import newsLetterBg from '../../../assets/images/bg-shadow.png';
import newsImg from '../../../assets/images/newsletter.png';

const NewsLetter = () => {
  return (
    <div className=" bg-gradient-to-bl to-sky-100 from-[#a497e0]  bg-opacity-20 z-30 relative top-32 p-5 container  mx-auto border-[1px] border-gray-300">
      <div
        className="hero p-10 flex justify-center"
        style={{
          backgroundImage: `url(${newsLetterBg})`,
          backgroundColor: 'bg-yellow-100',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content text-center ">
          <div className="flex gap-8">
            <div>
              <img src={newsImg} alt="" className="w-72 h-52 rounded-lg" />
            </div>
            <div className="max-w-md flex flex-col  space-y-5 text-left">
              <h1 className="text-base md:text-3xl font-bold">
                Subscribe to our Newsletter
              </h1>
              <p className="text-gray-500 text-xs md:text-lg font-medium">
                Get the latest updates and news right in your inbox!
              </p>
              <div className="flex  flex-col md:flex-row gap-3">
                <input
                  className="px-3 py-1 border-[1px] border-gray-500  text-black outline-none"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className=" bg-blue-500 text-white  font-bold px-4 py-2 ">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
