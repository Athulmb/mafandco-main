import React, { useEffect, useRef, useState } from 'react';
import { Star, Plus, X } from 'lucide-react';

export default function ReviewSection() {
  const scrollContainerRef1 = useRef(null);
  const scrollContainerRef2 = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    rating: 5,
    text: ''
  });
  
  const reviews = [
    {
      id: 1,
      name: "Ricardo P. Winslow",
      role: "Founder",
      rating: 4.9,
      text: "Working with OnePack was a game-changer. Their attention to detail and innovative design approach helped us create a brand identity that truly resonates.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"
    },
    {
      id: 2,
      name: "Carlos E. Ashcroft",
      role: "Founder",
      rating: 4.9,
      text: "Working with OnePack was a game-changer. Their attention to detail and innovative design approach helped us create a brand identity that truly resonates.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
    },
    {
      id: 3,
      name: "Carlos Ashcroft",
      role: "Founder",
      rating: 4.9,
      text: "Working with OnePack was a game-changer. Their attention to detail and innovative design approach helped us create a brand identity that truly resonates.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces"
    },
    {
      id: 4,
      name: "Ricardo P",
      role: "Founder",
      rating: 4.9,
      text: "Working with OnePack was a game-changer. Their attention to detail and innovative design approach helped us create a brand identity that truly resonates.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"
    },
    {
      id: 5,
      name: "Ashcroft",
      role: "Founder",
      rating: 4.9,
      text: "Working with OnePack was a game-changer. Their attention to detail and innovative design approach helped us create a brand identity that truly resonates.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
    },
    {
      id: 6,
      name: "Carlos E.",
      role: "Founder",
      rating: 4.9,
      text: "Working with OnePack was a game-changer. Their attention to detail and innovative design approach helped us create a brand identity that truly resonates.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces"
    },
    {
      id: 7,
      name: "Extra User",
      role: "Founder",
      rating: 4.8,
      text: "This review will not be shown because only 6 reviews are displayed.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
    }
  ];

  const hasMoreThan6 = reviews.length > 6;
  const displayReviews = hasMoreThan6 ? [...reviews, ...reviews] : reviews;
  
  useEffect(() => {
    if (!hasMoreThan6 || !scrollContainerRef1.current) return;
    
    const scrollContainer = scrollContainerRef1.current;
    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    
    const animate = () => {
      scrollPosition += scrollSpeed;
      const cardWidth = 400;
      const resetPoint = reviews.length * cardWidth;
      
      if (scrollPosition >= resetPoint) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [hasMoreThan6, reviews.length]);

  useEffect(() => {
    if (!hasMoreThan6 || !scrollContainerRef2.current) return;
    
    const scrollContainer = scrollContainerRef2.current;
    let animationId;
    const cardWidth = 400;
    const maxScroll = reviews.length * cardWidth;
    let scrollPosition = maxScroll;
    const scrollSpeed = 0.5;
    
    scrollContainer.scrollLeft = scrollPosition;
    
    const animate = () => {
      scrollPosition -= scrollSpeed;
      if (scrollPosition <= 0) scrollPosition = maxScroll;
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [hasMoreThan6, reviews.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.role || !formData.text) {
      alert('Please fill in all fields');
      return;
    }
    console.log('New Review:', formData);
    alert('Review submitted successfully!');
    setIsModalOpen(false);
    setFormData({ name: '', role: '', rating: 5, text: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const ReviewCard = ({ review }) => (
    <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 min-h-[280px] sm:min-h-[320px] flex flex-col justify-between flex-shrink-0 w-[280px] sm:w-[340px] md:w-[450px]">
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
        "{review.text}"
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <img 
            src={review.avatar}
            alt={review.name}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900 text-xs sm:text-sm">{review.name}</h3>
            <p className="text-gray-500 text-xs">{review.role}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-xs sm:text-sm font-semibold text-gray-900">{review.rating}/5</span>
          <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-amber-50 px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-14">
      <div className="max-w-full mx-auto">
        <div className="mb-8 sm:mb-12">
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
                    <p className="text-sm sm:text-base text-gray-600 whitespace-nowrap">
                        User Review
                    </p>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-6 sm:py-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Happy Users Journey &<br />Feedbacks Here.
            </h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-fit"
            >
              <Plus className="w-5 h-5" />
              <span className="font-semibold text-sm sm:text-base">Add Review</span>
            </button>
          </div>
        </div>

        {hasMoreThan6 ? (
          <div className="space-y-4 sm:space-y-6">
            <div className="overflow-hidden">
              <div ref={scrollContainerRef1} className="flex gap-4 sm:gap-6 overflow-x-hidden" style={{ scrollBehavior: 'auto' }}>
                {displayReviews.map((review, index) => (
                  <ReviewCard key={`row1-${review.id}-${index}`} review={review} />
                ))}
              </div>
            </div>
            <div className="overflow-hidden">
              <div ref={scrollContainerRef2} className="flex gap-4 sm:gap-6 overflow-x-hidden" style={{ scrollBehavior: 'auto' }}>
                {displayReviews.map((review, index) => (
                  <ReviewCard key={`row2-${review.id}-${index}`} review={review} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Add Your Review</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Role *</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all outline-none"
                  placeholder="e.g., Founder, CEO, Manager"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Rating *</label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    name="rating"
                    min="1"
                    max="5"
                    step="0.1"
                    value={formData.rating}
                    onChange={handleChange}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                  />
                  <div className="flex items-center gap-1 min-w-[70px]">
                    <span className="text-lg font-bold text-gray-900">{formData.rating}</span>
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Review *</label>
                <textarea
                  name="text"
                  value={formData.text}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none outline-none"
                  placeholder="Share your experience with us..."
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex-1 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
                >
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}