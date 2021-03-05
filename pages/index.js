
export default function Home ({pokemon}){
    return(
        <ul className="grid grid-cols-6 gap-4">
            {pokemon.map((poke, index) => (
                <div key={index}>
                    <li>
                        <div className="mx-auto border border-black-700 flex items-center justify-center shadow">
                            <img className="rounded-tr-md rounded-tl-md h-40 w-40" src={poke.image}/>
                            <div className="bg-white p-8 rounded-bl-md rounded-br-md">
                                <span>{index + 1}.</span>
                                <h2 className="text-gray-700 font-semibold">{poke.name}</h2>
                            </div>
                        </div>
                    </li>
                </div>
            ))}
        </ul>
    );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
Home.getInitialProps = async () => {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=110')
    const {results} = await res.json()
    const pokemon = results.map((result, index) => {
        const paddedIndex = () => {
            return(
            index < 9 ? (
                '00' + (index + 1)
            ) : (
                '0' + (index + 1)
            ))
        }
        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex()}.png`
        return {
            ...result,
            image,
        };
    });
  
    // By returning { props: pokemon }, the Blog component
    // will receive `pokemon` as a prop at build time
    return { pokemon: pokemon}
  }

