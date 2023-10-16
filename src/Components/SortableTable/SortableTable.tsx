import Table, { TTableProps} from "../Table/Table.tsx";
import {GoArrowDown,GoArrowUp} from "react-icons/go";
import {FC} from "react";
import useSort from "../../Hooks/useSort.tsx";

interface ISortableTableProps extends TTableProps {
    
}

const SortableTable:FC<ISortableTableProps> = (props) => {
    const {config,items} = props;
    const {sortOrder, sortKey, selectSort, updatedData} = useSort(config,items);


    const getIcons = (columnName:string,sortKey:string | null,sortOrder:'asc' | 'desc' | null)=>{
        let icons =  <span>
                    <GoArrowUp/>
                    <GoArrowDown/>
                </span>
        if (columnName !== sortKey){
            return (
                icons
            )
        }
        if (sortOrder === null){
            return icons
        }
        if (sortOrder === 'asc'){
            return <span><GoArrowUp/></span>
        }
        if (sortOrder === 'desc'){
            return <span>
                    <GoArrowDown/>
            </span>
        }
        return icons
    }

    const updateConfig = config.map(item=>{
        if(!item.sortValue){
            return item
        }
        return {
            ...item,
            header:()=>(<th className={'cursor-pointer hover:bg-gray-200'} onClick={()=>selectSort(item.label)} >
            <div className={'flex items-center gap-2 '}>

                {getIcons(item.label,sortKey,sortOrder)}{item.label}
            </div>
            </th>)
        }
    });




    return (<div>
        <Table {...props} config={updateConfig} items={updatedData} />
    </div>)
}

export default SortableTable