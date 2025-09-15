import Image from "next/image";

const GridImages = [
  {
    src: "/gridImage.svg",
    head: "Image",
    text: "Generate images with custom styles in Flux and Ideogram.",
    bg: "bg-gradient-to-r from-sky-200 to-blue-700",
    isNew: true,
  },
  {
    src: "/gridvideo.svg",
    head: "Video",
    text: "Generate videos with Haluo, Pica, Runway, Luna and more.",
    bg: "bg-yellow-400",
    isNew: false,
  },
  {
    src: "/gridstylus.svg",
    head: "Realtime",
    text: "Realtime AI rendering on a canvas, Instant feedback loops.",
    bg: "bg-sky-500",
    isNew: false,
  },
  {
    src: "/gridEnhancer.svg",
    head: "Enhancer",
    text: "Upscale and enhance images and videos up to 22k.",
    bg: "bg-black",
    isNew: true,
  },
  {
    src: "/gridEdit.svg",
    head: "Edit",
    text: "Add objects, change style, or expand photos and generations.",
    bg: "bg-purple-500",
    isNew: true,
  },
  {
    src: "/gridLipsync.svg",
    head: "Video Lipsync",
    text: "Lip sync any video to any audio.",
    bg: "bg-black",
    isNew: true,
  },
  {
    src: "/gridMotion.svg",
    head: "Motion Transfer",
    text: "Transfer motion to images and animate characters.",
    bg: "bg-black",
    isNew: true,
  },
  {
    src: "/train.svg",
    head: "Train",
    text: "Teach Krea to replicate your style, products or characters.",
    bg: "bg-gray-300",
    isNew: false,
  },
];

function Grid() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Generate</h1>
      </div>

      <div className="grid md:grid-cols-4 gap-1">
        {GridImages.map((item, index) => (
          <div
            key={index}
            className="flex items-center px-3 py-1 gap-3 justify-between"
          >
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl ${item.bg}`}>
                <Image src={item.src} width={22} height={22} alt={item.head} />
              </div>

              <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <h1 className="text-xs font-bold">{item.head}</h1>
                  {item.isNew && (
                    <p className="text-[10px] bg-blue-600 text-white rounded px-1">
                      New
                    </p>
                  )}
                </div>
                <p className="text-xs tracking-tight text-gray-600">
                  {item.text}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-gray-300 px-4 py-1">
              <a className="text-xs font-bold tracking-tighter" href="#">
                Open
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
