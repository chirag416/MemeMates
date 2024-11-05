import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, MessageCircleHeart, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FeatureCard = ({ icon: Icon, title, description, bgClass }) => (
  <motion.div
    className={`p-6 rounded-xl shadow-lg ${bgClass} relative overflow-hidden`} 
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon className="w-8 h-8 text-pink-500 mb-3" />
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <div className="absolute inset-0 bg-opacity-25 z-0"></div>
  </motion.div>
);

const NotLoggedIn = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block"
              animate={{ 
                rotate: [0, 10, -10, 10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Heart className="w-16 h-16 text-pink-500 mx-auto mb-6" />
            </motion.div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Find Your Perfect 
              <span className="text-pink-500 relative">
                <span className="relative inline-block mx-3">
                  Meme Mates
                  <motion.div
                    className="absolute -top-6 -right-8"
                    animate={{ 
                      rotate: [0, 20, -20, 20, 0],
                      scale: [1, 1.2, 1, 1.2, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                </span>
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Where meme lovers unite! Share laughs, make connections, and find your perfect match through the universal language of memes.
            </p>
            
            <motion.button
              className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-pink-600 transition-colors"
              onClick={() => navigate('/register')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Fun
            </motion.button>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <FeatureCard 
              icon={MessageCircleHeart}
              title="Match Through Memes"
              description="Find your perfect match based on your meme preferences and sense of humor."
              bgClass="bg-pink-200" 
            />
            <FeatureCard 
              icon={Users}
              title="Connect with Others"
              description="Join a community of meme enthusiasts and build meaningful connections."
              bgClass="bg-purple-200" 
            />
            <FeatureCard 
              icon={Heart}
              title="Share the Love"
              description="Express yourself through memes and spread joy in our unique dating community."
              bgClass="bg-blue-200" 
            />
          </div>

          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gray-600 mb-4">Already spreading joy with us?</p>
            <button
              className="text-pink-500 font-semibold hover:text-pink-600 transition-colors"
              onClick={() => navigate('/login')}
            >
              Log in to continue the fun →
            </button>
          </motion.div>
        </div>
      </div>

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
};

export default NotLoggedIn;
