const ObjectSelector = ({ onSelect }) => {
    return (
        <select
            onChange={(e) => {
                console.log("Selected:", e.target.value); // Log the selected value
                onSelect(e.target.value); // Pass the selected value to App.js
            }}
        >
            <option value="planet">Planets</option>
            <option value="star">Stars</option>
            <option value="galaxy">Galaxies</option>
        </select>
    );
};

export default ObjectSelector;

