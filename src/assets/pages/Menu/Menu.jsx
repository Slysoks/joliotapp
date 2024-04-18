function Menu() {
    const currentDate = new Date();
    const jourSemaine = currentDate.toLocaleString('fr-FR', { weekday: 'long' });
  
    return (
        <div>
            <h1>{jourSemaine}</h1>
        </div>
    );
}

export default Menu;