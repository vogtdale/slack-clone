import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  People,
} from "@material-ui/icons";
import React, { useState ,useEffect } from "react";
import "./SideBar.css";
import SidebarOption from "../../components/sidebarOptions/SidebarOption";
import db from "../../firebase";

const SideBar = () => {
  const [channels, setChannels] = useState([])

  useEffect(() => {
    db.collection("channels").onSnapshot(snapshot => {
      setChannels(snapshot.docs.map(doc => ({
        id: doc.id,
        channel: doc.data()
      })))
    })
  }, [])



  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-info">
          <h2>Slack-clone</h2>
          <h3>
            <FiberManualRecord />
            Dalo
          </h3>
        </div>

        <Create />
      </div>

      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Metions & reactions" />
      <SidebarOption Icon={Drafts} title="Saved items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOption Icon={FileCopy} title="File browser" />
      <SidebarOption Icon={People} title="People & user groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />

      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />

      <SidebarOption
        Icon={Add}
        title="Add channel"
        addChannelOption
      />
      <hr />

      {channels.map(({id, channel}) => (
        <SidebarOption key={id} id={id} title={channel.channelName} />
      ))}
      
    </div>
  );
};

export default SideBar;
