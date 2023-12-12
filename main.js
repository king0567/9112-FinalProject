function getDaysUntilChristmas(){
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let christmasDay = 25
    let christmasMonth = 12

    let daysUntilChristmas = christmasDay - day
    let monthsUntilChristmas = christmasMonth - month

    if(monthsUntilChristmas === 0){
        console.log(`There are ${daysUntilChristmas} days until Christmas!`);
    }else{
        console.log(`There are ${monthsUntilChristmas} months and ${daysUntilChristmas} days until Christmas!`);
    }
    
};

getDaysUntilChristmas();