

export function VideoSection({ src, thumbnail }: { src: string, thumbnail: string | undefined }) {
    return (
    <section className="py-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-1">
            <h2 className="text-3xl font-serif mb-4">Video</h2>
          </div>
          
          <div className="relative aspect-video w-full max-w-4xl mx-auto">
            <video 
              className="w-full h-full"
              controls
              preload="metadata"
              poster={thumbnail}
              playsInline
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    );
  }