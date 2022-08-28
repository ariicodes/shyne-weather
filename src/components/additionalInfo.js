const AdditionalInfo = () => {
    return (
        <div className="flex flex-row gap-2 justify-around rounded-xl bg-[rgba(255,255,255,0.03)] shadow-md py-6 mt-6 text-xs">
            <div className="flex flex-col items-start gap-3">
                <div>
                    <p className="font-medium">wind speed</p>
                    <p className="font-light">0 mph</p>
                </div>
                <div>
                    <p className="font-medium">wind direction</p>
                    <p className="font-light">north</p>
                </div>
                <div>
                    <p className="font-medium">dew point</p>
                    <p className="font-light">0</p>
                </div>
            </div>
            <div className="flex flex-col items-end text-right gap-3">
                <div>
                    <p className="font-medium">humidity</p>
                    <p className="font-light">0%</p>
                </div>
                <div>
                    <p className="font-medium">cloud coverage</p>
                    <p className="font-light">0%</p>
                </div>
                <div>
                    <p className="font-medium">visibility</p>
                    <p className="font-light">0%</p>
                </div>
            </div>
        </div>
    )
}

export default AdditionalInfo