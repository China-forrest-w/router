const Home = (props) => {
    return (
        <div>
            home
            <button onClick={() => props.history.push('/user')}>
                调到/User
            </button>
        </div>
    )
}
export default Home;