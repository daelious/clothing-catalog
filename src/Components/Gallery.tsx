import Item from "./Item";
import { ItemProps } from "./Item"; 

function Gallery({ items }: { items: ItemProps[] }) {
  return (
    <div className="gallery">
      {items.map((item) => (
        <Item
          id={item.id}
          title={item.title}
          photo={item.photo}
          tags={item.tags}
        />
      ))}
    </div>
  );
}

export default Gallery;