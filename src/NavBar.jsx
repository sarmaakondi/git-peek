const NavBar = () => {
    return (
        <div className="flex flex-col p-8 mt-24 mb-12 w-1/2 h-[80%] rounded-l-[48px] z-10 bg-[#3d3c3c] text-white">
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
