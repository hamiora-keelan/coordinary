import { useParams } from "react-router-dom"
import useCharities from "../../hooks/useCharities"

// TODO: the background image is flowing above the scroll bar on the side of the window because it's div is currently set to 'fixed.' bg-fixed can remain as it is; the initial fixed should probably be updated at some stage... non-urgent.
// TODO: Add Contents Component that allows users to quickly jump to each section of this page, fixed to the top-right side of the text-based section.

export default function OurDonors() {

  const { charitySlug } = useParams() 
  const { data: charity, isPending, isError, error } = useCharities().get(charitySlug as string)

  if (isPending) {
    return (
      <p>Loading...</p>
    )
  }
  if (isError) {
    return (
      <p>{error.message}</p>
    )
  }

  return (
    <div className="relative h-full w-5/6 overflow-y-scroll">
      <div className="fixed h-1/2 w-full bg-[url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-fixed object-cover overflow-x-hidden"></div>
      <div className="fixed h-1/2 w-full bg-gradient-to-b from-transparent from-80% to-background"></div>
      <div className="absolute left-0 top-[45%] mx-[5%] h-auto w-[90%] rounded-2xl bg-background p-6 shadow-lg">
        
      </div>
    </div>
  )
}
