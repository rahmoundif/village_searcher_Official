interface VillageInterface {
    cityName:string;
    imgSrc: string;
    Demography: string;
    Superficie : string;
    FunFact: string;
    

}



function VillageItem({cityName, imgSrc, Demography, Superficie, FunFact} : VillageInterface){

    return ( 
        <>
        <section className="flex flex-col items-center pt-1 pb-2 lg:w-full" >
            <h1 className="font-bold p-2 text-2xl" ><span className="text-[#D55B3E]">{cityName[0]}</span>{cityName.slice(1)}</h1>
            <img src={imgSrc} alt="Village" className="w-80 h-60 rounded-2xl border-2 hover:scale-90 ease-in-out duration-300 lg:w-auto lg:h-90 " />
            <p className="font-bold p-2 " >{Demography}</p>
            <p className="font-bold p-1 " >{Superficie}</p>
            <p className="italic p-4 pb-15 text-center lg:mr-155 lg:ml-155" >{FunFact}</p>
            
        </section>
        </>
     );
}

export default VillageItem;