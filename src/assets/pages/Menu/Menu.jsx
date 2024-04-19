function Menu() {
    const currentDate = new Date();
    const weekDay = currentDate.toLocaleString('fr-FR', { weekday: 'long' });
  
    return (
        <div>
            <h1 style={{textTransform: "capitalize"}}>{weekDay}</h1>
        </div>
    );
}

export default Menu;