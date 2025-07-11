const ExperienceTimeline = ({ data: experiences = [] }) => {
  const renderBadge = (badge) => {
    const { type, text, icon, url } = badge;

    const baseClasses =
      "inline-flex items-center px-3 py-1.5 rounded-xl text-sm font-medium transition-colors";
    const typeClasses = {
      plain: "bg-[#B2CD9C] text-black hover:bg-[#B2CD9C] ta-ta",
      color: "bg-purple-900 text-white hover:bg-purple-800",
    };

    return (
      <a
        target={url ? "_blank" : "_self"}
        href={url || "#"}
        className={`${baseClasses} ${typeClasses[type] || typeClasses.github}`}
      >
        {icon && <span className="mr-1.5">{icon}</span>}
        {text}
      </a>
    );
  };

  return (
    <div className="relative">
      {/* Vertical dashed line */}
      <div className="absolute left-8 top-0 bottom-0 w-px border-l border-dashed border-neutral-400"></div>

      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative flex items-start mb-8 last:mb-0 ${index !== experiences.length - 1 ? "border-b border-dashed border-neutral-400" : ""} pb-5`}
        >
          {/* Logo/Icon */}
          <div className="flex-shrink-0 relative z-10">
            {experience.logo ? (
              <img
                src={experience.logo}
                alt={`${experience.title} logo`}
                className="size-16 rounded-full bg-[#ECD2CB] border border-[#DCC2BB] object-contain p-3 ta-ta"
              />
            ) : (
              <div className="size-16 rounded-full bg-[#ECD2CB] border border-[#DCC2BB] flex items-center justify-center">
                <span className="text-2xl text-neutral-700">
                  {experience.organization?.charAt(0) ||
                    experience.title?.charAt(0) ||
                    "E"}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 ml-6 font-[poppins]">
            {/* Date */}
            <div className="text-base text-neutral-700 mb-1">
              {experience.date}
            </div>

            {/* Title */}
            <h3 className="text-2xl text-neutral-950 mb-1">
              {experience.title}
            </h3>

            {/* Status */}
            {experience.status && (
              <div className="text-base text-neutral-700 mb-3">
                {experience.status}
              </div>
            )}

            {/* Description */}
            <p
              className="text-neutral-800 text-base leading-relaxed mb-4"
              dangerouslySetInnerHTML={{ __html: experience.description }}
            />

            {/* Badges */}
            {experience.badges && experience.badges.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {experience.badges.map((badge, badgeIndex) => (
                  <div key={badgeIndex}>{renderBadge(badge)}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
