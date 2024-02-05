import { useLoaderData } from "react-router-dom";
import Topics from "../Topics/Topics";


const Home = () => {
    const topics = useLoaderData();
    return (
        <div className="grid grid-cols-4 gap-5">
            {
                topics.map(topic => <Topics key={topic.id} topic={topic}></Topics>)
            }
        </div>
    );
};

export default Home;