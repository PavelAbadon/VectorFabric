export default function Home (){
    return(
        <>
        <div className="container">
            <h2 className="section-title">Latest Vectors</h2>
            <div className="grid">
                <div className="card"><img src="https://via.placeholder.com/200"/></div>
                <div className="card"><img src="https://via.placeholder.com/200"/></div>
                <div className="card"><img src="https://via.placeholder.com/200"/></div>
            </div>

            <h2 className="section-title">Trending Vectors</h2>
            <div className="grid">
                <div className="card"><img src="https://via.placeholder.com/200"/></div>
                <div className="card"><img src="https://via.placeholder.com/200"/></div>
                <div className="card"><img src="https://via.placeholder.com/200"/></div>
            </div>

            <h2 className="section-title">Browse by Category</h2>
            <div className="slider">
                <button>&lt;</button>
                <div className="categories">
                <div className="category">Nature</div>
                <div className="category">Animals</div>
                <div className="category">Business</div>
                <div className="category">Technology</div>
                </div>
                <button>&gt;</button>
            </div>
        </div>
        </>
    )
}