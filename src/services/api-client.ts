import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '7f13e6dd3a1b4ddea0515e8dc1e1808d'
    }
})