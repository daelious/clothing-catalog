export interface ItemProps {
  id: number;
  title: string;
  photo: string;
  tags: string[];
}

const Item: React.FC<ItemProps> = function ({id, title, photo, tags}) {
  return (
    <div className="item" key={id}>
      <img src={photo} alt={title} className="item-photo" />
      <div className="item-title">{title}</div>
      <div className="item-tags">
        {tags.map((tag, index) => (
          <button
          key={index}
          type="button"
          className="inline-block rounded-full border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-accent-300 hover:bg-primary-50/50 hover:text-primary-accent-300 focus:border-primary-600 focus:bg-primary-50/50 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 motion-reduce:transition-none dark:text-primary-500 dark:hover:bg-blue-950 dark:focus:bg-blue-950">{tag}</button>
        ))}
      </div>
    </div>
  )
}

export default Item;