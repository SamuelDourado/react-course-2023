const Meal = (props) => {
    return <li className={props.className} key={props.key}>
        {props.children}
    </li>
};

export default Meal;