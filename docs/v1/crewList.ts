import crewList from "./crewList.json";

const avatart = crewList.map(
    (imageName) => (
        {
            [imageName]: () => import(`../src/img/avatar/${imageName}`),
        }
    )
);

export default avatart;
