

export const  useData = async () => {

    const data = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr");
    
}