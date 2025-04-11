import React from "react";

interface CrewCardProps {
    avatar?: string;
    nickname?: string;
    comment?: string;
}

const CrewCard: React.FC<CrewCardProps> = ({ avatar, nickname, comment }) => {
    const cardStyle: React.CSSProperties = {
        fontSize: "16px",
        padding: "10px",
        borderRadius: "10px",
        border: "2px solid #ccccccaa",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        margin: "10px",
        flexDirection: "row",
    };
    const avatarStyle: React.CSSProperties = {
        width: "auto",
        height: "50px",
        borderRadius: "50%",
        marginRight: "10px",
    };
    const nicknameStyle: React.CSSProperties = {
        fontSize: "18px",
        margin: "0",
        paddingLeft: "10px",
        paddingRight: "10px",
        borderRadius: "16px",
        color: nickname?.endsWith("(开发者)") ? "#ffffff" : "#7C58B5",
        backgroundColor: nickname?.endsWith("(开发者)") ? "#7C58B5cf" : "#ffffff",
        border: nickname?.endsWith("(开发者)") ? "2px solid #ffffff" : "2px solid #7C58B5",
        display: "inline-block",
    };
    const commentStyle: React.CSSProperties = {
        fontSize: "16px",
        margin: "0",
    };
    return (
        <div style={cardStyle}>
            <img src={avatar} alt="avatar" style={avatarStyle} />
            <div>
                <div style={nicknameStyle}>{nickname?.endsWith("(开发者)")?nickname.slice(0,nickname.indexOf("(开发者)")):nickname}</div>
                <div style={commentStyle}>{comment}</div>
            </div>
        </div>
    );
};

export default CrewCard;
