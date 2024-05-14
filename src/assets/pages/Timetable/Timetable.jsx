import './Timetable.scss'

export default function Timetable() {
    const currentDate = new Date();
    const weekDay = currentDate.toLocaleString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' });
  
    return (
        <div>
            <nav>
                <a className={'arrow'} href={'#'}>&#8249;</a>
                <h1 style={{textTransform: "capitalize", textAlign: "center", fontSize: "24px"}}>{weekDay}</h1>
                <a className={'arrow'} href={'#'}>&#8250;</a>
            </nav>
            <div id={'table'}>
                <div className={'lesson'}>
                    <header>
                        <p className={'lesson-name'}>Math&eacute;matiques</p>

                        <div className={'lesson-time'}>
                            <p className={'beginning-hour'}>08:10</p>
                            <p className={'end-hour'}>09:05</p>
                        </div>
                    </header>

                    <div className={'lesson-infos'}>
                        <p className={'room'}>D105</p>
                        <p className={'teacher'}>M. Dupont</p>
                        <p className={'time'}>55 min</p>
                        <div className={'status cancelled'}>
                            <p className={'status-text'}>Changement de salle</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
