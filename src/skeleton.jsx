


function CheckoutSkeleton(){

    return(
        <div className="checkout-skeleton">

            <div className="skeleton-tittle"></div>

             <div className="skeleton-label"></div>
            <div className="skeleton-input"></div>

             <div className="skeleton-label"></div>
              <div className="skeleton-input"></div>

               <div className="skeleton-label"></div>
                <div className="skeleton-input"></div>

                 <div className="skeleton-label"></div>
                  <div className="skeleton-input"></div>

                   <div className="skeleton-button"></div>

        </div>
    )
}

function MenuCardSkeleton(){
    return(
        <div className="menucard-skeleton">

            <div className="skeleton skeleton-image"></div>
            <div className="skeleton skeleton-name"></div>
            <div className="skeleton skeleton-button"></div>
            
        </div>
    )
}

export function Homeskeleton(){

    return(

    <div className="homeskeleton">
    <section className="heroskeleton">
       <div className="skeleton skeleton-hero-content"></div>
        <div className="skeleton skeleton-hero-text"></div>
         <div className="skeleton skeleton-hero-title"></div>
          <div className="skeleton skeleton-hero"></div>
        </section>


        <section className="home-midle-skeleton">

          <div className="skeleton skeleton-middle-title"></div>
            <div className="skeleton skeleton-middle-text"></div>

        </section>
    </div>
    )
}




 
export {CheckoutSkeleton, MenuCardSkeleton}