import React from "react";

const Footer = () => {
    return <>
<footer className="bg-white">
	<div className="container mx-auto px-8">

        <div className="w-full flex flex-col md:flex-row py-6">
				
			<div className="flex-1 mb-6">
                <h3><strong>Sprendimas</strong></h3>
                <a href="https://www.addad.lt"><p className="p-1 no-underline hover:underline">Addad.lt</p></a>
                <p className="p-1" >2022 © Kaip-uzsidirbti.lt - visos teisės saugomos. Griežtai draudžiama kopijuoti tinklapyje pateikta informaciją be raštiško sutikimo.</p>
                <p className="p-1 ">Domina reklama mūsų tinklapyje? - <a href="https://www.kaip-uzsidirbti.lt/reklama/"><strong className="no-underline hover:underline">Susisiekite!</strong></a></p>
			</div>
		
	
            <div className="flex-1 px-2">
                <h3 className="uppercase text-gray-500 md:mb-6"><strong>Informacija</strong></h3>
                <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a target="_blank" rel="noreferrer" href="https://www.kaip-uzsidirbti.lt/apie-mus/" className="no-underline hover:underline text-gray-800 hover:text-blue-500">Apie Mus</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a target="_blank" rel="noreferrer" href="https://www.kaip-uzsidirbti.lt/susisiekite/" className="no-underline hover:underline text-gray-800 hover:text-blue-500">Susisiekite</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a target="_blank" rel="noreferrer" href="https://www.kaip-uzsidirbti.lt/reklama/" className="no-underline hover:underline text-gray-800 hover:text-blue-500">Reklama</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a target="_blank" rel="noreferrer" href="https://www.kaip-uzsidirbti.lt/privatumo-politika/" className="no-underline hover:underline text-gray-800 hover:text-blue-500">Privatumo Politika</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a target="_blank" rel="noreferrer" href="https://www.kaip-uzsidirbti.lt/slapuku-politika/" className="no-underline hover:underline text-gray-800 hover:text-blue-500">Slapukų politika</a>
                    </li>
                </ul>
            </div>
            <div className="flex-1 px-2">
                <h3 className="uppercase text-gray-500 md:mb-6"><strong>Social</strong></h3>
                <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a
                    href="https://www.facebook.com/kaipuzsidirbti/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="facebook icow-8 h-8"
                      src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-facebook-social-media-justicon-flat-justicon.png"
                      alt="..."
                    />
                  </a>
                    </li>
                </ul>
            </div>
            <div className="flex-1 px-2">
                <h3 className="uppercase text-gray-500 md:mb-6"><strong>Company</strong></h3>
                <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="!#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Official Blog</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="!#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">About Us</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="!#" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
	
	

</footer>
    </>
}

export default Footer;