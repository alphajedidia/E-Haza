import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

type AvatarProps = {
    url: string | null,
    style?: string
    size: number
};
export default function Avatar (props: AvatarProps) {
    const { url,style, size} = props;
    const hasAvatar = url !== null && url !== undefined;
    return (
        <React.Fragment>
            {
                hasAvatar ?
                    <span className={`rounded-full ${style}`}>
                        <img src={url} alt="user avatar" className={`rounded-full bg-cover  border-2 border-white`} width={size*(5.5/6)} />
                    </span>
                :
                <span className={`rounded-full ${style}`}>
                    <AccountCircleIcon style={{height:"100%", fontSize:size, color:"gray"}}/>
                </span>

            }
        </React.Fragment>
    );
}