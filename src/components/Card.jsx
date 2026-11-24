import equilibrium from "D:/dev/FM/nft-preview-card-component/src/assets/images/image-equilibrium.jpg";
import avatar from "D:/dev/FM/nft-preview-card-component/src/assets/images/image-avatar.png";
import view from "D:/dev/FM/nft-preview-card-component/src/assets/images/icon-view.svg";
import ethereum from "D:/dev/FM/nft-preview-card-component/src/assets/images/icon-ethereum.svg";
import clock from "D:/dev/FM/nft-preview-card-component/src/assets/images/icon-clock.svg";

export const Card = () => {

    return (
        <section>
            <div className="card-wrapper">
                <div className="card-content">

                    <div className="image-wrapper">
                        <div className="view-overlay">
                            <img className="view-icon" src={view} alt="" width={48} height={48} aria-hidden="true" />
                        </div>
                        <div>
                            <img className="image-card" src={equilibrium} alt="" width={604} height={604} aria-hidden="true" draggable={false} />
                        </div>
                    </div>

                    <div className="text-container">
                        <h2>Equilibrium #3429</h2>
                        <p className="description">Our Equilibrium collection promotes balance and calm.</p>
                        <div className="info-container">
                            <p className="price-info"><img className="img-ethereum" src={ethereum} alt="" width={48} height={48} aria-hidden="true" />0.041 ETH</p>
                            <p className="time-info"><img className="img-time" src={clock} alt="" width={48} height={48} aria-hidden="true" />3 days left</p>
                        </div>
                    </div>

                    <div className="rectangle"></div>

                    <div className="creator-info">
                        <img className="avatar" src={avatar} alt="avatar of Jules Wyvern" width={132} height={132} />
                        <p className="creator-description">Creation of<span className="creator-name">Jules Wyvern</span></p>
                    </div>

                </div>
            </div>

        </section>
    )
}

{/* Created by willemwebdev.com */}
