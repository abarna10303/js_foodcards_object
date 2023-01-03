let trinelveli_fod=[
    {
        imageurl:"image/food-1.jpg",
        hotelname:"KFC",
        husan:"American, Snacks",
        starrate:"4.1",
        time:"47min",
        rate:"₹400 For Two",
        offers:"50% Off | Use WELCOME50",
        id:"num1",
    },
    {
        imageurl:"image/food-2.jpg",
        hotelname:"Vairamaligai Takeaway",
        husan:"Chinese, North Indian Vannarpettai, rahmath nagar",
        starrate:"4.3",
        time:"47min",
        rate:"₹250 For Two",
        offers:"50% Off | Use WELCOME50",
        id:"num2",
    },
    {
        imageurl:"image/food-3.jpg",
        hotelname:"Anjappar",
        husan:"Chettinad, South Indian Vannarpettai, Kamaraj Nagar",
        starrate:"3.7",
        time:"47min",
        rate:"₹400 For Two",
        offers:"50% Off | Use WELCOME50",
        id:"num3",
    },
    {
        imageurl:"image/food-4.jpg",
        hotelname:"Dindigul Thalappakatti",
        husan:"Biryani, Barbecue Vannarpettai, Vasantha Nager",
        starrate:"3.8",
        time:"47min",
        rate:"₹600 For Two",
        offers:"50% Off | Use WELCOME50",
        id:"num4",
    },
    {
        imageurl:"image/food-5.jpg",
        hotelname:"Annapoorna Hotel",
        husan:"Desserts, Chinese Thirunagar, Kamaraj Nagar",
        starrate:"4.2",
        time:"47min",
        rate:"₹250 For Two",
        offers:"50% Off | Use WELCOME50",
        id:"num5",
    },
    {
        imageurl:"image/food-6.jpg",
        hotelname:"Road House",
        husan:"Pastas, Desserts Vannarpettai, Vannarpeai",
        starrate:"3.9",
        time:"47min",
        rate:"₹300 For Two",
        offers:"50% Off | Use WELCOME50",
        id:"num6",
    },
    {
        imageurl:"image/food-7.jpg",
        hotelname:"Ubaids Nsk Friends Biriyani",
        husan:"Desserts, Chinese Vannarpettai, Palayamkottai",
        starrate:"4.0",
        time:"47min",
        rate:"₹500 For Two",
        offers:"50% Off | Use WELCOME50",
        id:"num7",
    },
    {
        imageurl:"image/food-8.jpg",
        hotelname:"Annapoorna Hotel",
        husan:"Desserts, Chinese  Thirunagar, Kamaraj Nagar",
        starrate:"4.2",
        time:"47min",
        rate:"₹250 For Two",
        offers:"50% Off | Use WELCOME50",
        id:"num8",
    }
];
//container Declaration
let fod_cont=document.querySelector(".container");
//row Creation,set class name,append
let fod_row=document.createElement("div");
fod_row.classList.add("row");
fod_cont.appendChild(fod_row);
trinelveli_fod.forEach(e=>{
    //Colum Creation,set class name,append
    let fod_col=document.createElement("div");
    fod_col.classList.add("col");
    fod_row.appendChild(fod_col);
    //card Creation,set class name,append
    let fod_card=document.createElement("div");
    fod_card.classList.add("card");
    fod_col.appendChild(fod_card);
    //Creat a card inside Elements
    let card_img=document.createElement("img");
    card_img.src=e.imageurl;
    fod_card.appendChild(card_img);
    //Hotel Name
    let card_name=document.createElement("h3");
    card_name.innerHTML=e.hotelname;
    fod_card.appendChild(card_name);
    //Husan Name
    let card_husan=document.createElement("p");
    card_husan.innerHTML=e.husan;
    fod_card.appendChild(card_husan);
    //star and time create
    let card_rate=document.createElement("div");
    card_rate.classList.add("star-rate");
    fod_card.appendChild(card_rate);
    //Star rate
    let card_star=document.createElement("div");
    card_star.classList.add("icon")
    card_rate.appendChild(card_star);
    //star icon
    let icon=document.createElement("i");
    icon.classList.add("fa");
    icon.classList.add("fa-star");
    card_star.appendChild(icon);
    let icon_text=document.createElement("span");
    icon_text.innerHTML=e.starrate;
    card_star.appendChild(icon_text);
    //Dot
    let rate_dot=document.createElement("div")
    rate_dot.innerHTML=".";
    card_rate.appendChild(rate_dot);
    //Time
    let card_time=document.createElement("div");
    card_time.innerHTML=e.time;
    card_rate.appendChild(card_time);
    //Dot2
    let rate_dot2=document.createElement("div")
    rate_dot2.innerHTML=".";
    card_rate.appendChild(rate_dot2);
    //Rs
    let card_rs=document.createElement("div");
    card_rs.innerHTML=e.rate;
    card_rate.appendChild(card_rs);
    let offer=document.createElement("div");
    offer.classList.add("offer-del");
    fod_card.appendChild(offer);
    let icon2=document.createElement("i");
    icon2.classList.add("fa");
    icon2.classList.add("fa-percent");
    offer.appendChild(icon2);
    let offer_text=document.createElement("span");
    offer_text.innerHTML=e.offers;
    offer.appendChild(offer_text);
    //add the subract
    let add=document.createElement("div");
    add.classList.add("add-btn");
    fod_card.appendChild(add);
    let btn_add=document.createElement("button");
    btn_add.innerText="+";
    add.appendChild(btn_add);

    let btn_text=document.createElement("span");
    btn_text.innerText="0";
    btn_text.value="0";
    add.appendChild(btn_text);
    
    let btn_sub=document.createElement("button");
    btn_sub.innerText="-";
    add.appendChild(btn_sub);

    btn_add.addEventListener("click",function(){
        ++btn_text.value;
        btn_text.innerText=btn_text.value;
    })
    btn_sub.addEventListener("click",function(){
        if(btn_text.innerText>0){
            --btn_text.value;
            btn_text.innerText=btn_text.value;
        }
    })

   /* 
    btn_quanty=parseInt(document.getElementById(e.id).value);
    btn_add.addEventListener("click",()=>{
       btn_quanty++;
        document.getElementById(e.id).innerHTML=btn_quanty;
    })
    btn_sub.addEventListener("click",()=>{
        if(btn_quanty>1)
        {
        btn_quanty--;
         document.getElementById(e.id).innerHTML=btn_quanty;
        }
     })
     */
})
