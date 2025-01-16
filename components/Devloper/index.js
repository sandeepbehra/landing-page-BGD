import React from 'react';
import { SLIDES } from '@/uitls/constant';
const DevelopersSlider = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gray-100">
      <div className="flex items-center w-max gap-6 animate-marquee whitespace-nowrap">
      {  SLIDES.map((developer, index) => (
          <div
            key={index}
            className="px-6 py-4 text-lg  rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            <img src={developer} className='w-[200px] h-[200px] rounded-xl'></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopersSlider;
// import React from 'react';

// const DevelopersSlider = () => {
//   return (
//     <div className="relative w-full overflow-hidden bg-gray-100">
//       <div className="flex items-center w-max gap-6 animate-marquee whitespace-nowrap">
//         {['KNS', 'DLF', 'Omaxe', 'Adani', 'ETC'].map((developer, index) => (
//           <div
//             key={index}
//             className="px-6 py-4 text-lg font-semibold text-white bg-blue-500 rounded-full shadow-lg hover:scale-105 transition-transform"
//           >
//             {developer}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DevelopersSlider;
