/*
* HTTP Library
* Library for making HTTP Requests
*
* @version 2.0.0
* @author Alejandro H. Cartojano Jr.
* @license ETC
*
*/

class HttpLibrary{
    async get(url){
        const res = await fetch(url);

        let resdata = "";
        if(res.status === 200){
            resdata = await res.json();
        } else {
            resdata = await 'Error: ' + res.status;
        }
        
        return resdata;
    }

    async post(url, data){
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        });

        let resdata = "";

        if(res.status === 201){
            resdata = await res.json();
        } else {
            resdata = await 'Error: ' + res.status;
        }
        
        return resdata;
    }

    async put(url, data){
        const res = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        });

        let resdata = "";
        if(res.status === 200){
            resdata = await res.json();
        } else {
            resdata = await 'Error: ' + res.status;
        }
        
        return resdata;
    }

    async delete(url){
        const res = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type' : 'application/json'
            }
        });

        let resdata = "";
        if(res.status === 200){
            resdata = await 'Deleted';
        } else {
            resdata = await 'Error: ' + res.status;
        }

        return resdata;
    }
}