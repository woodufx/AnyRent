import React, { useEffect, useState } from "react";
import { IEquipmentCardProps } from "../equipmentCard/EquipmentCard";
import Loading from "../loading/Loading";
import axios from "axios";
import EquipmentCard from "../equipmentCard/EquipmentCard";
import "./equipmentList.less";
const EquipmentList = () => {
    const [equipmentList, setEquipmentList] = useState<IEquipmentCardProps[]>();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    useEffect(() => {
        getEquipmentList();
    }, []);

    const getEquipmentList = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/items/");
            setEquipmentList(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const displayEquipmentList = () => {
        return equipmentList?.map((item, index) => {
            return <EquipmentCard type="primary" key={index} id={item.id} title={item.title} description={item.description} address={item.address} rating={item.rating} price={item.price} cover={item.cover} />;
        });
    };

    return (
        <div>
            <div className="ar-item__list">{equipmentList ? displayEquipmentList() : <Loading />}</div>
        </div>
    );
};

export default EquipmentList;
