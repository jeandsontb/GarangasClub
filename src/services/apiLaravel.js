const baseUrl = 'http://127.0.0.1:8000/api';

const request = async (method, endpoint, params, token = null) => {
    method = method.toLowerCase();
    let fullUrl = `${baseUrl}${endpoint}`;
    let body = null;
  
    switch (method) {
      case 'get':
        let queryString = new URLSearchParams(params).toString();
        fullUrl += `?${queryString}`;
        break;
      case 'post':
      case 'put':
      case 'delete':
        body = JSON.stringify(params);
        break;
    }
  
    let headers = {'Content-Type': 'application/json'};
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  
    let req = await fetch(fullUrl, {method, headers, body});
    let json = await req.json();
    return json;
  };

export default () => {
    return {
        getToken: () => {
          return localStorage.getItem('token');
        },
        getPermissionUser: () => {
          return localStorage.getItem('permission');
        },
        validateToken: async () => {
            let token = localStorage.getItem('token');
            let json = await request('post', '/auth/validate', {}, token);
            return json;
        },
        login: async (cpf, password) => {
            let json = await request('post', '/auth/login', {cpf, password});
            return json;
        },
        logout: async () => {
            let token = localStorage.getItem('token');
            let json = await request('post', '/auth/logout', {}, token);
            localStorage.removeItem('token');
            return json;
        }, 
        addUrlLink: async (title, url) => {
            let token = localStorage.getItem('token');
            let json = await request('post', '/link/movie/restrict', {
                title,
                url
            }, token);
            return json;
        },
        getUrlLink: async () => {
            let json = await request('get', '/link/movie', {});
            return json;
        },
        setUlrLink: async (id, title, url) => {
            let token = localStorage.getItem('token');
            let json = await request('put', `/link/movie/restrict/${id}`, {
                title,
                url
            }, token);
            return json;
        },
        removeLinkMovie: async (id) => {
            let token =  localStorage.getItem('token');
            let json = await request('delete', `/link/movie/restrict/${id}`, {}, token);
            return json;
        },
        getEvent: async () => {
          let json = await request('get', '/event', {});
          return json; 
        },
        addEvent: async (img, title, description, date) => {
            let token =  localStorage.getItem('token');            
        
            let json = await request('post', `/event/restrict`, {
              img,
              title,
              description,
              date
            }, token);
            return json;
          },
          addEditEvent: async (id, img, title, description, date) => {
            let token =  localStorage.getItem('token');            
        
            let json = await request('post', `/event/restrict/${id}`, {
              img,
              title,
              description,
              date
            }, token);
            return json;
          },
          removeEvent: async (id) => {
            let token =  localStorage.getItem('token');
            let json = await request('delete', `/event/restrict/${id}`, {}, token);
            return json;
          },
          addFileEvent: async (file) => {
            let token =  localStorage.getItem('token');
            let formData = new FormData();
            formData.append('photo', file);
          
            let  req = await fetch(`${baseUrl}/event/file/restrict`, {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${token}`,
                },
                body: formData,
              });
              let json = await req.json();
              return json; 
          },
          getHistoric: async () => {
            let json = await request('get', '/historic', {});
            return json; 
          },
          addHistoric: async (image, title, description) => {
            let token =  localStorage.getItem('token');            
        
            let json = await request('post', `/historic/restrict`, {
              title,
              description,
              image
            }, token);
            return json;
          },
          addEditHistoric: async (id, image, title, description) => {
            let token =  localStorage.getItem('token');            
        
            let json = await request('post', `/historic/restrict/${id}`, {
              title,
              description,
              image
            }, token);
            return json;
          },
          removeHistoric: async (id) => {
            let token =  localStorage.getItem('token');
            let json = await request('delete', `/historic/restrict/${id}`, {}, token);
            return json;
          },
          addFileHistoric: async (file) => {
            let token =  localStorage.getItem('token');
            let formData = new FormData();
            formData.append('photo', file);
          
            let req = await fetch(`${baseUrl}/historic/file/restrict`, {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${token}`,
              },
              body: formData,
            });
            let json = await req.json();
            return json;
          },
          addFileProject: async (file) => {
            let token =  localStorage.getItem('token');
            let formData = new FormData();
            formData.append('photo', file);
          
            let  req = await fetch(`${baseUrl}/project/file/restrict`, {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${token}`,
                },
                body: formData,
              });
              let json = await req.json();
              return json; 
          },
          getProjects: async () => {
            let json = await request('get', '/project', {});
            return json;
          },
          addProject: async (cover, photos, name, title, description, futureprojects) => {
            let token =  localStorage.getItem('token'); 
        
            let json = await request('post', `/project/restrict`, {
              name,              
              title,
              description,
              futureprojects,
              cover,
              photos
            }, token);
            return json;
          },
          addEditProject: async (id, cover, photos, name, title, description, futureprojects) => {
            let token =  localStorage.getItem('token'); 
        
            let json = await request('post', `/project/admin/restrict/${id}`, {
              name,              
              title,
              description,
              futureprojects,
              cover,
              photos
            }, token);
            return json;
          },
          removeProject: async (id) => {
            let token =  localStorage.getItem('token');
            let json = await request('delete', `/project/admin/restrict/${id}`, {}, token);
            return json;
          },
          getMembers: async () => {
            let json = await request('get', `/member`, {});
            return json;
          },
          addFileMember: async (file) => {
            let token =  localStorage.getItem('token');
            let formData = new FormData();
            formData.append('photo', file);
          
            let  req = await fetch(`${baseUrl}/member/file/restrict`, {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${token}`,
                },
                body: formData,
              });
              let json = await req.json();
              return json; 
          },
          addMember: async (cover, photos, name, title, description) => {
            let token =  localStorage.getItem('token'); 
        
            let json = await request('post', `/member/restrict`, {
              name,              
              title,
              description,
              cover,
              photos
            }, token);
            return json;
          },
          addEditMember: async (id, cover, photos, name, title, description) => {
            let token =  localStorage.getItem('token'); 
        
            let json = await request('post', `/member/admin/restrict/${id}`, {
              name,              
              title,
              description,
              cover,
              photos
            }, token);
            return json;
          },
          removeMember: async (id) => {
            let token =  localStorage.getItem('token');
            let json = await request('delete', `/member/admin/restrict/${id}`, {}, token);
            return json;
          },
          getCarSale: async () => {
            let json = await request('get', `/car/sale`, {});
            return json;
          },          
          addFileCarSale: async (file) => {
            let token =  localStorage.getItem('token');
            let formData = new FormData();
            formData.append('photo', file);
          
            let  req = await fetch(`${baseUrl}/car/sale/file/restrict`, {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${token}`,
                },
                body: formData,
              });
              let json = await req.json();
              return json; 
          },
          addCarSale: async (cover, photos, name, title, description, phone, price) => {
            let token =  localStorage.getItem('token'); 
        
            let json = await request('post', `/car/sale/restrict`, {
              name,              
              title,
              description,
              phone,
              price,
              cover,
              photos
            }, token);
            return json;
          },
          addEditCarSale: async (id, cover, photos, name, title, description, phone, price) => {
            let token =  localStorage.getItem('token'); 
        
            let json = await request('post', `/car/sale/admin/restrict/${id}`, {
              name,              
              title,
              description,
              phone,
              price,
              cover,
              photos
            }, token);
            return json;
          },
          removeCarSale: async (id) => {
            let token =  localStorage.getItem('token');
            let json = await request('delete', `/car/sale/admin/restrict/${id}`, {}, token);
            return json;
          },
          getUser: async () => {
            let json = await request('get', `/user`, {});
            return json;
          },
          addUser: async (name, email, cpf, password, password_confirm) => {
            let token = localStorage.getItem('token');
            let json = await request('post', '/user/restrict', {
                name,
                email,
                cpf,
                password,
                password_confirm
            }, token);
            return json;
        },
        editUser: async (id, name, email, password, password_confirm, admin) => {
          let token = localStorage.getItem('token');
          let json = await request('post', `/user/restrict/${id}`, {
              name,
              email,
              password,
              password_confirm,
              admin
          }, token);
          return json;
      },
      removeUser: async (id) => {
        let token =  localStorage.getItem('token');
        let json = await request('delete', `/user/restrict/${id}`, {}, token);
        return json;
      },
      addFilePartner: async (file) => {
        let token =  localStorage.getItem('token');
        let formData = new FormData();
            formData.append('photo', file);
          
        let  req = await fetch(`${baseUrl}/partner/file/restrict`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
            body: formData,
        });
          let json = await req.json();
          return json;
      },
      getPartners: async () => {
        let json = await request('get', '/partner', {});
        return json;
      },
      addPartner: async (photos, title ) => {
        let token =  localStorage.getItem('token');            
        
        let json = await request('post', `/partner/restrict`, {
          photos,
          title
        }, token);
        return json;
      },
      setPartner: async (id, photos, title ) => {
        let token =  localStorage.getItem('token');            
        
        let json = await request('post', `/partner/restrict/${id}`, {
          photos,
          title
        }, token);
        return json;
      },
      removePartner: async (id) => {
        let token =  localStorage.getItem('token');
        let json = await request('delete', `/partner/restrict/${id}`, {}, token);
        return json;
      }
    };       
}