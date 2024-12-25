const NavBar = () => {
    return (
        <div className="flex flex-col p-8 mt-12 mb-12 border border-black w-72">
            <h1>Profile Picture</h1>
            <p>Name</p>
            <p>Location</p>
            <p>Bio</p>
            <p>Blog</p>
            <ul className="flex flex-col mt-12 gap-4">
                <li>Repos</li>
                <li>Starred Repos</li>
                <li>Gists</li>
                <li>Events</li>
                <li>Organizations</li>
                <li>Followers</li>
                <li>Following</li>
            </ul>
        </div>
    );
};

export default NavBar;
