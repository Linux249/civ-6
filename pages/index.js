import Nav from '../components/nav';


export default function IndexPage() {
  return (
    <div>
      <Nav/>
      <div className="pb-5">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          Civ 6 example
        </h1>
      </div>

      <div className="container__map">
        <div className="row__map">
          <div className="box__map_tile title_0">
            0, 0
          </div>
          <div className="box__map_tile title_0">
            1, 0
          </div>
          <div className="box__map_tile title_1">
            2, 0
          </div>
          <div className="box__map_tile title_2">
            3, 0
          </div>
        </div>
        <div className="row__map">
          <div className="box__map_tile title_0">
            0, 0
          </div>
          <div className="box__map_tile title_3">
            1, 0
          </div>
          <div className="box__map_tile title_4">
            2, 0
          </div>
          <div className="box__map_tile title_5">
            3, 0
          </div>
        </div>
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

      <main className="hexagon-container">
        <div className="hexagon color-sass">

        </div>
        <div className="hexagon color-angular">

        </div>
        <div className="hexagon color-gulp">

        </div>
        <div className="hexagon color-html">

        </div>

        <div className="hexagon color-git">

        </div>
        <div className="hexagon color-javascript">

        </div>
        <div className="hexagon color-vuejs">

        </div>
        <div className="hexagon color-rails">

        </div>

        <div className="hexagon color-circleci">

        </div>
        <div className="hexagon color-webpack">

        </div>
        <div className="hexagon color-bootstrap">

        </div>
        <div className="hexagon color-python">

        </div>

        <div className="hexagon color-haskell">

        </div>
        <div className="hexagon color-meteor">

        </div>
        <div className="hexagon color-tile-water">

        </div>
        <div className="hexagon color-atom">

        </div>
      </main>


    </div>
  );
}
