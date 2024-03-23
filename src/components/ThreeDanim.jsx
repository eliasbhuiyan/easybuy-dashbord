function Cube() {
  return (
    <div className="cube">
      <div style={{ "--x": -1, "--y": 0 }}>
        <span style={{ "--i": 3 }}></span>
        <span style={{ "--i": 2 }}></span>
        <span style={{ "--i": 1 }}></span>
      </div>
      <div style={{ "--x": 0, "--y": 0 }}>
        <span style={{ "--i": 3 }}></span>
        <span style={{ "--i": 2 }}></span>
        <span style={{ "--i": 1 }}></span>
      </div>
      <div style={{ "--x": 1, "--y": 0 }}>
        <span style={{ "--i": 3 }}></span>
        <span style={{ "--i": 2 }}></span>
        <span style={{ "--i": 1 }}></span>
      </div>
    </div>
  );
}

const ThreeDanim = () => {
  return (
    <div className="md:w-1/3 xl:w-1/2 hidden lg:block">
      <div className="threedbox">
        <Cube />
        <Cube />
        <Cube />
      </div>
    </div>
  );
};

export default ThreeDanim;
