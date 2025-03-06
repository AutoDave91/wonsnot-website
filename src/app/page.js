export default function Home() {
  return (
    <div className="h-screen w-screen min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('/img/wonsnot_channel_art_2.png')] bg-cover bg-center">
      <main className="w-full h-full max-w-1200 relative">
        {/* <div className="absolute top-0 right-0 w-175 h-100 aspect-w-16 aspect-h-9"> */}
        {/* <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/videoseries?list=PLCuDv3oRKHKsJQxDZNsqt6oXmkjV8TLHv&amp;hl=en_US"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
        {/* Top-right YouTube Playlist */}
        <div className="absolute top-0 right-0 w-[300px] h-[169px] sm:w-[480px] sm:h-[270px]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/videoseries?list=PLCuDv3oRKHKsJQxDZNsqt6oXmkjV8TLHv&hl=en_US"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {/* </div> */}
        {/* <div className="absolute bottom-0 left-0 w-175 h-100 aspect-w-16 aspect-h-9"> */}
        {/* <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/playlist?list=PLCuDv3oRKHKvm0GwWi8oliIGvIlLN8dOX"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
        {/* Bottom-left YouTube Playlist */}
        <div className="absolute bottom-0 left-0 w-[300px] h-[169px] sm:w-[480px] sm:h-[270px]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/playlist?list=PLCuDv3oRKHKvm0GwWi8oliIGvIlLN8dOX"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {/* </div> */}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* Footer content */}
      </footer>
    </div>
  );
}
