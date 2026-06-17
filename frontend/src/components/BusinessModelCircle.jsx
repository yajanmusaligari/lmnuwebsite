import { motion } from 'framer-motion';

const BusinessModelCircle = () => {
  const categories = [
    { name: 'STRUCTURAL\nPRODUCTS', color: '#E8A8A0', angle: 0, icon: '🏗️' },
    { name: 'FINISHING\nPRODUCTS', color: '#F5D4A8', angle: 90, icon: '🎨' },
    { name: 'LIFESTYLE\nPRODUCTS', color: '#B8E6C9', angle: 180, icon: '🏠' },
    { name: 'OTHERS', color: '#9ECFE3', angle: 270, icon: '📦' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const rotateVariants = {
    animate: {
      rotate: 360,
      transition: { duration: 20, repeat: Infinity, ease: 'linear' },
    },
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative w-full aspect-square flex items-center justify-center">
        {/* Rotating outer ring */}
        <motion.div
          variants={rotateVariants}
          animate="animate"
          className="absolute inset-0"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="absolute w-16 h-16 rounded-full flex items-center justify-center text-2xl"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${cat.angle}deg) translateY(-120px) rotate(-${cat.angle}deg)`,
              }}
            >
              <div className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                {cat.icon}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Center circle with animated pulse */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            animate={{
              boxShadow: ['0 0 0 0 rgba(201, 162, 75, 0.4)', '0 0 0 20px rgba(201, 162, 75, 0)'],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative w-32 h-32 rounded-full bg-[#0A0A0A] flex items-center justify-center"
          >
            <div className="text-center">
              <p className="text-white font-bold text-sm uppercase tracking-wider">Project</p>
              <p className="text-[#C9A24B] font-bold text-lg">Lifecycle</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Category labels with animation */}
        {categories.map((cat, idx) => (
          <motion.div
            key={`label-${idx}`}
            variants={itemVariants}
            className="absolute text-center text-xs font-bold uppercase tracking-wider pointer-events-none"
            style={{
              width: '80px',
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotate(${cat.angle}deg) translateY(-200px)`,
              color: cat.color,
            }}
          >
            <div className="text-[10px]">{cat.name}</div>
          </motion.div>
        ))}

        {/* Connecting arrows */}
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: 'none' }}
        >
          {categories.map((cat, idx) => {
            const nextAngle = (cat.angle + 90) % 360;
            const startRadius = 95;
            const endRadius = 105;

            const startX = 50 + startRadius * Math.cos((cat.angle - 90) * (Math.PI / 180));
            const startY = 50 + startRadius * Math.sin((cat.angle - 90) * (Math.PI / 180));
            const endX = 50 + endRadius * Math.cos((nextAngle - 90) * (Math.PI / 180));
            const endY = 50 + endRadius * Math.sin((nextAngle - 90) * (Math.PI / 180));

            return (
              <motion.g key={`arrow-${idx}`}>
                <defs>
                  <marker
                    id={`arrowhead-${idx}`}
                    markerWidth="10"
                    markerHeight="10"
                    refX="9"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3, 0 6" fill="#C9A24B" />
                  </marker>
                </defs>
                <motion.path
                  d={`M ${startX}% ${startY}% Q 50% 50%, ${endX}% ${endY}%`}
                  stroke="#C9A24B"
                  strokeWidth="1.5"
                  fill="none"
                  markerEnd={`url(#arrowhead-${idx})`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 + idx * 0.1 }}
                  strokeDasharray="5,5"
                />
              </motion.g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default BusinessModelCircle;
