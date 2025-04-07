


function VillageItem({id, cityName, imgSrc, Demography, Superficie, FunFact}) {

    return ( 
        <>
        <section>
            <h1>{cityName}</h1>
            <img src={imgSrc} alt="Village" />
            <p>{Demography}</p>
            <p>{Superficie}</p>
            <p>{FunFact}</p>
        </section>
        </>
     );
}

export default VillageItem;