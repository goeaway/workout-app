import * as React from "react";

export interface ListItemProps {
    title: string;
    titleAlt?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    clickable?: boolean;
    contentRender: Function;
}

const ListItem : React.FC<ListItemProps> = ({ title, titleAlt, contentRender, onClick, clickable }) => {
    return (
        <div 
            className={`p-5 mt-6 mb-6 cursor-pointer bg-white rounded-lg shadow-xl ${clickable && "hover:bg-gray-100"}`} 
            onClick={onClick}
        >
            <div className="flex justify-between">
                <span className="font-bold text-lg">{title}</span>
                {titleAlt && <span className="text-gray-500">{titleAlt}</span>}
            </div>
            <div>
                {contentRender()}
            </div>
        </div>
    );
}

export default ListItem;