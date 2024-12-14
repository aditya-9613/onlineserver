import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { asyncHandler } from '../utils/asyncHandler.js'


const userRegister = asyncHandler(async (req,res) => {
    
    const {user} = req.body

    console.log('API Hits');
    

    if (!user) {
        throw new ApiError(400,'Required Fields')
    }

    return res
        .status(200)
        .json(
            new ApiResponse(200,user,'User Available')
        )

})

const getDetails = asyncHandler(async (req,res) => {

    const data={
        "name": "Alice",
        "age": 25,
        "city": "Wonderland"
      }
      
      console.log(data)
      

    return res
    .status(200)
    .json(
        new ApiResponse(200,data,"done")
    )
})


export {
    userRegister,
    getDetails
}
