import Tips from "../../common/tips"
const M1 = () => {

    


    return (
        <>
            <h1 className="text-[28px] font-bold text-[#333333]">常见问题</h1>
            <div className="mt-[24px] px-[42px] pt-[42px] pb-[13px] bg-[#FFF] grid  grid-cols-3 ">
                <div className="flex items-center mb-[29px] hover:text-[#0056FF] hover:cursor-pointer">
                    <Tips></Tips>
                    <div className="">如何使用？</div>
                </div>
            </div>
        </>
    )
}


const M2 = () => {
    return (
        <>
            <h1>M2</h1>
        </>
    )
}

const Home = () => {
    return (
        <>
            <div className="w-[1200px] mx-[auto]">
                <M1></M1>
                <M2></M2>
            </div>

        </>
    )
}

export default Home;