const Move = () => {
  const moveHandler = () => {
    alert("Mouse move event fired");
    console.log("Mouse move event");
  };
  return (
    <section>
      <p onMouseMove={moveHandler}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolores quod magni et distinctio sint similique perferendis velit aspernatur ducimus!</p>
    </section>
  );
};

export default Move;
