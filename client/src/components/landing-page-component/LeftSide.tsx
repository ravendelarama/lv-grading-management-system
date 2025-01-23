const LandingLeftSide: React.FC = () => {
  return (
    <div className="hidden lg:block lg:w-3/5 relative">
      <div className="absolute inset-0 bg-blue-950/90 z-10" />
      <img
        src="https://media.licdn.com/dms/image/v2/C561BAQG8uLmppb8XOQ/company-background_10000/company-background_10000/0/1643909212326/la_verdad_christian_school_apalit_pampanga_cover?e=2147483647&v=beta&t=X7z1A71Fi6rlYqx3RhwnTpFhBnG0ew8APxcJmFH-nV8"
        alt="La Verdad Christian College Entrance"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-8 left-8 flex items-center gap-3 z-20">
        <img
          src="https://res.cloudinary.com/dihmqs39z/image/upload/v1731654756/LV-Logo_gjbcpk.png"
          alt="LVCC GRMS Logo"
          className="w-12 h-12"
        />
        <h2 className="text-xl font-bold text-white">LVCC GRMS</h2>
      </div>
      <div className="absolute bottom-8 left-8 right-8 text-white/90 z-20">
        <p className="text-sm leading-relaxed">
          The La Verdad Christian College or LVCC is a private non-stock,
          non-sectarian educational institution established in Apalit, Pampanga,
          Philippines.
        </p>
      </div>
    </div>
  );
};

export default LandingLeftSide;
