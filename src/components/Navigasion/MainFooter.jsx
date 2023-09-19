import {
  InstagramFilled,
  FacebookFilled,
  TwitterSquareFilled,
  YoutubeFilled,
} from "@ant-design/icons";
const MainFooter = () => {
  const icon = { fontSize: "30px" };

  return (
    <>
      <footer className="shadow-md py-8 px-20 flex flex-col lg:flex-row justify-between justify-items-center bg-blue-400 text-white">
        {/* 5 About Sections */}
        <div className="flex flex-col mb-4 lg:mb-0">
          <h3 className="text-lg font-semibold">TOKO KU</h3>
          <p className="mt-2 w-40">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            magnam
          </p>
        </div>

        <div className="flex flex-col mb-4 lg:mb-0">
          <h3 className="text-lg font-semibold">ABOUT</h3>
          <p className="mt-2">
            <ul>
              <li className="hover:text-violet-500">
                <a href="">Privacy Policy</a>
              </li>
              <li className="hover:text-violet-500">
                <a href="">Help Center</a>
              </li>
              <li className="hover:text-violet-500">
                <a href="">Terms & Condition</a>
              </li>
            </ul>
          </p>
        </div>

        <div className="flex flex-col mb-4 lg:mb-0">
          <h3 className="text-lg font-semibold">Follow Us On</h3>
          <p className="mt-2">
            <ul className="flex space-x-5">
              <li>
                <a href="" className="hover:text-violet-500">
                  <FacebookFilled style={icon} />
                </a>
              </li>
              <li>
                <a href="" className="hover:text-violet-500">
                  <InstagramFilled style={icon} />
                </a>
              </li>
              <li>
                <a href="" className="hover:text-violet-500">
                  <TwitterSquareFilled style={icon} />
                </a>
              </li>
              <li>
                <a href="" className="hover:text-violet-500">
                  <YoutubeFilled style={icon} />
                </a>
              </li>
            </ul>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col space-y-4">
          <div>
            <img
              src="https://via.placeholder.com/300"
              alt="Sample Image"
              className="w-[13rem] h-20 rounded-md mx-auto"
            />
            <div className="space-x-2">
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600">
                Playstore
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                App Store
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
