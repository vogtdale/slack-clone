import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import db from '../../firebase'
import './SidebarOption.css'
import {setChannelInfo} from '../../features/chatSlice'
import { useHistory } from "react-router-dom"


const SidebarOption = ({Icon, title, addChannelOption, id}) => {
	const dispatch = useDispatch()
	const history = useHistory()


	const selectChannel = () => {
		dispatch(setChannelInfo({
			channelName: title,
			channelId: id
		}))
		if (id) {
			history.push(`/room/${id}`)
		} else {
			history.push("/title/")
		}
	}

	const addChannel = () => {
		const channelName = prompt("Enter the channel name")

		if (channelName) {
			db.collection("channels").add({
				channelName: channelName,
			})
		}
	}

    return (
        <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon ? (
				<h3>
					<Icon className="sidebarOption-icon" /> {title}
				</h3>
			) : (
				<h3 className="sidebarOption-channel">
					<span className="sidebarOption-hash">#</span> {title}
				</h3>
			)}
        </div>
    )
}

export default SidebarOption
