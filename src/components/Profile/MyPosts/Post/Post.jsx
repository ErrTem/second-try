import React from 'react'
import c from './Post.module.css'

const Post = (props) => {
    return (
        <div className={c.item}>
            <img src='https://sun9-78.userapi.com/impg/bi_i-2IIqsi7ItSXLx-TopvtDORlpWmMHye-Mg/kuhgYwIgqjI.jpg?size=1200x1072&quality=96&sign=1096e57100e07c1889cff3a40b676603&c_uniq_tag=TOAfHi_CECTIBbsrBOP7_F00KKUfHcMt4RaS103jkYE&type=album' />
            {props.message}
            <div>
                <span>likes</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post