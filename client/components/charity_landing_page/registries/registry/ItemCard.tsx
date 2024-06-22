import { ItemFromRegister } from '../../../../../models/item'

export default function ItemCard(item: ItemFromRegister) {
  const progressBarWidth: string = `${((item.NZDRaised / item.priceInNZD) * 100).toFixed(2)}%`

  return (
    <div className="rounded-2xl border border-black text-center shadow-xl">
      <img
        className="mx-auto"
        src="https://i.imgur.com/RpKHLSx.gif"
        alt={item.name}
      ></img>
      <h1 className="text-2xl">
        {item.name}{' '}
        <span className="text-sm">{item.used === 1 ? '(Used)' : ''}</span>
      </h1>
      <div className="text-center">{progressBarWidth} Funded!</div>
      <div className="mx-auto mt-2 h-4 w-3/4 rounded-2xl bg-gray-200 shadow-xl">
        <div
          className="h-4 rounded-2xl bg-gradient-to-r from-blue-500 to-green-500 shadow-xl"
          style={{ width: progressBarWidth }}
        ></div>
        <div className="mt-2 flex justify-between text-sm text-gray-600">
          <span>$0</span>
          <span>${item.priceInNZD}</span>
        </div>
        <div className="mt-4 text-justify text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          totam nostrum tenetur ad voluptate ratione fugit magni nisi possimus
          perferendis nam placeat consequuntur sit impedit quaerat, vero maiores
          id accusamus.
        </div>
        <div className="mt-4">
          <button className="rounded border border-transparent bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
            Donate
          </button>
        </div>
      </div>
  )
}