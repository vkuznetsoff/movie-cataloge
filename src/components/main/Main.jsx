import Catalog from "./Catalog"

const Main = ({cards}) => {
  
    return (
        <div className="container content">
        <Catalog cards={cards} />
        </div>
    )
}

export  default Main