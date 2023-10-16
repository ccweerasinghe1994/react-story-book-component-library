import {useState} from "react";
import {TData, TTableConfig} from "../Components/Table/Table.tsx";

type TSort = {
    sortOrder: 'asc' | 'desc' | null,
    sortKey: string | null,
    selectSort: (tableHeaderName:string)=>void,
    updatedData:TData[]
}

const useSort = (config:TTableConfig[],items:TData[]):TSort=>{
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
    const [sortKey, setSortKey] = useState<string | null>(null);

    const selectSort = (tableHeaderName:string)=>{
        if (sortKey!==tableHeaderName){
            setSortOrder('asc')
            setSortKey(tableHeaderName)
            return
        }

        if (sortOrder === null){
            setSortOrder('asc')
            setSortKey(tableHeaderName)
        }else if (sortOrder === 'asc'){
            setSortOrder('desc')
            setSortKey(tableHeaderName)
        }else if (sortOrder === 'desc'){
            setSortOrder(null)
            setSortKey(null)
        }
    }

    let updatedData = items;

    if (sortOrder && sortKey){
        const {sortValue} = config.find(item=>item.label === sortKey)!;
        if(sortValue === undefined){
            throw new Error('sortValue is undefined')
        }
        updatedData = [...items];
        updatedData.sort((a,b)=>{
            const sortOrderParam = sortOrder === 'asc' ? 1 : -1;
            const aValue = sortValue(a);
            const bValue = sortValue(b);

            if(typeof aValue === "string" && typeof bValue === "string"){
                return sortOrderParam * aValue.localeCompare(bValue)
            }
            if (typeof aValue === "number" && typeof bValue === "number"){
                return sortOrderParam * (aValue - bValue)
            }
            return 0

        })
    }

    return {
        sortOrder,
        sortKey,
        selectSort,
        updatedData
    }
}

export default useSort