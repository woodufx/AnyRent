import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addIcon from "../../assets/styles/svg/icons/addIcon.svg";
import { ICategory } from "../../core/models/category.model";
import { IItem } from "../../core/models/item.model";
import DataService from "../../core/services/data.service";
import { ARRoutes } from "../../core/config/routes.config";
import { RootState } from "../../core/store/store";
import { ARButton, ARDropdown, ARInput } from "../../library";
import { createItem } from "../../core/store/itemsSlice";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { userRoutes } from "../../core/config/routes.config";
import "./createForm.less";

interface IItemCategory {
    id: string;
    name: string;
}

const ARCreateForm = () => {
    const [mainCategories, setMainCategories] = useState<string[]>();
    const [subCategories, setSubCategories] = useState<string[]>();
    const [images, setImages] = useState<any[]>([]);
    const [imageURLs, setImageURLs] = useState<any[]>([]);
    const { user } = useSelector((state: RootState) => state.user);
    const [mainCategoryId, setMainCategoryId] = useState<string>("");
    const imageInputRef = useRef<HTMLInputElement>(null);

    const [item, setItem] = useState({
        title: "",
        description: "",
        brand: "",
        address: "",
        price: -1,
        owner: { id: user.id, name: user.name, surname: user.surname, rating: 0, avatar: "" },
        category: [] as IItemCategory[],
        cover: [],
    });

    const [validation, setValidation] = useState({
        priceValid: false,
    });

    const dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        getMainCategories();
    }, []);

    const notifyError = () => {
        toast.error("Заполните все поля!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const notifySuccess = () => {
        toast.success("Товар успешно добавлен!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const getMainCategories = async () => {
        try {
            const categoryArr: string[] = [];
            const response = await DataService.getMainCategoriesList();
            response.map((category: any) => {
                categoryArr.push(category.name);
            });
            setMainCategories(categoryArr);
        } catch (e) {
            console.log((e as Error).message);
        }
    };

    const subCategoryHandler = async (value: string) => {
        try {
            const response: ICategory = await DataService.getCurrentCategoryByName(value);
            item.category.some((category) => category.id === response.id)
                ? setItem({ ...item, category: item.category })
                : setItem({ ...item, category: [item.category[0], { id: response.id, name: response.name }] });
        } catch (e) {
            console.log((e as Error).message);
        }
    };

    const mainCategoryHandler = async (value: string) => {
        try {
            const response: ICategory = await DataService.getCurrentCategoryByName(value);
            setItem({ ...item, category: [{ id: response.id, name: response.name }] });
            setMainCategoryId(response.id);
        } catch (e) {
            console.log((e as Error).message);
        }
    };

    useEffect(() => {
        mainCategoryId !== "" && getSubCategories();
    }, [mainCategoryId]);

    const getSubCategories = async () => {
        try {
            setSubCategories([]);
            const categoryArr: string[] = [];
            const response = await DataService.getSubCategoriesList(mainCategoryId);
            response.map((category: any) => {
                categoryArr.push(category.name);
            });
            setSubCategories(categoryArr);
        } catch (e) {
            console.log((e as Error).message);
        }
    };

    const sendValidDate = async () => {
        dispatch(createItem(user.id, item));
        notifySuccess();
        navigate(userRoutes.getUserItemsRoute());
    };

    const formValid = (): boolean => {
        return item.title && item.address && item.price && validation.priceValid && item.category && item.cover.length >= 1 ? true : false;
    };

    const submit = async (e: any) => {
        e.preventDefault();
        formValid() ? sendValidDate() : notifyError();
    };

    const openImageInput = (e: any) => {
        e.preventDefault();
        imageInputRef.current!.click();
    };

    const onImageChange = async (e: any) => {
        const files = Array.from(e.target.files as ArrayLike<File>);
        setImages([...images, ...files]);
    };

    useEffect(() => {
        imageHandler();
    }, [images]);

    const imageHandler = async () => {
        if (images!.length < 1) return;
        const newImagesUrls: any[] = [];
        images!.forEach((image) => newImagesUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImagesUrls);
        const urls: any = [];
        for (const image of images) {
            const response = await DataService.sendImage(image);
            urls.push(response);
        }
        return setItem({ ...item, cover: urls });
    };

    useEffect(() => {
        console.log(item);
    }, [item]);

    return (
        <div className="ar-create-form">
            <div className="ar-create-form__title">
                <img src={addIcon} alt="add" />
                <span>Создание нового товара для аренды</span>
            </div>
            <form onSubmit={submit} className="ar-create-form__inner">
                <div className="create-form__wrapper">
                    <div className="create-form__main-info-wrapper">
                        <ARInput
                            variant="standard"
                            size="large"
                            label="Название товара:"
                            required={true}
                            onChange={(e) => setItem({ ...item, title: e.target.value })}
                        />
                        <ARInput
                            variant="outlined"
                            size="large"
                            label="Описание: "
                            onChange={(e) => setItem({ ...item, description: e.target.value })}
                        />
                        <ARInput
                            variant="standard"
                            size="large"
                            label="Цена:"
                            required={true}
                            mask="numbers"
                            onChange={(e) => {
                                setItem({ ...item, price: Number(e.target.value) });
                                e.target.value.match(/^[0-9]+$/)
                                    ? setValidation({ ...validation, priceValid: true })
                                    : setValidation({ ...validation, priceValid: false });
                            }}
                        />
                        <ARInput
                            variant="standard"
                            size="large"
                            label="Адрес:"
                            required={true}
                            onChange={(e) => setItem({ ...item, address: e.target.value })}
                        />
                        <ARInput variant="standard" size="large" label="Бренд:" onChange={(e) => setItem({ ...item, brand: e.target.value })} />
                        {/* <ARDropdown values={["Почасовая", "Дневная", "Месячная"]} defaultValue={"Тип аренды"} /> */}
                        <div className="create-form__images-wrapper">
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                style={{ display: "none" }}
                                ref={imageInputRef}
                                onChange={(e) => onImageChange(e)}
                            />
                            <ARButton variant="long-violet" text="Загрузить фото" onClick={openImageInput} />

                            <div className="create-form__images-container">
                                {imageURLs.map((imageSrc: any) => (
                                    <div className="">
                                        <img className="create-form__image-preview" src={imageSrc} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="create-form__category-wrapper">
                        {mainCategories ? (
                            <ARDropdown values={mainCategories} defaultValue={"Выбор категории"} onChange={(value) => mainCategoryHandler(value)} />
                        ) : (
                            <></>
                        )}
                        {subCategories?.length ? (
                            <ARDropdown values={subCategories} defaultValue={"Выбор подкатегории"} onChange={(value) => subCategoryHandler(value)} />
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
                <div>
                    <ARButton variant="big-violet" text="Создать" isDisabled={!formValid()} />
                </div>
            </form>
        </div>
    );
};

export default ARCreateForm;
