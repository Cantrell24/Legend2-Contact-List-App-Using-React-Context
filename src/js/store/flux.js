const getState = ({ getStore, getActions, setStore }) => {
	let backendUrl="https://playground.4geeks.com/apis/fake/contact/"
	let agenda_slug="Cantrell24"
	return {
		store: {
			contacts:[]
		},
		actions:{
			deleteContact: async (contact_id) => {
				try {
					const response = await fetch (`https://playground.4geeks.com/apis/fake/contact/${contact_id}`,{
						method: "DELETE",
						headers: {
							"content-type":"application/json"
						},
					})
				} catch (error) {
					console.log(error)
				}
			},
			getContacts: ()=>{
				fetch(backendUrl+"/agenda/Cantrell24")
				.then(response=>response.json())
				.then(data=>setStore({contacts:data}))
			},
			getOneContact: async (contact_id)=>{
				fetch(backendUrl+`/${contact_id}`)
				.then(response=>response.json())
				.then(data=>setStore({contact:data}))
			},	
			addContacts:async(fullName,address,phone,email)=>{
				let opt={
					method:"POST",
					headers: {
						"Content-Type":"application/json"
					},
					body:JSON.stringify({
						full_name:fullName,
						email:email,
						address:address,
						phone:phone,
						agenda_slug:agenda_slug
					})

				}
			}
		}
	};
};

export default getState;
