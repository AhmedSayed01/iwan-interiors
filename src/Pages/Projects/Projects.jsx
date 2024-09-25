import ProjectCarousel from '../../Components/ProjectCarousel/ProjectCarousel';
import { useEffect, useState } from 'react';
import projectsData from '../../projects.json';

const Projects = () => {
    const [items, setItems] = useState([]);
    const [hash, setHash] = useState(window.location.hash);  // State to track current hash

    useEffect(() => {
        setItems(projectsData);

        // Listen for hash changes
        const handleHashChange = () => {
            setHash(window.location.hash);  // Update the hash state on hash change
        };

        window.addEventListener('hashchange', handleHashChange);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <div>
            <div className='flex flex-wrap justify-evenly bg-main gap-x-10 gap-y-5 px-10 my-10 mt-20 py-10 text-white font-bold text-lg'>
                <button onClick={() => setHash("#adminis")}>Administrative Offices</button>
                <button onClick={() => setHash("#hosp")}>Hospitality Venues</button>
                <button onClick={() => setHash("#rest")}>Restaurants & Cafés</button>
                <button onClick={() => setHash("#exhib")}>Exhibitions & Trade Shows</button>
                <button onClick={() => setHash("#auto")}>Automotive Spaces</button>
            </div>

            <div className='mx-10'>
                {/* Check the current hash in state */}
                {hash === "#adminis" || hash === "" ? (
                    projectsData
                        .filter(element => element.hashed === "#adminis")
                        .map((element, index) => (
                            <ProjectCarousel
                                key={index}
                                title={element.title}
                                subtitle={element.subtitle}
                                list={element.list}
                                hashed={element.hashed}
                                image1={element.image1}
                                image2={element.image2}
                            />
                        ))
                ) : hash === "#hosp" ? (
                    projectsData
                        .filter(element => element.hashed === "#hosp")
                        .map((element, index) => (
                            <ProjectCarousel
                                key={index}
                                title={element.title}
                                subtitle={element.subtitle}
                                list={element.list}
                                hashed={element.hashed}
                                image1={element.image1}
                                image2={element.image2}
                            />
                        ))
                ) : hash === "#rest" ? (
                    projectsData
                        .filter(element => element.hashed === "#rest")
                        .map((element, index) => (
                            <ProjectCarousel
                                key={index}
                                title={element.title}
                                subtitle={element.subtitle}
                                list={element.list}
                                hashed={element.hashed}
                                image1={element.image1}
                                image2={element.image2}
                            />
                        ))
                ) : hash === "#exhib" ? (
                    projectsData
                        .filter(element => element.hashed === "#exhib")
                        .map((element, index) => (
                            <ProjectCarousel
                                key={index}
                                title={element.title}
                                subtitle={element.subtitle}
                                list={element.list}
                                hashed={element.hashed}
                                image1={element.image1}
                                image2={element.image2}
                            />
                        ))
                ) : hash === "#auto" ? (
                    projectsData
                        .filter(element => element.hashed === "#auto")
                        .map((element, index) => (
                            <ProjectCarousel
                                key={index}
                                title={element.title}
                                subtitle={element.subtitle}
                                list={element.list}
                                hashed={element.hashed}
                                image1={element.image1}
                                image2={element.image2}
                            />
                        ))
                ) : null}
            </div>
        </div>
    );
};

export default Projects;
