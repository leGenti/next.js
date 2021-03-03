
export default function Home({pokemon}){
    return(
        <ul className="grid grid-cols-6 gap-4">
            {pokemon.map((poke, index) => (
                <div key={index}>
                    <li>
                        <img className="w-20 h-20" src={poke.image} alt='pokemon-image'/>
                        <span>{index + 1}.</span>
                        {poke.name}
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
            index <=   10 ? (
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
