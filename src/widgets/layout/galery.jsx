import React from "react";

export default function Galery({ galeryType = "" }) {
  var galeryVent = [
    "https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/349333621_762425968909789_4869772906156891536_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGilXq8sNq2utPc99K1DqU6iTg5eP6vHIiJODl4_q8ciPexaUvBVG0G9iKHy6PADrg&_nc_ohc=jD96FtpuERkAX8ZhHAU&_nc_ht=scontent.fbeg4-1.fna&oh=00_AfD9FFILiT1d4VCRk_r-FT8jnradwpiHNNZoNwIWN1dK_Q&oe=648037C4",
    "https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/349182766_255720883783706_6846192609830939572_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGP1y7Qz0BwixFbfgg1WHuHj6TbI5ofI-CPpNsjmh8j4Oy8-lgmPlE63IrVGIOBvjs&_nc_ohc=hz0s-FfCdocAX8bTOJj&_nc_ht=scontent.fbeg4-1.fna&oh=00_AfDwNJGB7MjCpORZObLCg0uCqks1nESqQJWev6bpI5HNaQ&oe=64806A40",
    "https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/349180925_120855054345816_9190246561650375512_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeErLPfxi23KMhi7pcW5OfJgWmh3Dpv09sJaaHcOm_T2wtehbhzKTVcuxHnlbAMVhF8&_nc_ohc=lwO858kug8MAX9ALDTo&_nc_ht=scontent.fbeg4-1.fna&oh=00_AfAK98y0oCGUCtcLrgqBUPoBMcB0nr4X5WHyQss4tNfgOA&oe=647FA3A0",
    "https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/349650555_138529182557146_1822374390101526556_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGS4Fm1SkqEndwtGwD712Om2TD2tHx9hIbZMPa0fH2EhrjK-X4LMg-97sqkKGviccI&_nc_ohc=pA8-VWVmhKIAX8hZnsX&_nc_ht=scontent.fbeg4-1.fna&oh=00_AfCwq3j70A48JmYo_7ZEezP1a1-aUlsVO-zlq3h7oTNUng&oe=647FE2BA",
    "https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/349639395_502147822038123_6062974413390497751_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGGWEOEyXfvA93YpvF-wFTrq3w-RX-_s1arfD5Ff7-zVunofGk4DQ0kQKqzXqRSi_4&_nc_ohc=9ENIejBt7FYAX_4OHWY&_nc_ht=scontent.fbeg4-1.fna&oh=00_AfD02LBo9UL9-Uw954p2TqoJsU3VpjJZzabh-3PNsjGY8Q&oe=64809BD9",
  ];
  var galeryRoof = [
    "https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/349085992_199773956263048_2924470442550662596_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeEQ9ynKTj8qum8xB_n6VcexI1nbwvj64eojWdvC-Prh6kpKoSYdwx9EcKD20wZ9rrY&_nc_ohc=RcDDNdp95I0AX9n-mQ8&_nc_ht=scontent.fbeg4-1.fna&oh=00_AfD3qUa-N21rtswO8Kmz9Rru_qtjRc0JM1YIJhZCViNl4Q&oe=6480FF50",
    "https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/349955329_3456229227964257_4005611997219129840_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeFvBSFNNw-VopXtrLArxLxZpTPAPH3P7vSlM8A8fc_u9Db43nsIOfPm3TnKdrL8ksg&_nc_ohc=gFiDsDJaQAEAX_iTDuk&_nc_ht=scontent.fbeg4-1.fna&oh=00_AfAOn_TO9h0nquEzI1d58IBx7AtcLXwU0SqhwveMbTkt5w&oe=648050C6",
    "https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/349603095_152078977730205_2038097907125071303_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGnYVMvXU259RJuvchl5iq43lsvTqRdxVPeWy9OpF3FU7dHVF8rWCR582S7uYSk6PU&_nc_ohc=K46Op_34fPEAX-BwYGD&_nc_ht=scontent.fbeg4-1.fna&oh=00_AfCEIRehJZDd4ch-mVua_caxg46evjtN5ngnD1oAkmX8vQ&oe=64812E3D",
    "https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/349606979_1004719170521663_1477330627238489021_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeFWpRpqb2KElNiP6MdE9wTBKeOdV4gaU2Qp451XiBpTZCpbJGzAzBB-r5B71BnE93c&_nc_ohc=8b4gWaZqBK4AX-MrrgA&_nc_ht=scontent.fbeg4-1.fna&oh=00_AfCFM8mkVq22wwyyCgb5sr5KM-lVk3gyMXo7yjdN_9Dc3w&oe=6480B928",
    "https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/349144347_215261851285198_501836331153544774_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGbd5OefGB02YusItyMRhOlmSMI2C6HZbaZIwjYLodltlM9oQax1VGUpmves-_eNLc&_nc_ohc=jQGLA48H7-IAX_DB0QL&_nc_ht=scontent.fbeg4-1.fna&oh=00_AfCyQfo17ZzRDtNvSeszhyUfR29yb0bK0SqJZ7Koxw2lSg&oe=6480C489",
    "https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/349073535_833717778088226_5718482491402937625_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGHNuha19q4WRRY0_i5hwTu8K5e7_A_yNrwrl7v8D_I2o1so2U9dJAhnzNJRf2Zo8E&_nc_ohc=aX-Y9VV_9RgAX_Jy-5D&_nc_ht=scontent.fbeg4-1.fna&oh=00_AfCHloCY1ZdPvIdnYqD6B_bV3qZj9AKWfXgt_c_5QjRUAA&oe=6480957B",
    "https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/349656723_1447503036053591_5030973023336570016_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeEMXYZUgx-geX-ntqb93KgfsYnksPF3sNixieSw8Xew2KrunQTtJMdfRckxq0gv1Xk&_nc_ohc=A-g4vCsPws4AX8er3Ug&_nc_ht=scontent.fbeg4-1.fna&oh=00_AfAY3zBkNIHR8kAsqDdFXCZh9LPIcImnIV-1JVYYr3Zl2Q&oe=6480443E",
    "https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/349641683_797432662002932_590552449985629096_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHB5qKLPF_-FtasKlaxOtvDS-l4_TcIMOVL6Xj9Nwgw5bjinNBozjGbtGwAYE-U8JQ&_nc_ohc=7JxbX5NZ0xgAX9GZVPZ&_nc_ht=scontent.fbeg4-1.fna&oh=00_AfAYuCh_EABdHnUdhRMnqCcJadbEbqjA0MdFrvLdPJOMrw&oe=647F7944",
  ];
  var galeryFance = [
    "https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/349673778_3412643988953471_2191046160612746883_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeFqvyPSuUw57QurcZ6A6fL3MEyHXTHzXYUwTIddMfNdhTRye7-1Xq94GpmY6bb54Lw&_nc_ohc=ICYRrWv5jcEAX_hfjpW&_nc_ht=scontent.fbeg4-1.fna&oh=00_AfD5IbaUYuOx48EBpJjStsKvJyxXXkLX2gn8F-VquOSqGA&oe=6480E93D",
    "https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/349618075_970204544325895_3237789597466839797_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHGD0ODma1GYnDi-oQm2LQbP07qCR5pPQw_TuoJHmk9DP9se5dp_TUUXQ6AFj_VSNs&_nc_ohc=HschV62jMyAAX_f5tHq&_nc_ht=scontent.fbeg4-1.fna&oh=00_AfCUgn7U4S6vs22bm6v1AZrUqotB2VdN4gP1QOCJnBDibQ&oe=647F7A82",
    "https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/349150474_824402291866498_3679649132140564028_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeF2qirFsAAcxlYraLK5eNxnRRp3MeI2Vl1FGncx4jZWXe9o_14LnWCpoEBkJVe3u28&_nc_ohc=lDRD7ptEvLIAX9DNYv1&_nc_ht=scontent.fbeg4-1.fna&oh=00_AfA6ARqdqnSKXQjuaA12AfmJGBrnhr6BnDQklbjOvs-eQA&oe=647F620D",
    "https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/349106635_246378351319633_1537885266570922389_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeEGj8NIT_asvrqpFsohywJ2d5RGGmD3NId3lEYaYPc0h-dDlTm30kdGqqv2x_5dldw&_nc_ohc=hW_yAo0mEDcAX8braO2&_nc_ht=scontent.fbeg4-1.fna&oh=00_AfBgxhA_RFArNlc7814xXjjk0YID0YPctXbKA_ma7rWlaQ&oe=64805128",
    "https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/349664157_288154790219881_4897837072358381659_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeEPNsArsrZMj-23NpXzPh1jbM8FN8SyMhJszwU3xLIyEqwtED_awUzNsTxnhk-dKOI&_nc_ohc=lMwvfcGD6DQAX8w3lHC&_nc_ht=scontent.fbeg4-1.fna&oh=00_AfBz5IO83i1wM7hOXIqvdUd5NJM_XDzJ0Fd9EJNmg0g9SQ&oe=647F6416",
    "https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/348980965_1905736433118877_4091886704211402034_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeEg2V_bWLzgPf2gXLGtpwnsZh36x-fXMyhmHfrH59czKLTiM6FWOFU29qsH_6D4Ekc&_nc_ohc=Ojix_eYcEO4AX-pEOM1&_nc_ht=scontent.fbeg4-1.fna&oh=00_AfC67w0F_Fb11GiUBGDupEkdKCPumzIn1kC7-OOo-4o-CQ&oe=64805B23",
    "https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/349156519_252640040646119_4613079985485709371_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeFJxGFcHq8LWO6SNmktRgczz8p4faVVwiDPynh9pVXCIAzI_QpzBLjrRzcg9t-BB-4&_nc_ohc=45OYKV7Z31UAX8WwUhh&_nc_ht=scontent.fbeg4-1.fna&oh=00_AfDoVMkZCB9BBqKaxyNOCMTtp_yLeWhU29Woq3vgVevEcQ&oe=648013EB",
    "https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/349149244_3475927629359504_3034137620123667674_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeFknuT4mwXzwDlK5r8cIYsPbuXn6kPeA2Ju5efqQ94DYvUO3MJyXl7QYu-4ML-KWp0&_nc_ohc=C114x83bSBMAX9CSa6V&_nc_ht=scontent.fbeg4-1.fna&oh=00_AfAEdPLS3LFB62IOQOPRJQZil-vBR7Oini6mEmw-ZoOhIA&oe=6480C37E",
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
