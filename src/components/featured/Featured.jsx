import "./featured.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.unsplash.com/photo-1549918864-48ac978761a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVibGlufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        ></img>
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.unsplash.com/photo-1602797882193-51cb0e037534?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVibGlufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        ></img>
        <div className="featuredTitles">
          <h1>Genava</h1>
          <h2>564 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://plus.unsplash.com/premium_photo-1675511338985-a799dde1f780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGR1YmxpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        ></img>
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>1241 properties</h2>
        </div>
      </div>
    </div>
  );
};
export default Featured;
