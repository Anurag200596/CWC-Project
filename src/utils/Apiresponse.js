class Apiresponse {
    consrtuctor(statuscode,data,message ="success"){
        this.message= message
        this.statuscode=statuscode
        this.data=data
        this.success = statuscode < 400
    
    }
}