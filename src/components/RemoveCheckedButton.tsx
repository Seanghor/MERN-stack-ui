import { useState } from "react";

interface RemoveCheckedButtonProps {
    onRemoveChecked: () => Promise<void>;
}

const RemoveCheckedButton: React.FC<RemoveCheckedButtonProps> = ({ onRemoveChecked }) => {
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleRemoveChecked =  () => {
        try {
            onRemoveChecked();
        } catch (error) {
            setErrorMessage('Error failed to remove checked');
            setTimeout(() => {
                setErrorMessage('');
            }, 1000);
        }
    };

    return (
        <>
            <p className={`text-red-600 text-center mt-2 font-poppins h-10`}>{errorMessage}</p>
            <div className="p-px fixed bottom-[80px] md:buttom-[90px] lg:bottom-[90px] hover:bg-red-normal hover:scale-105 right-4 md:right-8 lg:right-10 bg-red-normal text-white-normal rounded-full shadow-xl text-xs md:text-base lg:text-xl">
                <button
                    onClick={handleRemoveChecked}
                    className="border-2 rounded-full px-4 py-2  hover:text-white-normal transform transition-all duration-300 "
                >
                    Remove Checked
                </button>
            </div>
        </>
    );
};

export default RemoveCheckedButton;
