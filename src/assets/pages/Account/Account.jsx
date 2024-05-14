import '/src/open.scss'
import './Account.scss'
import packageJson from '/package.json'

export default function Account() {
    const queryParameters = new URLSearchParams(window.location.search);
    const loggedInBool = queryParameters.get('loggedIn');

    console.log('loggedInBool', loggedInBool === "1")

    const appVersion = packageJson.version

    return (
        <div className={'main-container'}>
            <main>
                {loggedInBool === "1" ? loggedIn() : notLoggedIn()}
            </main>
            <div className={'version'}>
                <p>Version: {appVersion}</p>
            </div>
        </div>
    );
}

function loggedIn() {
    return (
        <div className={'main-container'}>
            <h2>Logged in</h2>
            <h3>Vous êtes assez malin! ;)</h3>
            <br />
            <h3 style={{textAlign: 'center'}}>Mais le processus n&apos;est toujours pas fait, patience !</h3>
        </div>
    );
}

function notLoggedIn() {
    return (
        <div className={'main-container'}>
            <h2>Not logged in</h2>
            <h3>Le processus de connection arrive bientôt !</h3>
        </div>
    );
}
