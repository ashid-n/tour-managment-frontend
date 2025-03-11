const calculateAvgRating = (reviews) => {
  if (!reviews || reviews.length === 0) {
    return { totalRating: 0, avgRating: 0 };
  }

  const totalRating = reviews.reduce((acc, item) => acc + item.rating, 0);
  const avgRating = (totalRating / reviews.length).toFixed(1); // Ensures one decimal place

  return {
    totalRating,
    avgRating: parseFloat(avgRating), // Converts string back to number
  };
};

export default calculateAvgRating