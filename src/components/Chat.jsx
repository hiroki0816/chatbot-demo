import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import UserProfile from '../assets/img/user.png';
import BotProfile from '../assets/img/chatbot.png';


const Chat = (props) => {
    // props.typeが'question'であればtrueを返す
    const isQuestion = (props.type === 'question');
    // isQuestionがtrueの場合は左を返す falseの場合は右を返す
    const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse'

    return(
        <ListItem className={classes}>
            <ListItemAvatar>
                {isQuestion ? (
                    <Avatar alt="icon" src={BotProfile} />
                ) : (
                    <Avatar alt="icon" src={UserProfile} />
                )}
            </ListItemAvatar>
            <div className='p-chat__bubble'>
                {props.text}
            </div>
        </ListItem>
    )
}

export default Chat