import React, {useState} from "react";
import { IconButton } from '../button/icon_button';
import { Edit } from "@mui/icons-material";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";


type DynamicInputProps = {
    label: string[],
    content?: string,
    style: string,
};


export const DynamicRadio = (props: DynamicInputProps) => {
    const {label, style, content} = props;
    const [value, setValue] = useState<string>(content || "")
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
                            className="flex grow flex-col gap-2 px-4"
                            >
                                 <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue={content!}
                                    name="radio-buttons-group"
                                    value={value}
                                    onChange={handleChange}
                                >
                                    {
                                        label.map((l, i) =>(

                                            <FormControlLabel value={l} control={<Radio />} label={l} key={i} />
                                        ))
                                    }
                                </RadioGroup>
                                <div className="flex flex-row-reverse">

                                    <button
                                        onClick={handleSubmit}
                                        className="flex justify-center items-center gap-2 sfocus:outline-none text-white bg-colorScheme-light-orange hover:bg-colorScheme-light-orange focus:ring-4 focus:ring-amber-200 font-medium rounded-lg text-sm px-5 py-2.5 ">
                                        Edit
                                        {/* {
                                            isLoading &&   <Loader />
                                        } */}


                                    </button>
                                    <button
                                        onClick={()=> setIsOpen(false)}
                                        className="flex justify-center items-center gap-2 sfocus:outline-none text-colorScheme-light-charcoal focus:ring-4 focus:ring-amber-200 font-medium rounded-lg text-sm text-opacity-80 px-5 py-2.5 ">
                                        Cancel
                                        {/* {
                                            isLoading &&   <Loader />
                                        } */}


                                    </button>
                                </div>
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