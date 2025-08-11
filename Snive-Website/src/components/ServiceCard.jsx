const ServiceCard = ({ title, tags, iconUrl, bg }) => {
        return (
            <div
                className={`${bgColors[bg]} rounded-2xl p-8 text-white flex flex-col justify-between h-[320px] shadow-lg`}
            >
                <div>
                    {/* Icon */}
                    <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-lg">
                        <img src={iconUrl} alt={title} className="w-10 h-10 object-contain" />
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-semibold leading-tight mb-3">{title}</h2>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="bg-white text-black text-sm px-3 py-1 rounded"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Button */}
                <button className="mt-4 px-5 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-sm font-semibold hover:opacity-90 transition-all">
                    KNOW MORE →
                </button>
            </div>
        );
    };