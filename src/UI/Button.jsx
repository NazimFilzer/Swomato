const Button = ({ children, textOnly, cssName, ...props }) => {
    let cssClasses = textOnly ? "text-button" : "button";
    cssClasses += " " + cssName;
    return <button className={cssClasses} {...props}>
        {children}
    </button>;
}

export default Button;