export enum ARRoutes {
    MAIN_PAGE = "/",
    SHOW_CASE = "/showcase",
    PRODUCT_PAGE = "/product",
    PAYMENT_PAGE = "/payment",
    LOGIN_PAGE = "/signin",
    SIGNUP_PAGE ="/signup",
    ITEMS_PAGE = "/items",
    PERSONAL_PAGE = "/user",
    ABOUT_US_PAGE = "/about-us",
    ERR_404 = "/error-404",
    TERMS_RIGHTS = "/terms-rights",
    ABOUT_TEAM = "/about-team",
    CONTACTS = "/contacts",
    CONFIDENTIAL = "/confidential",
    FIND_BUG = "/find-bug",
    SUPPORT = "/support"
}

export enum ARUserRoutes {
    PERSONAL_INFO = "/user/personal-info",
    PERSONAL_FAVOURITES = "/user/personal-favourites",
}

export enum ARUserPanelMatchRoutes {
    PROFILE = "profile",
    MY_ITEMS = "my-items",
    FAVOURITE = "favourite",
    NEW_RENT = "new-rent",
    REVIEWS = "reviews",
    MESSAGES = "messages",
    ORDERS_HISTORY = "orders-history",
    IN_RENT = "in-rent"
}

export const itemsRoutes = {
    getOneItemRoute: (id: string = ":id") => `${ARRoutes.ITEMS_PAGE}/${id}`,
    getOnePaymentRoute: (id: string = ":id") => `${ARRoutes.PAYMENT_PAGE}/${id}`,
    getItemsByCategoryRoute: (categoryId: string = ":categoryId") => `${ARRoutes.ITEMS_PAGE}/category/${categoryId}`,
    getItemsBySearch: (searchValue: string =":searchValue") => `${ARRoutes.ITEMS_PAGE}/search/${searchValue}`,
};

export const userRoutes = {
    getUserRoute: () => `${ARRoutes.PERSONAL_PAGE}`,
    getUserInfoRoute: () => `${ARRoutes.PERSONAL_PAGE}/${ARUserPanelMatchRoutes.PROFILE}`,
    getUserFavsRoute: () => `${ARRoutes.PERSONAL_PAGE}/${ARUserPanelMatchRoutes.FAVOURITE}`,
    getUserAddItemRoute: () => `${ARRoutes.PERSONAL_PAGE}/${ARUserPanelMatchRoutes.NEW_RENT}`,
    getUserItemsRoute: () => `${ARRoutes.PERSONAL_PAGE}/${ARUserPanelMatchRoutes.MY_ITEMS}`,
    getUserHistoryRoute: () => `${ARRoutes.PERSONAL_PAGE}/${ARUserPanelMatchRoutes.ORDERS_HISTORY}`,
    getUserInRentRoute: () => `${ARRoutes.PERSONAL_PAGE}/${ARUserPanelMatchRoutes.IN_RENT}`
};

export enum ARShowCaseRoutes {
    INPUT = "/showcase/input",
    SEARCH_INPUT = "/showcase/search-input",
    RADIO = "/showcase/radio",
    CHECKBOX = "/showcase/checkbox",
    LOGO = "/showcase/logo",
    SIGN_UP_FORM = "/showcase/sign-up-form",
    LOADING = "/showcase/loading",
    DROPDOWN = "/showcase/dropdown",
    HEADER = "/showcase/header",
    FOOTER = "/showcase/footer",
    CATEGORY_CARD = "/showcase/category-card",
    RATING = "/showcase/rating",
    PANEL = "/showcase/panel",
    TIME_PICKER = "/showcase/time-picker",
    DATE_PICKER = "/showcase/date-picker",
    CAROUSEL = "/showcase/carousel",
    FILTRATION = "/showcase/filtration",
}
