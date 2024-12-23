import Masonry from "react-responsive-masonry"
import ColorSelector from "../color/colorSelector"

const Notes = () => {
  return (
    <Masonry columnsCount={3} gutter="10px">
      <ColorSelector />
    </Masonry>
  )
}

export default Notes