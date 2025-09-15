import Nav from "./Nav";
import Slider from "./Slider";
import Grid from "./Grid";

function page() {
  return (
    <div className="max-w-7xl m-auto">
      <Nav />
      <Slider />
      <Grid />
    </div>
  );
}

export default page;
