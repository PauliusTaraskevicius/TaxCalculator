import React from "react";

const Navigation = () => {
  return (
    <nav className="navi shadow-xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex space-x-7">
            <div>
              <a
                href="https://www.kaip-uzsidirbti.lt"
                className="flex items-center py-4 px-2"
              >
                <h1 className="text-white font-semibold text-2xl text-center">
                  Atlyginimo skaičiuoklė 2022 metams
                </h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
