import axios from 'axios';

 export const cloudinaryFileUploader = (files,foldername,foldernameVideo) => {
    //let files = Array.prototype.slice.call(theFileList)
   
    const uploaders = files.map(file => {
       
        let formData = new FormData();
        formData.append("api_key",'285759666786543');
        formData.append("file", file);
        formData.append("folder", (file.type == "video/mp4") ? foldernameVideo : foldername);
        formData.append("upload_preset", 'lgo8izk7');

        return axios.post("https://api.cloudinary.com/v1_1/www-baaldahab-com/upload/", formData, {
            headers: { "X-Requested-With": "XMLHttpRequest" },
        });
        
    });
    return axios.all(uploaders);
   
}

export const cloudinaryAlbumUploader = (files,foldername,foldernameVideo) => {
    //let files = Array.prototype.slice.call(theFileList)
   
    const uploaders = files.map(file => {
       
        let formData = new FormData();
        formData.append("api_key",'285759666786543');
        formData.append("file", file);
        formData.append("folder", (file.includes == "video") ? foldernameVideo : foldername);
        formData.append("upload_preset", 'lgo8izk7');

        return axios.post("https://api.cloudinary.com/v1_1/www-baaldahab-com/upload/", formData, {
            headers: { "X-Requested-With": "XMLHttpRequest" },
        });
        
    });
    return axios.all(uploaders);
   
}
 

export const cloudinaryMediaUploader = (files) => {
   
    const uploaders = files.map(file => {
        let formData = new FormData();
        formData.append("api_key",'285759666786543');
        formData.append("file", file.base64);
        formData.append("folder", file.path);
        formData.append("upload_preset", 'lgo8izk7');

        return axios.post("https://api.cloudinary.com/v1_1/www-baaldahab-com/upload/", formData, {
            headers: { "X-Requested-With": "XMLHttpRequest" },
        });
        
    });
    return axios.all(uploaders);
}

export const cloudinarySingleUploader = (files,foldername) => {
    
    //const uploaders = files.map(file => {
        
        let formData = new FormData();
        formData.append("api_key",'285759666786543');
        formData.append("file", files);
        formData.append("folder", foldername);
        formData.append("upload_preset", 'lgo8izk7');

       /*  axios.post("https://api.cloudinary.com/v1_1/www-baaldahab-com/upload/", formData, {
            headers: { "X-Requested-With": "XMLHttpRequest" },
        });
        */
        axios.post('https://api.cloudinary.com/v1_1/www-baaldahab-com/upload/', formData, {
            headers: { "X-Requested-With": "XMLHttpRequest" },
          })
          .then(function (response) {
            return(response);
          })
      // return axios.all(uploaders);
}

export const cloudinaryPostUploader = (files,foldername,foldernameVideo) => {
    //let files = Array.prototype.slice.call(theFileList)
   
    const uploaders = files.map(file => {
      
            let formData = new FormData();
            formData.append("api_key",'285759666786543');
            formData.append("file", file.media_link);
            formData.append("folder", (file.media_type == "VIDEO") ? foldernameVideo : foldername);
            formData.append("upload_preset", 'lgo8izk7');

            return axios.post("https://api.cloudinary.com/v1_1/www-baaldahab-com/upload/", formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            });
    });
    return axios.all(uploaders);
   
}