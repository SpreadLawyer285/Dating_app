const Navbar = () => {
  return (
    <nav className="flex justify-between flex-row bg-white border-b border-b-gray-300 px-10 py-5">
      <img src="" alt="" id="nav-logo"/>
      <div id="nav-items" className="flex gap-10">
        <a href="/messages" id="items-messages">Messages</a>
        <a href="/explore" id="items-profile">Explore</a>
      </div>
    </nav>
  )
}

export default Navbar