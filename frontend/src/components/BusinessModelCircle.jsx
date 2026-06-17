import { motion } from 'framer-motion';
import { Warehouse, Hammer, Sofa, Package } from 'lucide-react';

const BusinessModelCircle = () => {
  const categories = [
    { 
      name: 'STRUCTURAL\nPRODUCTS', 
      color: '#E8A8A0', 
      angle: 0, 
      icon: Warehouse,
      details: ['Concrete', 'Aggregates', 'Steel']
    },
    { 
      name: 'FINISHING\nPRODUCTS', 
      color: '#F5D4A8', 
      angle: 90, 
      icon: Hammer,
      details: ['AAC Blocks', 'Pipes', 'Tiles']
    },
    { 
      name: 'LIFESTYLE\nPRODUCTS', 
      color: '#B8E6C9', 
      angle: 180, 
      icon: Sofa,
      details: ['Kitchen', 'Lighting', 'Appliances']
    },
    { 
      name: 'OTHERS', 
      color: '#9ECFE3', 
      angle: 270, 
      icon: Package,
      details: ['Rental', 'Chemicals', 'Services']
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const rotateVariants = {
    animate: {
      rotate: 360,
      transition: { duration: 25, repeat: Infinity, ease: 'linear' },
    },
  };

  const IconWrapper = ({ Icon, ...props }) => {
    return <Icon {...props} />;
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="relative w-full aspect-square flex items-center justify-center">
        {/* Rotating outer ring */}
        <motion.div
          variants={rotateVariants}
          animate="animate"
          className="absolute inset-0"
        >
          {categories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) rotate(${cat.angle}deg) translateY(-160px) rotate(-${cat.angle}deg)`,
                }}
              >
                <motion.div 
                  className="w-28 h-28 rounded-full bg-white border-4 border-gray-300 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                  whileHover={{ scale: 1.15, borderColor: cat.color }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <IconComponent 
                      size={56} 
                      className="mx-auto mb-2 transition-colors group-hover:text-[#C9A24B]"
                      style={{ color: cat.color }}
                      strokeWidth={1.5}
                    />
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-700 group-hover:text-gray-900">
                      {cat.name.split('\n')[0]}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Center circle with animated pulse */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(201, 162, 75, 0.5)',
                '0 0 0 30px rgba(201, 162, 75, 0.1)',
                '0 0 0 0 rgba(201, 162, 75, 0)',
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="relative w-40 h-40 rounded-full bg-gradient-to-br from-[#0A0A0A] to-[#1a1a1a] flex items-center justify-center border-4 border-[#C9A24B]/50"
          >
            <div className="text-center">
              <motion.p 
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-[#C9A24B] font-bold text-sm uppercase tracking-[0.2em] mb-1"
              >
                Project
              </motion.p>
              <p className="text-white font-black text-3xl uppercase tracking-[0.15em]">Lifecycle</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Category labels with better typography */}
        {categories.map((cat, idx) => (
          <motion.div
            key={`label-${idx}`}
            variants={itemVariants}
            className="absolute text-center pointer-events-none"
            style={{
              width: '100px',
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotate(${cat.angle}deg) translateY(-260px)`,
            }}
          >
            <motion.div 
              className="text-xs font-black uppercase tracking-[0.15em] transition-colors"
              style={{ color: cat.color }}
              whileHover={{ scale: 1.1 }}
            >
              {cat.name}
            </motion.div>
          </motion.div>
        ))}

        {/* Animated connecting arrows */}
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: 'none' }}
        >
          {categories.map((cat, idx) => {
            const startRadius = 120;
            const endRadius = 130;

            const startX = 50 + startRadius * Math.cos((cat.angle - 90) * (Math.PI / 180));
            const startY = 50 + startRadius * Math.sin((cat.angle - 90) * (Math.PI / 180));
            const endX = 50 + endRadius * Math.cos((cat.angle - 90) * (Math.PI / 180));
            const endY = 50 + endRadius * Math.sin((cat.angle - 90) * (Math.PI / 180));

            return (
              <motion.g key={`arrow-${idx}`}>
                <defs>
                  <marker
                    id={`arrowhead-${idx}`}
                    markerWidth="12"
                    markerHeight="12"
                    refX="10"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 12 3, 0 6" fill="#C9A24B" />
                  </marker>
                </defs>
                <motion.path
                  d={`M ${startX}% ${startY}% L ${endX}% ${endY}%`}
                  stroke="#C9A24B"
                  strokeWidth="2.5"
                  fill="none"
                  markerEnd={`url(#arrowhead-${idx})`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.5 + idx * 0.15 }}
                  strokeDasharray="8,4"
                />
              </motion.g>
            );
          })}
        </svg>
      </div>

      {/* Product details cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
        {categories.map((cat, idx) => (
          <motion.div
            key={`card-${idx}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-6 border-2 border-gray-200 hover:border-[#C9A24B] hover:shadow-lg transition-all duration-300 bg-white group cursor-pointer"
          >
            <motion.div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors"
              style={{ backgroundColor: cat.color + '20', color: cat.color }}
              whileHover={{ scale: 1.15, backgroundColor: cat.color + '40' }}
            >
              {(() => {
                const IconComponent = cat.icon;
                return <IconComponent size={24} strokeWidth={1.5} />;
              })()}
            </motion.div>
            <h3 className="font-bold text-sm uppercase tracking-[0.1em] text-[#0A0A0A] mb-3 group-hover:text-[#C9A24B] transition-colors">
              {cat.name.replace('\n', ' ')}
            </h3>
            <ul className="space-y-2">
              {cat.details.map((detail, i) => (
                <motion.li 
                  key={i} 
                  className="text-xs text-gray-600 font-light flex items-center"
                  whileHover={{ x: 4 }}
                >
                  <span className="w-1.5 h-1.5 bg-[#C9A24B] rounded-full mr-2 flex-shrink-0" />
                  {detail}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BusinessModelCircle;
