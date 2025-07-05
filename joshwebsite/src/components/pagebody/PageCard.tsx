


const PageCard = ({children}) => {

    return (
        <main className="min-h-auto bg-base-100 text-base-content flex items-center justify-center p-8">
            <div className="max-w-3xl w-full card bg-base-200 shadow-xl p-8 rounded-box">
                {children}
            </div>
        </main>
                )

                }
                export default PageCard;