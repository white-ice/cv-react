import React from 'react'
import ModalContext from '../../context/modal.context'

const Modal = ({ children }) => {
	return (
		<ModalContext.Consumer>
			{({ visible, setVisible }) => (
				<div
					className={visible ? 'modal open' : 'modal'}
					onClick={() => setVisible(false)}
				>
					<div className="modal__container" onClick={(e) => e.stopPropagation()}>
						{children}
					</div>
				</div>
			)}
		</ModalContext.Consumer>
	)

}

export default Modal