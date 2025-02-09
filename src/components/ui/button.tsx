interface ButtonProps {
    variant?: 'outline' | 'solid';
    children: React.ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export default function Button({ children, onClick }: ButtonProps) {
    return (
        <button
            className="flex justify-center items-center bg-gray-800 hover:bg-gray-700 text-white cursor-pointer font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline  "
            onClick={onClick}>
            {children}
        </button>
    );
}