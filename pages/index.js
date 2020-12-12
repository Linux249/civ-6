import Nav from '../components/nav';

export const TILE = {
  TYPE: {
    WATER: 0,
    FIELD: 1,
    MUD: 2,
    WOOD: 3,
    SAND: 4,
    MOUNTAIN: 5,
  },
};

export const MAP_TILES = [
  TILE.TYPE.WATER,
  TILE.TYPE.WATER,
  TILE.TYPE.SAND,
  TILE.TYPE.FIELD,
  TILE.TYPE.WATER,
  TILE.TYPE.WATER,
  TILE.TYPE.WOOD,
  TILE.TYPE.MOUNTAIN,
  TILE.TYPE.WATER,
  TILE.TYPE.SAND,
  TILE.TYPE.FIELD,
  TILE.TYPE.MUD,
  TILE.TYPE.WATER,
  TILE.TYPE.WOOD,
  TILE.TYPE.WATER,
  TILE.TYPE.WATER,
  TILE.TYPE.SAND,
  TILE.TYPE.FIELD,
  TILE.TYPE.WATER,
  TILE.TYPE.MOUNTAIN,
  TILE.TYPE.WOOD,
  TILE.TYPE.MUD,
  TILE.TYPE.WATER,
  TILE.TYPE.SAND,
  TILE.TYPE.FIELD,
  TILE.TYPE.SAND,
  TILE.TYPE.WATER,
  TILE.TYPE.WOOD,
  TILE.TYPE.WATER,
  TILE.TYPE.SAND,
  TILE.TYPE.FIELD,
  TILE.TYPE.MUD,
  TILE.TYPE.WATER,
  TILE.TYPE.WOOD,
  TILE.TYPE.MOUNTAIN,
  TILE.TYPE.WATER,
  TILE.TYPE.SAND,
  TILE.TYPE.FIELD,
  TILE.TYPE.WATER,
  TILE.TYPE.MOUNTAIN,
  TILE.TYPE.WOOD,
  TILE.TYPE.MUD,
  TILE.TYPE.SAND,
  TILE.TYPE.SAND,
  TILE.TYPE.FIELD,
  TILE.TYPE.WOOD,
  TILE.TYPE.WOOD,
  TILE.TYPE.MOUNTAIN,
];

const TYPE_CLASS = {
  [TILE.TYPE.WATER]: 'hexagon color-tile-water',
  [TILE.TYPE.FIELD]: 'hexagon color-tile-filed',
  [TILE.TYPE.MUD]: 'hexagon color-tile-mud',
  [TILE.TYPE.WOOD]: 'hexagon color-tile-wood',
  [TILE.TYPE.SAND]: 'hexagon color-tile-sand',
  [TILE.TYPE.MOUNTAIN]: 'hexagon color-tile-mountain',
};
const TYPE_ICONS = {
  [TILE.TYPE.WATER]: '🌊',
  [TILE.TYPE.FIELD]: '🌾',
  [TILE.TYPE.MUD]: '🍂',
  [TILE.TYPE.WOOD]: '🌲',
  [TILE.TYPE.SAND]: '🌵',
  [TILE.TYPE.MOUNTAIN]: '🗻',
};

export function Tile({ clickHandler, type }) {
  return (
    <div onClick={clickHandler} className={TYPE_CLASS[type]}>
      {TYPE_ICONS[type]}
    </div>
  );
}

export default function IndexPage() {
  function handleClickTile(e) {
    /**
     * relying on dom node is a special way, less know but very save
     */
    console.log('click: handleClickTile', { target: e.target });
  }

  return (
    <div>
      <Nav />
      <div className="pb-5">
        <h1 className="text-4xl text-center text-gray-700 dark:text-gray-100">
          Civ 6 example
        </h1>
      </div>

      <div className="flex">
        <div className="container__map">
          <main className="hexagon-container">
            {MAP_TILES.map((type) => (
              <Tile type={type} clickHandler={handleClickTile} />
            ))}
          </main>
        </div>

        <div className="container__activeFocusCard">no active</div>
      </div>
      <div className="container__focusCards">
        <div className="box__focusCard">
          <h4 className="label">Title: Since</h4>
          <h4 className="label">Level: 1</h4>
          <h5 className="label">Level: 1</h5>
        </div>
        <div className="box__focusCard">
          <h4 className="label">Title: Defense</h4>
          <h4 className="label">Level: 1</h4>
          <h5 className="label">Level: 1</h5>
        </div>
      </div>
    </div>
  );
}
