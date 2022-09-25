import React, { useEffect, useState } from "react";
import "./categoryList.less";
import axios from "axios";
import CategoryCard from "../../library/categoryCard/CategoryCard";
import { ICategoryCardProps } from "../../library/categoryCard/CategoryCard";
import Loading from "../../library/loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../core/store/store";
import { getMainPageCategories } from "../../core/store/categorySlice";
import { Navigate, useNavigate } from "react-router-dom";
import { ARRoutes, itemsRoutes } from "../../core/config/routes.config";

const CategoryList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { mainPageCategoryList } = useSelector((state: RootState) => state.category);

    useEffect(() => {
        getCategoryList();
    }, []);

    const getCategoryList = async () => {
        dispatch(getMainPageCategories());
    };

    const displayCategoryList = () => {
        return mainPageCategoryList?.map((category, index) => {
            return (
                <CategoryCard
                    key={index}
                    title={category.title}
                    image={category.imageURL}
                    circleColor={category.mainColor}
                    onClick={() => navigate(itemsRoutes.getItemsByCategoryRoute(category.id))}
                />
            );
        });
    };

    return <div className="ar-category__list">{mainPageCategoryList ? displayCategoryList() : <Loading />}</div>;
};

export default CategoryList;
