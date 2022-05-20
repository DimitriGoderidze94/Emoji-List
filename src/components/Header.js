import "./Header.css"

const Header = (props) => {

    return (
        <header>
            <h1>Find you Emoji</h1>
            <div id="search">
                <button id="category">{props.category}</button>
                <div id="dropDown"
                >
                    {props.categoryList.map((category) => (
                        <button className="dropdownButton"
                            onClick={(e) => {
                                props.setCategory(e.target.value);
                            }}
                            value={category} key={category}>{category}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;