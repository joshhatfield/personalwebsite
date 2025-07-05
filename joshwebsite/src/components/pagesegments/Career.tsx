import PageCard from "../pagebody/PageCard.tsx";

const Career = () => {

    return (
        <PageCard>
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold">Career</h1>
                <br/>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1"/>
                <div className="collapse-title font-semibold">job1</div>
                <div className="collapse-content text-sm">foo
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1"/>
                <div className="collapse-title font-semibold">job2</div>
                <div className="collapse-content text-sm">bar
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-1"/>
                <div className="collapse-title font-semibold">job3</div>
                <div className="collapse-content text-sm">ray
                </div>
            </div>
        </PageCard>
    )

}

export default Career;