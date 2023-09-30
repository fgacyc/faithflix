import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/react";
import {BiSearch} from "react-icons/bi";
import {PiTestTubeFill} from "react-icons/pi";
import {GrCircleQuestion} from "react-icons/gr";
import {BsQuestionCircle} from "react-icons/bs";
import {useRouter} from "next/router";
import {useState} from "react";



export default  function AdvanceSearch({isOpen,onClose,onOpenChange}){
    const router = useRouter();
    const [searchText, setSearchText] = useState(null);

    function  goToSearch(){
        onClose();
        router.push(`/search?searchText=${searchText}`)
    }

    function  handleKeyDown(e){
        if (e.key === 'Enter') {
            goToSearch()
            onClose();
            //console.log("searchText",searchText)
        }
    }


    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} className={"dark text-white"}
               size="3xl" radius={"sm"} backdrop={"blur"}  >
            <ModalContent>
                {() => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            <div>
                                <span>Advanced AI Search </span>
                                {/*<PiTestTubeFill className={"inline-block text-[#fab005] cursor-pointer"} />*/}
                                <BsQuestionCircle className={"inline-block text-white cursor-pointer ml-2"} />
                            </div>
                        </ModalHeader>
                        <ModalBody>
                            <div className={"flex flex-row items-center w-full bg-white h-10 rounded"}>
                                <input type="text" style={{width:"calc(100% - 40px )"}}
                                       className={" text-black bg-transparent outline-none h-8 p-2"}
                                       onChange={(e)=>setSearchText(e.target.value)}
                                       onKeyDown={(e)=>handleKeyDown(e)}
                                />
                                <BiSearch className="text-black cursor-pointer w-[40px]" size={22}
                                            onClick={()=>goToSearch()}
                                />
                            </div>
                            <div className={"flex flex-row justify-around my-8"}>
                                <div className={"shadow-md w-2/5 bg-[rgba(0,0,0,.3)] rounded p-5 text-center"}>
                                    <div className={"mb-2"}>Describe your situation for advice</div>
                                    <div>“My best friend Anna and I had a fight and I don't know how to deal with it”</div>
                                </div>
                                <div className={"shadow-md  w-2/5 bg-[rgba(0,0,0,.3)] rounded p-5 text-center"}>
                                    <div className={"mb-2"}>Ask Bible AI any facts about the Bible</div>
                                    <div>“What is the book of Matthew?”</div>
                                    <div>“Where did Amos live?”</div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <div className={"text-sm text-gray-400"}>
                                Powered by AI Engine, made by FGACYC Tech Team
                            </div>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}
