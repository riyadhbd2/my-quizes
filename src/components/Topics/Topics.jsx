

const Topics = ({topic}) => {
    const {id,name, logo, total} = topic;
    return (
        <div className="border m-20 p-7 w-60">
            <img className="w-52" src={logo} alt="" />
            <div className="flex justify-evenly mt-2">
                <h1>{name}</h1>
                <button className="bg-orange-300 p-1 rounded-lg text-white">Quiz </button>
            </div>
            
        </div>
    );
};

export default Topics;