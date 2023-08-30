function Logo() {
  return (
    <div className=" flex flex-row justify-between items-center ">
      <div className="flex flex-col justify-center items-center">
        <div
          className={`flex flex-row justify-center items-center text-4xl font-bold`}
        >
          <p className=" text-mYellow ">M</p>
          <p className=" text-white ">ovies</p>
        </div>
        <p className={`text-white text-sm  font-semibold`}>
          Movie Magic Made Easy!
        </p>
      </div>
    </div>
  );
}

export default Logo;
