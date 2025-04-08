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
        <section className="flex flex-col items-center" >
            <h1 className="font-bold p-2 " >{cityName}</h1>
            <img src={imgSrc} alt="Village" className="w-80 h-60 p-1" />
            <p className="font-bold p-2 " >{Demography}</p>
            <p className="font-bold p-1 " >{Superficie}</p>
            <p className="italic p-1 m-2" >{FunFact}</p>
        </section>
        </>
     );
}

export default VillageItem;