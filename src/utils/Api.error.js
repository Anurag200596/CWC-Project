class Apierror extends Error{
    constructor(
        statusCode,
        message= "something went wrong",
        errors =[],
        stack=""
    ){
        super(message)
        this.statuscode=statuscode
        this.data=null
        this.message = false;
        this.errors= errors


    }
}

export { Apierror }