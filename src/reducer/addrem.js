

const initialState=[
    {
        shop_name:'Ganpati Plaza',
        shop_area:'Thane',
        category:'Baker',
        opening_date:'2022-02-18',
        closing_date:'2022-10-20',
        id:''
    },
    {
        shop_name:'Parth Cash Counter',
        shop_area:'Pune',
        category:'Grocery',
        opening_date:'2021-12-12',
        closing_date:'',
        id:''
    },
    {
        shop_name:'Mahima Medicals',
        shop_area:'Nashik',
        category:'Chemist',
        opening_date:'2008-09-10',
        closing_date:'',
        id:''
    },
    {
        shop_name:'Gautam Stationers',
        shop_area:'Mumbai Suburban',
        category:'Stationary Shop',
        opening_date:'2010-07-15',
        closing_date:'2022-01-10',
        id:''
    },
    
    {
        shop_name:'Jain Kirana Store',
        shop_area:'Ahmednagar',
        category:'Grocery',
        opening_date:'2011-04-15',
        closing_date:'2021-10-10',
        id:''
    },
    
    {
        shop_name:'Asif Meat Shop',
        shop_area:'Nagpur',
        category:'Butcher',
        opening_date:'2020-06-17',
        closing_date:'',
        id:''
    },
    
    {
        shop_name:'Jyoti Medicos',
        shop_area:'Mumbai Suburban',
        category:'Chemist',
        opening_date:'2009-11-19',
        closing_date:'',
        id:''
    },
    
    {
        shop_name:'Santosh Bakery',
        shop_area:'Nashik',
        category:'Baker',
        opening_date:'2021-07-11',
        closing_date:'',
        id:''
    },
    
    {
        shop_name:'Aone Meat Shop',
        shop_area:'Nagpur',
        category:'Butcher',
        opening_date:'2019-09-04',
        closing_date:'2020-10-08',
        id:''
    },
    
    {
        shop_name:'Samridhi Stationers',
        shop_area:'Solapur',
        category:'Stationary Shop',
        opening_date:'2017-05-17',
        closing_date:'2022-01-10',
        id:''
    },
    
    {
        shop_name:'Popular Bakers',
        shop_area:'Pune',
        category:'Baker',
        opening_date:'2010-06-11',
        closing_date:'',
        id:''
    },
    
    {
        shop_name:'Mittal Medicos',
        shop_area:'Thane',
        category:'Chemist',
        opening_date:'2014-11-22',
        closing_date:'',
        id:''
    },
    
    {
        shop_name:'V-mart',
        shop_area:'Ahmednagar',
        category:'Grocery',
        opening_date:'2020-09-22',
        closing_date:'',
        id:''
    },
    
]
const areas=['Thane','Pune','Mumbai Suburban','Nashik','Nagpur','Solapur','Ahmednagar']
const categories=['Grocery','Butcher','Baker','Chemist','Stationary Shop']

const editList = (state = initialState, action) => {
    if (action.type == 'INCREMENT') {
        console.log(action.shop_name,action.shop_area,action.category,action.DOOpen,action.DOClosing);
        for(var i =0; i < state.length;i++){
            if(action.shop_name===state[i]['shop_name']){
                alert('can not add 2 shops with same name.')
                return state
            }
        }
        let myshop = {
            shop_name:action.shop_name,
            shop_area:action.shop_area,
            category:action.category,
            opening_date:action.DOOpen,
            closing_date:action.DOClosing
        }
 
        return state=state.concat(myshop)
    } 
    else if (action.type == 'DECREMENT') {
      
        return state.filter((shop)=>shop.shop_name!==action.shop.shop_name);
    }
    else if(action.type=='FILTER'){
        console.log(action.filter)
        if(action.filter==='All'){
            return state=initialState
        }
        if(areas.includes(action.filter)){
            return state.filter((shop)=>shop.shop_area===action.filter)
        }
        else if (categories.includes(action.filter)){
            return state.filter((shop)=>shop.category===action.filter)
        }
        else if(action.filter==='Open'){
            return state.filter((shop)=>shop.closing_date==='')
        }
        else if(action.filter==='Closed'){
            return state.filter((shop)=>shop.closing_date!=='')
        }
    }
else {
        return state;
    }



    // switch (action.type) {
    //     case 'INCREMENT':
    //         return console.log('increment action');
    //         // return state + 1; //need  const entries=mystate.entries(mystate[0]);s changing
    //     case 'DECREMENT':
    //         return console.log('decrement action');
    //         // return state - 1; //needs changing
    //     default:
    //         return state;
    // }
}

export default editList;