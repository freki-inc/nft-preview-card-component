import equilibrium from "D:/dev/FM/nft-preview-card-component/src/assets/images/image-equilibrium.jpg";
import avatar from "D:/dev/FM/nft-preview-card-component/src/assets/images/image-avatar.png";

import view from "D:/dev/FM/nft-preview-card-component/src/assets/images/icon-view.svg";
import ethereum from "D:/dev/FM/nft-preview-card-component/src/assets/images/icon-ethereum.svg";
import clock from "D:/dev/FM/nft-preview-card-component/src/assets/images/icon-clock.svg";



export const Card = () => {
    return (
        <section>
            <div className="card-wrapper">
                <div className="image-wrapper">
                    <img src={view} alt="view" width={48} height={48} aria-hidden="true" />
                    <img src={equilibrium} alt="equilibrium" width={604} height={604} />
                </div>
                <h1>Equilibrium #3429</h1>
                <p>Our Equilibrium collection promotes balance and calm.</p>
                <div>
                    <p><span><img src={ethereum} alt="ethereum" width={48} height={48} aria-hidden="true" /></span>0.041 ETH</p>
                    <p><span><img src={clock} alt="clock" width={48} height={48} aria-hidden="true" /></span>3 days left</p>
                </div>
                <br />
                <div>
                    <img src={avatar} alt="avatar of Jules Wyvern" width={132} height={132} />
                    <p>Creation of Jules Wyvern</p>
                </div>
            </div>
        </section>
    )
}

{/* Created by willemwebdev.com */}