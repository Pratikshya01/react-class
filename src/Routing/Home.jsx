import "../home.css";

const Home = () => {
  function handleButtonClick() {
    const para = document.getElementById("paragraph");
    para.style.color = "green";
  }
  return (
    <>
      <h1>Home Page</h1>
      <p className="para" id="paragraph">
        This is the default page
      </p>
      <button onClick={handleButtonClick}>change color</button>
    </>
  );
};

export default Home;
