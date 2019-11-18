import * as React from "react";

export interface ListItemProps {
    title: string;
    titleAlt?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    contentRender: Function;
}

const ListItem : React.FC<ListItemProps> = ({ title, titleAlt, contentRender, onClick }) => {
    return (
        <div 
            className="p-5 m-6 cursor-pointer bg-white rounded-lg shadow-xl hover:bg-gray-100" 
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