import type { ReactNode } from "react";

type PageCardProps = {
    children: ReactNode;
    className?: string;
};

const PageCard = ({ children, className = "" }: PageCardProps) => {

    return (
        <main className={`min-h-auto bg-base-100 text-base-content flex items-center justify-center p-4 md:p-8 ${className}`}>
            <div className="max-w-3xl w-full card bg-base-200 shadow-xl p-6 md:p-8 rounded-box
                        transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                {children}
            </div>
        </main>
    );
}

export default PageCard;