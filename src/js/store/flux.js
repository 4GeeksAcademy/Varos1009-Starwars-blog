const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			people: [],
			vehicles: [],
			favorites: [],
			peopleDetail: { properties: null, description: null, uid: null },
			vehiclesDetail: { properties: null, description: null, uid: null },
			planetsDetail: { properties: null, description: null, uid: null }

		},
		actions: {
			addFavorites: (name) => {
				const store = getStore();
				if (!store.favorites.includes(name)) {
					const favorite = store.favorites.concat(name);
					setStore({ ...store, favorites: favorite });
				}
			},
			removeFavorites: (name) => {
				const sto = getStore();
				const favorite = sto.favorites.filter(el =>
					el.name !== name
				);
				setStore({ favorites: favorite });

			},
			getPeopleDetail: async (id) => {
				await fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(res => res.json())
					.then(data => {
						const { result } = data;
						const prevPeopleStore = getStore().people || [];

						setStore({ people: [...prevPeopleStore, { properties: result.properties, description: result.description, uid: result.uid, type: 'people' }] })
					})
					.catch(err => console.error(err))
			},
			getPeople: async () => {
				await fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data => {
						const { results } = data;
						const actions = getActions();
						const promises = results.map(item => actions.getPeopleDetail(item.uid));
						return Promise.all(promises);
					})
					.catch(err => console.error(err))
			},
			getVehicleDetail: async (id) => {
				await fetch(`https://www.swapi.tech/api/vehicles/${id}`)
					.then(res => res.json())
					.then(data => {
						const { result } = data;
						const prevVehiclesStore = getStore().vehicles || [];

						setStore({ vehicles: [...prevVehiclesStore, { properties: result.properties, description: result.description, uid: result.uid, type: 'vehicles' }] })
					})
					.catch(err => console.error(err))
			},
			getVehicles: async () => {
				await fetch("https://www.swapi.tech/api/vehicles/")
					.then(res => res.json())
					.then(data => {
						const { results } = data;
						const actions = getActions();
						const promises = results.map(item => actions.getVehicleDetail(item.uid));
						return Promise.all(promises);
					})
					.catch(err => console.error(err))
			},
			getPlanetDetail: async (id) => {
				await fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then(res => res.json())
					.then(data => {
						const { result } = data;
						const prevPlanetStore = getStore().planets || [];

						setStore({ planets: [...prevPlanetStore, { properties: result.properties, description: result.description, uid: result.uid, type: 'planets' }] })
					})
					.catch(err => console.error(err))
			},
			getPlanets: async () => {
				await fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(data => {
						const { results } = data;
						const actions = getActions();
						const promises = results.map(item => actions.getPlanetDetail(item.uid));
						return Promise.all(promises);
					})
					.catch(err => console.error(err))
			}

		}

	};
};

export default getState;
