const asynchandler = (requesthandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requesthandler(req,res,next)).
          catch((err) => next(err))
    }

}
export { asynchandler }
// function ke andar function as a parameter use kr rhe hai higher order function ki tarah
// try catch
// const asynchandler = (fn) = async(req,res,next)=>{
//     try{
//         await fn(req,res,next)
//         return

//     }
//     catch(error){
//         res.status(err.code||500).json({
//             success: false,
//             message: err.message
//         })

//     }
// }





// baar baar code likne se achga ek wrapper bna lo utilities me ek hi format me har br response jaane ke liye