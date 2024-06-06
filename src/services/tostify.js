import { toast } from "react-toastify";

const toastWarn = (text)=> {
    toast.warn(text,{
        position:'top-right',
        autoClose:5000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        progress:undefined,
        theme:'colored'
    });

}

const toastError = (text) => {
    toast.error(text,{
        position:'top-right',
        autoClose:5000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        progress:undefined,
        theme:'colored'
    });

}

 const toastSuccess = (text)=>{
    toast.success(text,{
        position:'top-right',
        autoClose:5000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        progress:undefined,
        theme:'colored'
    });

}

export {toastError,toastSuccess,toastWarn};