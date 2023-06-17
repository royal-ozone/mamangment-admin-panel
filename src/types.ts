type UserType = {
    id: string
    first_name: string
    last_name: string
    role: string
    active: boolean
    mobile: string
    created_at: string
}
type AuthStateType = {
    loggedIn: boolean
    user: UserType
    message: string
}

type AccountType = {
    id?: string
    title: string
    type: string
    courier_id?: string
    store_id: string
    reference: string
    display: boolean
    created_at: string
}
type BankAccountStateType = {
    msg: string,
    account: AccountType,
    cashAccount: AccountType
}

type ParentCategoriesType = {
    id: string
    entitle: string
    artitle: string
    metatitle?: string
    content?: string
    display: boolean
    created_at: string
}
type ChildAndGrandCategoriesType = ParentCategoriesType & { parent_id: string, p_entitle: string, p_artitle: string }
type CategoriesStateType = {
    parentCategories: { data: ParentCategoriesType[], count: number },
    childCategories: { data: ChildAndGrandCategoriesType[], count: number },
    grandChildCategories: { data: ChildAndGrandCategoriesType[], count: number },
}

type DiscountCodeType = {
    id: string
    discount_code: string,
    expiry_date: string,
    min_order_amount: number,
    max_counter: number,
    discount: number,
    max_discount: number,
    number_of_time: number,
    created_at: string
}

type DiscountCodeStateType = {
    data: DiscountCodeType[]
    count: number
}

type EmployeeType = UserType & { name: string }

type EmployeeStateType = {
    data: EmployeeType[]
    count: number
}

type FilterStateType = {
    store?: { title: string, id: string }
    duration: string
}
type TransactionType = {
    id: string,
    store_id: string,
    courier_id: string,
    amount: number,
    order_id?: string,
    order_item_id?: string,
    status: string,
    type: string,
    withdrawal_id?: string,
    description?: string,
    entitle?: string,
    artitle?: string,
    created_at: string,
}
type FinanceStateType = {
    transactions: { data: TransactionType[], count: number },
    message: string,
    pending: number,
    refunded: number,
    released: number,
    transferred: number,
    withdrawn: number,
    canceledWithdrawn: number,
    commission: number,
    delivery: number
}

type DialogStateType = {
    message: string,
    status: number,
    type: string,
    title: string
}

type ToastStateType = {
    message: string
    status: number
    type: string
}
type OrderItemType = {
    id: string
    order_id: string
    profile_id: string
    product_id: string
    store_id: string
    size: string | null
    color: string | null
    price: number
    discount: number
    quantity: number
    price_after: number
    status: string
    cancellation_reason: string | null
    last_update: string | null
    date_after_day: string
    rated: boolean
    created_at: string
    entitle: string
    artitle: string
    p_price: number
    store_name: string
    picture: string
}
type OrderType = {
    id: string
    customer_order_id: string
    profile_id: string
    address_id: string
    status: string
    tax: number | null
    discount_id: number | null
    sub_total: number
    created_at: string
    payment_method: string
    delivey_date: string | null
    updated: string
    delivery_date: string
    grand_total: number
    shipping: number
    first_name: string
    last_name: string
    address?: {
        id: string
        profile_id: string
        store_id: string
        country: string
        city: string
        first_name: string
        last_name: string
        mobile: "0798257891"
        street_name: string
        building_number: string
        apartment_number: string
        display: boolean
        is_default: boolean
        store_address: boolean
        region: string
        lat: number | string | null
        lng: number | string | null
    }
    items: OrderItemType[]
}
type OrdersStateType = {
    pendingOrders: { data: OrderType[], count: number }
    ordersOverview: { data: OrderType[], count: number }
    messages: string
    statuses: string[]
}

type ProductPictureType = {
    id?: string
    product_id?: string
    product_picture: string
}
type ProductType = {
    id: string
    store_id: string
    entitle: string
    artitle: string
    metatitle?: string
    sku?: string
    parent_category_id: string
    child_category_id: string
    grandchild_category_id: string | null
    discount: boolean
    discount_rate: number
    price: number
    currency: string
    brand_name: string | null
    endescription: string
    ardescription: string
    quantity: number
    status: string
    age: string | null
    size_and_color: string | null
    display: boolean
    created_at: string
    rejection_reason?: string | null
    commission: number
    is_commission_included: boolean
    store_name: string
    p_entitle: string
    p_artitle: string
    c_entitle: string
    c_artitle: string
    g_entitle: string | null
    g_artitle: string | null
    rate: number | null
    pictures: ProductPictureType[]
}

type ReviewType = {
    id: string
    review: string
    rate: number
    order_item_id: string
    created_at: string
    first_name: string
    last_name: string
    profile_picture?: string
}
type ProductStateType = {
    pending: { data: ProductType[], count: number },
    overview: { data: ProductType[], count: number },
    searched: {},
    reviews: { data: ReviewType[], count: number }
}

type StoreType = {
    id: string
    profile_id: string
    store_name: string
    name_is_changed: boolean
    city: string
    caption: string
    about: string
    mobile: string
    store_picture: string
    status: string
    rejected_reason: string | null
    verified_email: boolean
    performance_rate: number
    sales_rate: number
    created_at: string
    store_rating: number
    verification_code: string | null
}

type StoreStateType = {
    pending: { data: StoreType[], count: number },
    overview: { data: StoreType[], count: number },
    searched: [],
    populatedStore: { title?: string, id?: string }
}

type CustomerType = {
    id: string
    email: string
    mobile: string
    verified: boolean
    status: string
    created_at: string
    profile_id: string
    first_name: string
    last_name: string
    city: string
    country: string
}

type UserStateType = {
    data: CustomerType[]
    count: number
}

type WithdrawalType = {
    id: string
    account_id: string
    courier_id: string | null
    store_id: string
    amount: number
    type: string
    status: string
    updated: string | null
    document: string | null
    created_at: string
    account_type?: string
    rejection_reason?: string | null
    title?: string
    reference?: string
}

type WithdrawalStateType ={
    data: WithdrawalType[]
    count: number
}

type ParamsType = {
    limit?: number
    offset?: number
} & {[key: string]: string | number}