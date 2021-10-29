const Checkbox = ({ id, title }) => {
    return (
        <label className="checkbox" for={id}>
            <input type="checkbox" id={id} />
            <div className="checkbox-state"></div>
            {title}
        </label>
    )
}

export default Checkbox