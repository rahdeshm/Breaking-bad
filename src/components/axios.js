// useEffect(()=>{
//     const getData=async ()=>{
//       axios({
//           method:'get',
//           // url:`https://jsonplaceholder.typicode.com/posts/`,
//           url:'https://jsonplaceholder.typicode.com/posts?userid=1',
//           // params:{
//           //     _limit:5
//           // }
//       })
//       .then((response)=>{
//           console.log(response);
//       })
//       .catch((error)=>{
//           console.log(error.message);
//       })
//       .finally( ()=>{
//           console.log('finally called');
//        })
//     }
//     getData()
//   },[])
   
//   useEffect(()=>{
//       const getData=async ()=>{
//            axios.get('https://jsonplaceholder.typicode.com/todos')
//            .then((response)=>{
//               console.log(response);
//            })
//       }
//       getData()
//   },[])

//   useEffect(()=>{
//       const getData=async ()=>{
//           const response=await axios.get('https://jsonplaceholder.typicode.com/todos')
//               console.log(response);
//       }
//       getData()
//   },[])

//   axios.interceptors.request.use((config)=>{
//       console.log(`${(config.method).toUpperCase()} request from ${config.url} to ${new Date().getTime()}`);
//       return config
//   })
//   useEffect(()=>{
//     const simultanousApiCall=()=>{
//        axios.all([
//           axios.get('https://jsonplaceholder.typicode.com/todos'),
//           axios.get('https://jsonplaceholder.typicode.com/posts'),
//        ])
//        .then((response=>console.log(response)))
//        .catch((error)=>console.log(error.message))
//     }

//     simultanousApiCall()
//   },[])
//   useEffect(()=>{
//       const getData=async ()=>{
//            axios({
//               method:'post',
//               url:'https://jsonplaceholder.typicode.com/todos',
//               data:{
//                   title:'rahul rameshrao deshmukh',
//                   body:'latur'
//               }
//            })
//            .then((response)=>{
//               console.log(response);
//            })
//            .catch((error)=>{
//               console.log(error?.message);
//            })
//       }
//       getData()
//   },[])

//   useEffect(()=>{

//       const postData=async() =>{

//         const response= await axios.post('https://jsonplaceholder.typicode.com/todos',{title:'rahul', body:'latur'});
//         console.log('posted data',response);
//       }
//       postData()
//   },[])

//   // api call with custom header
//   useEffect(()=>{
   
//       const postDataWithCustomHeader=async ()=>{
//           const config={
//               headers:{
//                   'Content-Type':'application/json',
//                    Authorization:'sometoken'
//               }
//           }

//           axios.post('https://jsonplaceholder.typicode.com/todos',{title:'rahul', body:'latur'},config)
//           .then((response)=>{
//               console.log(response, 'post');
//           })
//       }
//       postDataWithCustomHeader()

//   },[])
//   useEffect(()=>{

//       const updateData=async ()=>{
//           axios({
//               method:'put',
//               url:'https://jsonplaceholder.typicode.com/todos/1',
//               data:{
//                   title:'updated data'
//               }
//           })
//           .then((response)=>{
//               console.log(response
//             );
//           })
//       }
//       updateData()

//   },[])

//   useEffect(()=>{

//       const updateData=async ()=>{

//           const response=await axios({method:'put',
//           url:'https://jsonplaceholder.typicode.com/todos/1',
//           data:{
//               title:'updated new data'
//           }})
          
//           console.log(response );
//       }
//       updateData() 
//   })

//   useEffect(()=>{

//       const deleteData=async ()=>{

//           const response=await axios({method:'delete',
//           url:'https://jsonplaceholder.typicode.com/todos/3'}
//           );
//           console.log(response.data );
//       }
//       deleteData() 
//   })


//   /// axios instance

//   const axiosInstance=axios.create({
//       baseURL:'https://jsonplaceholder.typicode.com'
//   })

//   // const response=axiosInstance.get('/todos').then(response=>response.data)