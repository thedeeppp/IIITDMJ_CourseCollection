import ContentL2 from "./ContentL2"

const ContentL1 = ({ content , getDetails }) => {
    console.log(content.L2content)
    return (
        <div className='ContentL1 lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] h-[auto] max-h-[310px] overflow-auto flex-col bg-[#80a3a7bc] rounded-[3px] p-[10px] pt-0 mb-[20px]' style={
            {
                // background: "linear-gradient(to bottom, #7b9a9f, #7b9a9f50 ,#f2f2f25f ) ",
            }}
        >


            <div className='ContentL1Title flex items-center justify-left w-[100%] pl-[30%] lg:h-[40px] md:h-[40px] sm:h-[9vh]  lg:text-l sm:text-l text-white font-roboto font-medium m-auto'>
                <p>{content.title}</p>
            </div>

            <div className='ContentL1.5 flex w-[100%] h-[260px] overflow-auto lg:pb-3 md:pb-3'>
                {content.L2content.map((content) => {
                    console.log(content);
                    // <ContentL2 key={content.CourseTitle} content={content}/>
                    return (<ContentL2 key={content.CourseTitle} content={content} getDetails={getDetails} />)
                })}
                {/* {content.L2Content.map((content2) => { console.log(content2); })} */}
            </div>

        </div>
    )
}

export default ContentL1