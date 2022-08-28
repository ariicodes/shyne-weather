const TempInfo = () => {
    return (
        <div className="flex flex-col items-center gap-2">
            <p className="font-light italic">City, State, Country</p>
            <div className="flex flex-row w-full justify-around">
                <div className="flex flex-col items-start">
                    <p className="text-xs">low</p>
                    <p className="font-medium text-lg">00º</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="" alt="" />
                    <h1 className="text-5xl font-bold">00º</h1>
                </div>
                <div className="flex flex-col items-end">
                    <p className="text-xs">high</p>
                    <p className="font-medium text-lg">00º</p>
                </div>
            </div>
            <h2 className="text-base">weather conditions</h2>
            <p className="font-light text-sm">feels like: 00º</p>
            <div className="flex flex-row justify-between w-full px-2 text-xs">
                <div className="flex flex-col items-start">
                    <p>sunrise</p>
                    <p>00:00</p>
                </div>
                <div className="flex flex-col items-end">
                    <p>sunset</p>
                    <p>00:00</p>
                </div>
            </div>
        </div>
    )
}

export default TempInfo