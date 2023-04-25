import { Drash, bcrypt } from "../deps.ts"
import UserModel from "../models/user_model.ts";

class RegisterResource extends Drash.Http.Resource {

    static paths = [
        "/register",
    ];

    // static middleware: {
    //     before_request: [
    //         'LogMiddleware'
    //     ]
    // }

    public GET() {
        this.response.body = this.response.render('/register.html', { title: 'Register'})
        return this.response;
    }

    /**
     * Requires and expects the following in the request body:
     * {
     *     username: string
     *     email: str: stringing
     *     password
     * }
     */
    public async POST() {
        // Gather data
        const username = decodeURIComponent(this.request.getBodyParam('username'))
        const email = decodeURIComponent(this.request.getBodyParam('email'))
        const rawPassword = decodeURIComponent(this.request.getBodyParam('password'))
        // Validate
        const userModel = new UserModel();
        const validation = await userModel.validate({username, email, password: rawPassword})
        if (validation.success === false) {
            // TODO :: Is an error code useful here?
            this.response.body = JSON.stringify(validation)
            return this.response
        }
        // Hash password
        const password = await bcrypt.hash(rawPassword)
        // Create user
        await userModel.CREATE(UserModel.CREATE_ONE, [username, email, password])
        this.response.body = JSON.stringify({success: true, message: 'Successfully created.'})
        return this.response
    }
}

export default RegisterResource