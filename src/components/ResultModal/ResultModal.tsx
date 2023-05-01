import React from "react";

interface ResultModalProps {
    activeModalResult: boolean,
    isSecondsTimer: number,
    closeModal: () => void
}

const ResultModal: React.FC<ResultModalProps> = (props) => {

    const {
        activeModalResult,
        isSecondsTimer,
        closeModal
    } = props;

    return (
        <div className={activeModalResult ? "registration-modal active" : "registration-modal"}>
            <div className="registration-modal__content">
                <h4>Ваш результат {isSecondsTimer}</h4>
            <button onClick={closeModal} type="button">Закрыть</button>
        </div>
    </div>
    )
}
export default ResultModal;