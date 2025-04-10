// Create the object with the specified attributes
const roomDimensions = {
    width: 50,
    length: 100,
    // Method to calculate the area
    getArea: function() {
        return this.width * this.length;
    }
};

// Bind the getArea method to the roomDimensions object
const boundGetArea = roomDimensions.getArea.bind(roomDimensions);

console.log(boundGetArea());  // Output: 5000
