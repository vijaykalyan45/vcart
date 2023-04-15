const cart = [];



const handlecart = (state =cart, action) => {
  
  const product = action.payload;
console.log(state);
  switch (action.type) {
    case "adding":{
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      // cart1=cart;
      // console.log(cart1);
      break; 
    }


    case "deleting":{
      const exist1 = state.find((x) => x.id === product.id);
      if (!exist1) {
        return state;
      }
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== product.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;
    }
case "vijay":{

  const exist = state.find((x) => x.id === product.id);
  if (exist) {
    return state.map((x) =>
      x.id === product.id ? { ...x, qty: x.qty + 1 } : x
    );
  } else {
    return [
      ...state,
      {
        ...product,
        qty: 1,
      },
    ];
  }


}




    default:
      return state;
  }
};



export default handlecart;
