const { Z_NO_FLUSH } = require('zlib');
const { Review } = require('../models');

const reviewData = [
    {
        reviewSubject: "Love them",
        reviewBody: "Awesome..my pup loves all the staff!  Great service and loving care!",
        reviewRating: 4,
        user_id: 1,
        company_id: 2
    },
    {
        reviewSubject: "Professional and quality",
        reviewBody: "I recently got my very first dog and brought my female bluetick coonhound to see Jocelyn and my dog loved coming every day. She would go in beyond excited to start her fun day. Training is awesome and she came back a completely different dog. The whole staff at the barking dog does such a great job and they are all so friendly and take great care of my dog! Going to be going to this place for a very long time. Highly recommend!",
        reviewRating: 4,
        user_id: 1,
        company_id: 2
    },
    {
        reviewSubject: "Great Staff",
        reviewBody: "We worked with Jocelyn and her training package and had excellent results! We are a very busy family and this program was designed for us! Having the ability to drop Rosie off to be trained during the days, followed by two one on one training consultations at whatever times we could make work was perfect! She provided the initial leg work as well as a very specific direction/training to follow at home. It is exactly what our family was looking for!",
        reviewRating: 5,
        user_id: 1,
        company_id: 2
    },
    {
        reviewSubject: "Our Dog love it here",
        reviewBody: "Our dog loves going here. We get helpful reports every days he goes. He's an energetic pup who likes to rumble and although smaller they've placed with bigger dogs.  This actually has helped him at home. The staff are way more pleasant and trained than at Gail Fishers All Day Dogs other than one employee named Sarah. At the Barking Dog they all can do each job.  And they know where to hold the leash...know to turn their back if the dogs jump...and do not reward negative behavior! And the price is so reasonable! Thank you for taking care of Scooby for us!",
        reviewRating: 4,
        user_id: 1,
        company_id: 2
    },
    {
        reviewSubject: "He loves the treats",
        reviewBody: "You can truly tell that they genuinely care about you and your pup!… I LOVE having someone checking in on us regularly as well. The atmosphere of the Bark Eats fam is all around so positive, warm, and loving and I feel like I've gotten to know our team personally which is wonderful!",
        reviewRating: 5,
        user_id: 1,
        company_id: 37
    },
    {
        reviewSubject: "Great Treats",
        reviewBody: "Pre-portioned meals make my life so much easier. I constantly forget I need to buy dog food and then I have to run to the store at the last minute. My pups love their food and I love that support is available if we need to switch something up or have nutrition questions.",
        reviewRating: 4,
        user_id: 1,
        company_id: 37
    },
    {
        reviewSubject: "They cater to his special needs",
        reviewBody: "My dog has dietary restrictions and Bark Eats caters to that, while also making sure he has the right vitamins and nutrients that I know nothing about.",
        reviewRating: 4,
        user_id: 1,
        company_id: 37
    },
    {
        reviewSubject: "Great service",
        reviewBody: "he whole team are fantastic. They love my dogs and my dogs know that. Customer service is great, the quality of the medical service is great, and they don't try to get your money by doing unnecessary test. Since we started coming here a month ago, everytime I open the door of my car my dogs jump in and I have a difficult time getting them out.",
        reviewRating: 5,
        user_id: 1,
        company_id: 22
    },
    {
        reviewSubject: "Cool items",
        reviewBody: "Cute little bakery for dogs! It was neat to see tacos,pizzas, etc for our furry friends all dog safe too. They have a wash area and small retail in there too",
        reviewRating: 5,
        user_id: 1,
        company_id: 37
    },
    {
        reviewSubject: "Love them",
        reviewBody: "We bring our dog here because their health plan is awesome and allows us to get all the vet care we need at an affordable rate. The staff are great. Super happy",
        reviewRating: 4,
        user_id: 1,
        company_id: 22
    },
    {
        reviewSubject: "Great Docs",
        reviewBody: "The staff is friendly and polite. They take great care of my pets everytime we come. The doctors are so wonderful. They listen to you and will answer any questions you have. I highly recommend bringing your pets here.",
        reviewRating: 4,
        user_id: 1,
        company_id: 22
    },

];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;