import Api from "./API"

export default {
    createUser (credencials) {
        return Api.post('create-user', credencials)
    }
}
