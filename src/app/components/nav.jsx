export default function Nav(){
    return (
        <nav className="fixed left-0 top-0 h-full bg-transparent"> {/* Transparent background */}
            <div className="flex-col w-32 h-3/4 text-zinc-300 justify-center text-center mt-90">
                <p className="text-3xl hover:text-pink-500 cursor-pointer">Bio</p>
                <img></img>
                <p className="text-3xl hover:text-pink-500 cursor-pointer">Musics</p>
                <img></img>
                <p className="text-3xl hover:text-pink-500 cursor-pointer">Links</p>
            </div>
        </nav>
    )
}