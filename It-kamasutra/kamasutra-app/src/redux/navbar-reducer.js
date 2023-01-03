const initialState = {
   friends: [
      { id: 1, name: 'Masha', urlImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjWNkmhB4rzNc5YQ3MkdnEJWvMmMjVEF0Qpg4FEPQ&s' },
      { id: 2, name: 'Sasha', urlImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmRfqbUQ0IxjeQz0zQC9U6PFf6Ow4nbhTL4yhYs18&s' },
      { id: 3, name: 'Vasya', urlImg: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' }
   ]
};

const navbarReducer = (state = initialState, action) => {
   return state;
};

export default navbarReducer;