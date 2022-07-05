import { createContext } from "react";

const ModalContext = createContext({
	visible: false,
	setVisible: () => { }
})

export default ModalContext