import React, { useEffect, useState } from "react";
import "./categoryList.less";
import axios from "axios";
import CategoryCard from "../categoryCard/CategoryCard";
import { ICategoryCardProps } from "../categoryCard/CategoryCard";
import Loading from "../loading/Loading";

const CategoryList = () => {
    const [categoryList, setCategoryList] = useState<ICategoryCardProps[]>();

    useEffect(() => {
        getCategoryList();
    }, []);

    const getCategoryList = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/categories/");
            setCategoryList(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const displayCategoryList = () => {
        return categoryList?.map((category, index) => {
            return <CategoryCard key={index} title={category.title} image={category.image} circleColor={category.circleColor} />;
        });
    };

    return <div className="ar-category__list">{categoryList ? displayCategoryList() : <Loading />}</div>;
};

export default CategoryList;
