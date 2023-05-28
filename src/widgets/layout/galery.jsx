import React from "react";

export default function Galery({ galeryType = "" }) {
  var galeryVent = [
    "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/349333621_762425968909789_4869772906156891536_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_ohc=g8iEEzi7fIMAX-h26jf&_nc_ht=scontent.fbeg5-1.fna&oh=00_AfAWXCG4yM7-6FZusEU2cUPi7uAWH0n5ejXRulCelG7HAA&oe=64784EC4",
    "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/349182766_255720883783706_6846192609830939572_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_ohc=Iy1kdXrauEYAX-MAsIa&_nc_ht=scontent.fbeg5-1.fna&oh=00_AfBmVmwGM2dAB7MHzd3DeXs_fRQPX5jtOf5FlntxXLDxAg&oe=64788140",
    "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/349180925_120855054345816_9190246561650375512_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_ohc=pCC_CaWlqeUAX-tHA_-&_nc_ht=scontent.fbeg5-1.fna&oh=00_AfB_fG9074k2wftAUt_9rpgmXSOs2dBPYCsQHBMvyCMKsQ&oe=6477BAA0",
    "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/349650555_138529182557146_1822374390101526556_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=eGJdlP1EWRgAX-IZ-hg&_nc_ht=scontent.fbeg5-1.fna&oh=00_AfD7h8iFZBfSnazAC4_DNrscYA0ao5nonlQ1ZTIX2d7uMw&oe=6477F9BA",
    "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/349639395_502147822038123_6062974413390497751_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_ohc=z9KQrezDaVEAX_Tvra7&_nc_ht=scontent.fbeg5-1.fna&oh=00_AfA9xnqzKS3usoF-VESgZvFsiKw7voaSB_QZfU89iSeaCQ&oe=6478B2D9",
  ];
  var galeryRoof = [
    "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/349085992_199773956263048_2924470442550662596_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=tFHnf_4kUDQAX-71yfF&_nc_ht=scontent.fbeg5-1.fna&oh=00_AfBxz5muPxONEnS9ntdVapW4OtrZ7JwIMB9AMwecI9nz1w&oe=64791650",
    "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/349955329_3456229227964257_4005611997219129840_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=g33TrzWeSS0AX_vS14E&_nc_ht=scontent.fbeg5-1.fna&oh=00_AfCuCbmKobHHWrMEU6W4ZAVUQRIi0wj_O5rGa-lyTnep4Q&oe=647867C6",
    "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/349603095_152078977730205_2038097907125071303_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=zDqoSZlSZ38AX8UP_n6&_nc_ht=scontent.fbeg5-1.fna&oh=00_AfCGOcBKhJXYKSFFdUj0catoshezmrkEI7yd07dF4Rc7iA&oe=6479453D",
    "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/349606979_1004719170521663_1477330627238489021_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=tLycCSzwLQMAX-4Ldrj&_nc_ht=scontent.fbeg5-1.fna&oh=00_AfDej18zmuB2QekrJDX4_EA-m7Smrljp4cpdSIJx16ybHg&oe=6478D028",
    "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/349144347_215261851285198_501836331153544774_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=LpHjrbZb5KQAX_Yt7e6&_nc_ht=scontent.fbeg5-1.fna&oh=00_AfBC9ll2ojbz8d_8LT0Wa3X3M0l_Hh94j469N2UFtBLKwQ&oe=6478DB89",
    "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/349073535_833717778088226_5718482491402937625_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_ohc=qL-SH4UyU34AX-7qO1C&_nc_ht=scontent.fbeg5-1.fna&oh=00_AfDDZv-GCjrhP4OuwQjO5md3czz4J6seO6qvpW0cYL8Hig&oe=6478AC7B",
    "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/349656723_1447503036053591_5030973023336570016_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=t4McW_1ORm0AX81dp6A&_nc_ht=scontent.fbeg5-1.fna&oh=00_AfBuevtf-rJtDcqFxBqsFTmce4gk2V3bh_tzbgc-UGR8jA&oe=64785B3E",
    "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/349641683_797432662002932_590552449985629096_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=zLTS_MxL6PwAX_h0VSj&_nc_ht=scontent.fbeg5-1.fna&oh=00_AfDx43EOmhM89xKazn1w-45UvONV-6z_T-aQ8OohhtZuhQ&oe=64779044",
  ];
  var galeryFance = [
    "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/349673778_3412643988953471_2191046160612746883_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=zu2N0iMnuL8AX9FLl94&_nc_ht=scontent.fbeg5-1.fna&oh=00_AfACGA58aUaHVX6k7Rg3weTums6XzhiJzRrDrPaYrwtABQ&oe=6479003D",
    "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/349618075_970204544325895_3237789597466839797_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=ncti6q0UYeEAX8FFUQV&_nc_ht=scontent.fbeg5-1.fna&oh=00_AfCi2uOgCufdxxOUoEiGRGbIUOHfRLSMMcL8-LU0TvS1Ww&oe=64779182",
    "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/349150474_824402291866498_3679649132140564028_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=CzlyFNuuCAQAX96fhsp&_nc_ht=scontent.fbeg5-1.fna&oh=00_AfCfBJXzHYy-zQcCb4qTAVade61R5FAVCA1rqXw65cQiTg&oe=6477790D",
    "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/349106635_246378351319633_1537885266570922389_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=P5fPa8HK7SgAX8YXwP0&_nc_ht=scontent.fbeg5-1.fna&oh=00_AfAocON7ONMKFDjQAAA23k3CpM5AESvza646BngN8NNxSg&oe=64786828",
    "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/349664157_288154790219881_4897837072358381659_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_ohc=ve36YEkDxnAAX9waMdA&_nc_ht=scontent.fbeg5-1.fna&oh=00_AfBjJrGCuPgA9Sw6N3kC3b5qw36I2EsgKu6w1_GfdXsOJg&oe=64777B16",
    "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/348980965_1905736433118877_4091886704211402034_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_ohc=6oMt31exOsYAX9qFT07&_nc_ht=scontent.fbeg5-1.fna&oh=00_AfAo2EL6wL7U3NqHsUhLfeZwH5pzXVPF2jd_OzvKApN2Sg&oe=64787223",
    "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/349156519_252640040646119_4613079985485709371_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_ohc=MGOzoyH0EbAAX-KbQxM&_nc_ht=scontent.fbeg5-1.fna&oh=00_AfCqt5PpZlBnwxwUIUuXgLpY_KJXLCUo9Y14fplp1z8ICw&oe=64782AEB",
    "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/349149244_3475927629359504_3034137620123667674_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=6QYlGljXT8oAX-aRvsa&_nc_ht=scontent.fbeg5-1.fna&oh=00_AfD8SVO-FM7D-AlFU47QavItHLxakhQFe_eMCmImPuOvwQ&oe=6478DA7E",
  ];
  var galeryList = galeryFance;
  if (galeryType == "vent") {
    galeryList = galeryVent;
  } else if (galeryType == "roof") {
    galeryList = galeryRoof;
  } else if (galeryType == "fance") {
    galeryList == galeryFance;
  }
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="-m-1 flex flex-wrap md:-m-2">
        {galeryList.map((e, index) => (
          <div className="flex w-1/3 flex-wrap" key={index}>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={e}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
