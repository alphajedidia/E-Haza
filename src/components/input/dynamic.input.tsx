import React, {useState} from "react";
import { IconButton } from '../button/icon_button';
import { Edit } from "@mui/icons-material";


type DynamicInputProps = {
   content?: string,
    label: string,
    style: string,
    type: string,
};


export const DynamicInput = (props: DynamicInputProps) => {
    const {content, label, style, type} = props;
    const [value, setValue] = useState<string>(content || '')
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
    }
    return (
        <div className="flex grow">
            {
                isOpen ?
                    (
                        <div className="flex grow justify-center items-center gap-2">
                            <form
                                className="flex grow justify-center items-center gap-2"
                            >
                                <input
                                    type={type}
                                    name={label}
                                    className="input grow focus:ring-0 focus:border-0 "
                                    defaultValue={content}
                                    value={value}
                                    autoFocus
                                    onBlur={()=>setIsOpen(false)}
                                    onChange={handleChange}
                                />
                                <button
                                    onClick={handleSubmit}
                                    className="flex justify-center items-center gap-2 sfocus:outline-none text-white bg-colorScheme-light-orange hover:bg-colorScheme-light-orange focus:ring-4 focus:ring-amber-200 font-medium rounded-lg text-sm px-5 py-2.5 ">
                                    Edit
                                    {/* {
                                        isLoading &&   <Loader />
                                    } */}


                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className="flex justify-center items-center gap-3">
                            <p className={`px-4 py-2 ${style}`}>{content}</p>
                            <span>
                                <IconButton onClicked={()=> setIsOpen(true)} icon={<Edit />} label='' type="button" variant="secondary" style="border-none" labeled={false}/>
                            </span>
                        </div>
                    )
            }


        </div>
    );
};