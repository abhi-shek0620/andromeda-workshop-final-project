import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "MuseCoin Token for Music Lovers",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            exchange:
                "andr1e5w80rxklzl0vlk9e59p9vmrx5gn4pu009ymmup5f4qj8aut5n8srgmyvd",
            cw20: "andr1pwq6kq7xc8cxlft0g79yra27k20tp764p3wn9un50wu2uz37z8kq9x96jj",
            name: "MuseCoin Token for Music Lovers",
            type: ICollectionType.EXCHANGE,
            id: "embeddables-exchange-1",
        },
    ],
};

export default CONFIG;
