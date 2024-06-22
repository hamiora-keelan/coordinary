import CharitySummary from "./charities_list/CharitySummary"
import useCharities from "../../hooks/useCharities"

export default function CharitiesList() {
  const { data: charities, isPending, isError, error } = useCharities().all()

  if (isPending) console.log('awaiting data...')
  if (isError) return console.error(`Error: ${error.message}`)
  if (!charities) return (
    <div className="w-auto h-full max-w-1/5 overflow-y-scroll border-b-2 border-l-2 border-secondary hover:border-primary ml-auto">
      <h2 className="underline underline-offset-2 text-center px-8 mt-4 font-display text-2xl">Charities</h2>
      <p>Error: no charities found.</p>
    </div>
  )
  return (
    <div className="w-auto h-full max-w-1/5 overflow-y-scroll border-b-2 border-l-2 border-secondary hover:border-primary ml-auto">
      <h2 className="text-center px-8 mt-4 font-display text-2xl text-primary">Charities in Tauranga</h2>
      {charities.map((charity) => {return <CharitySummary key={charity.id} {...charity} />})}
    </div>
  )
}