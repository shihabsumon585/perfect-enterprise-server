import { authService } from "./auth.service"

const authLogin = async() => {
    const result = await authService.loginInfoSaveIntoDB();
}

export const authController = {
    authLogin
}