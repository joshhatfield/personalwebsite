import PageCard from "../pagebody/PageCard.tsx";

const AccordionGrid = () => {
    return (
        <>
            <PageCard>
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">skills</h1>
                    <br/>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1"/>
                    <div className="collapse-title font-semibold">Skill1</div>
                    <div className="collapse-content text-sm">foo
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1"/>
                    <div className="collapse-title font-semibold">Skill2</div>
                    <div className="collapse-content text-sm">bar
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1"/>
                    <div className="collapse-title font-semibold">skill3</div>
                    <div className="collapse-content text-sm">ray
                    </div>
                </div>
                <br/>
                <div className="card bg-base-200 p-4 shadow">
                    <div className="text-left space-y-4">
                        <h1 className="text-2xl font-bold">Languages</h1>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <div className="badge badge-outline">Go</div>
                        <div className="badge badge-outline">Javascript</div>
                        <div className="badge badge-outline">TypeScript</div>
                        <div className="badge badge-outline">Python</div>
                        <div className="badge badge-outline">HCL</div>
                    </div>
                </div>
            </PageCard>


        </>
    );
};


export default AccordionGrid;
