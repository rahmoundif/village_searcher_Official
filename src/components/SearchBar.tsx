export const SearchBar = () => {
    return (
        <div>
            <form>
                <div className="border-2 rounded-2xl bg">
                <input type="search" id="mySearch" name="search" placeholder="Location"/>
                <button>Search</button>
                </div>
            </form>
        </div>
    )
    }