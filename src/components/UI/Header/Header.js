import React from "react";
import classes from "./Header.module.css";
const header = ({ h, children, className }) => {
	const headerClasses = [ classes.Header, className ];
	let header = null;
	switch (h) {
		case 1:
			header = <h1 className={headerClasses.join(" ")}>{children}</h1>;
			break;
		case 2:
			header = <h2 className={headerClasses.join(" ")}>{children}</h2>;
			break;
		case 3:
			header = <h3 className={headerClasses.join(" ")}>{children}</h3>;
			break;
		case 4:
			header = <h4 className={headerClasses.join(" ")}>{children}</h4>;
			break;
		case 5:
			header = <h5 className={headerClasses.join(" ")}>{children}</h5>;
			break;
		default:
			header = <h6 className={headerClasses.join(" ")}>{children}</h6>;
	}

	return <React.Fragment>{header}</React.Fragment>;
};

export default header;
