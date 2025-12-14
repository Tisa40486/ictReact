import "bulma/css/bulma.min.css"

function header() {
    const title = "MyPlan";
    return (
        <>
            <section class="hero is-link">
                <div class="hero-body">
                    <p class="title" style={{textAlign:"center"}}>{title.toUpperCase()}</p>
                </div>
            </section>
        </> 
    )
}

export default header