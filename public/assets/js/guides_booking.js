const guides = [
    {
        id: "G001",
        name: "Rajesh Kumar",
        nativePlace: "Delhi",
        languages: ["Hindi", "English", "Punjabi"],
        places: ["Delhi", "Agra", "Jaipur"],
        age: 32
    },
    {
        id: "G002",
        name: "Priya Sharma",
        nativePlace: "Mumbai",
        languages: ["Marathi", "Hindi", "English"],
        places: ["Mumbai", "Pune", "Aurangabad"],
        age: 28
    },
    {
        id: "G003",
        name: "Arun Nair",
        nativePlace: "Kochi",
        languages: ["Malayalam", "English", "Tamil"],
        places: ["Kochi", "Munnar", "Alleppey"],
        age: 35
    },
    {
        id: "G004",
        name: "Meera Reddy",
        nativePlace: "Hyderabad",
        languages: ["Telugu", "Hindi", "English"],
        places: ["Hyderabad", "Warangal", "Tirupati"],
        age: 30
    },
    {
        id: "G005",
        name: "Sanjay Patel",
        nativePlace: "Ahmedabad",
        languages: ["Gujarati", "Hindi", "English"],
        places: ["Ahmedabad", "Vadodara", "Dwarka"],
        age: 40
    },
    {
        id: "G006",
        name: "Anjali Das",
        nativePlace: "Kolkata",
        languages: ["Bengali", "Hindi", "English"],
        places: ["Kolkata", "Darjeeling", "Sundarbans"],
        age: 33
    },
    {
        id: "G007",
        name: "Vikram Singh",
        nativePlace: "Jaipur",
        languages: ["Hindi", "English", "Rajasthani"],
        places: ["Jaipur", "Udaipur", "Jodhpur"],
        age: 37
    },
    {
        id: "G008",
        name: "Lakshmi Iyer",
        nativePlace: "Chennai",
        languages: ["Tamil", "English", "Telugu"],
        places: ["Chennai", "Mahabalipuram", "Pondicherry"],
        age: 29
    },
    {
        id: "G009",
        name: "Arjun Menon",
        nativePlace: "Bengaluru",
        languages: ["Kannada", "English", "Hindi"],
        places: ["Bengaluru", "Mysore", "Hampi"],
        age: 31
    },
    {
        id: "G010",
        name: "Kavita Joshi",
        nativePlace: "Varanasi",
        languages: ["Hindi", "English", "Bhojpuri"],
        places: ["Varanasi", "Allahabad", "Lucknow"],
        age: 36
    },
    {
        id: "G011",
        name: "Siddharth Patel",
        nativePlace: "Surat",
        languages: ["Gujarati", "Hindi", "English"],
        places: ["Surat", "Vadodara", "Ahmedabad"],
        age: 33
    },
    {
        id: "G012",
        name: "Ananya Chatterjee",
        nativePlace: "Kolkata",
        languages: ["Bengali", "English", "Hindi"],
        places: ["Kolkata", "Digha", "Siliguri"],
        age: 27
    },
    {
        id: "G013",
        name: "Karthik Raman",
        nativePlace: "Coimbatore",
        languages: ["Tamil", "English", "Malayalam"],
        places: ["Coimbatore", "Ooty", "Kodaikanal"],
        age: 39
    },
    {
        id: "G014",
        name: "Neha Gupta",
        nativePlace: "Lucknow",
        languages: ["Hindi", "English", "Urdu"],
        places: ["Lucknow", "Kanpur", "Agra"],
        age: 31
    },
    {
        id: "G015",
        name: "Rahul Deshmukh",
        nativePlace: "Pune",
        languages: ["Marathi", "Hindi", "English"],
        places: ["Pune", "Lonavala", "Mahabaleshwar"],
        age: 34
    },
    {
        id: "G016",
        name: "Shreya Nair",
        nativePlace: "Thiruvananthapuram",
        languages: ["Malayalam", "English", "Tamil"],
        places: ["Thiruvananthapuram", "Kovalam", "Varkala"],
        age: 29
    },
    {
        id: "G017",
        name: "Amit Saxena",
        nativePlace: "Bhopal",
        languages: ["Hindi", "English"],
        places: ["Bhopal", "Indore", "Ujjain"],
        age: 36
    },
    {
        id: "G018",
        name: "Divya Krishnan",
        nativePlace: "Kochi",
        languages: ["Malayalam", "English", "Tamil"],
        places: ["Kochi", "Alappuzha", "Munnar"],
        age: 32
    },
    {
        id: "G019",
        name: "Rajat Sharma",
        nativePlace: "Chandigarh",
        languages: ["Punjabi", "Hindi", "English"],
        places: ["Chandigarh", "Amritsar", "Ludhiana"],
        age: 38
    },
    {
        id: "G020",
        name: "Pooja Hegde",
        nativePlace: "Mangalore",
        languages: ["Kannada", "English", "Tulu"],
        places: ["Mangalore", "Udupi", "Gokarna"],
        age: 30
    },
    {
        id: "G021",
        name: "Vivek Rao",
        nativePlace: "Visakhapatnam",
        languages: ["Telugu", "English", "Hindi"],
        places: ["Visakhapatnam", "Araku Valley", "Borra Caves"],
        age: 35
    },
    {
        id: "G022",
        name: "Sneha Reddy",
        nativePlace: "Vijayawada",
        languages: ["Telugu", "English", "Hindi"],
        places: ["Vijayawada", "Guntur", "Amaravati"],
        age: 29
    },
    {
        id: "G023",
        name: "Alok Mishra",
        nativePlace: "Patna",
        languages: ["Hindi", "English", "Bhojpuri"],
        places: ["Patna", "Gaya", "Bodh Gaya"],
        age: 37
    },
    {
        id: "G024",
        name: "Meenakshi Sundaram",
        nativePlace: "Madurai",
        languages: ["Tamil", "English"],
        places: ["Madurai", "Rameswaram", "Kodaikanal"],
        age: 40
    },
    {
        id: "G025",
        name: "Ranbir Kapoor",
        nativePlace: "Shimla",
        languages: ["Hindi", "English", "Pahari"],
        places: ["Shimla", "Manali", "Dharamshala"],
        age: 33
    },
    {
        id: "G026",
        name: "Aditi Sen",
        nativePlace: "Guwahati",
        languages: ["Assamese", "English", "Bengali"],
        places: ["Guwahati", "Kaziranga", "Majuli"],
        age: 31
    },
    {
        id: "G027",
        name: "Farhan Ahmed",
        nativePlace: "Hyderabad",
        languages: ["Telugu", "Urdu", "English"],
        places: ["Hyderabad", "Warangal", "Nizamabad"],
        age: 36
    },
    {
        id: "G028",
        name: "Ritika Bhatia",
        nativePlace: "Amritsar",
        languages: ["Punjabi", "Hindi", "English"],
        places: ["Amritsar", "Jalandhar", "Ludhiana"],
        age: 28
    },
    {
        id: "G029",
        name: "Gopal Krishna",
        nativePlace: "Bhubaneswar",
        languages: ["Odia", "English", "Hindi"],
        places: ["Bhubaneswar", "Puri", "Konark"],
        age: 39
    },
    {
        id: "G030",
        name: "Nandini Patel",
        nativePlace: "Vadodara",
        languages: ["Gujarati", "Hindi", "English"],
        places: ["Vadodara", "Ahmedabad", "Rajkot"],
        age: 32
    },
    {
        id: "G031",
        name: "Rohan Dutta",
        nativePlace: "Shillong",
        languages: ["English", "Khasi", "Bengali"],
        places: ["Shillong", "Cherrapunji", "Dawki"],
        age: 34
    },
    {
        id: "G032",
        name: "Aishwarya Rai",
        nativePlace: "Mangalore",
        languages: ["Kannada", "English", "Hindi"],
        places: ["Mangalore", "Udupi", "Murudeshwar"],
        age: 30
    },
    {
        id: "G033",
        name: "Kabir Singh",
        nativePlace: "Dehradun",
        languages: ["Hindi", "English", "Garhwali"],
        places: ["Dehradun", "Mussoorie", "Rishikesh"],
        age: 35
    },
    {
        id: "G034",
        name: "Zoya Khan",
        nativePlace: "Lucknow",
        languages: ["Hindi", "Urdu", "English"],
        places: ["Lucknow", "Ayodhya", "Varanasi"],
        age: 29
    },
    {
        id: "G035",
        name: "Arjun Nair",
        nativePlace: "Kottayam",
        languages: ["Malayalam", "English", "Tamil"],
        places: ["Kottayam", "Kumarakom", "Thekkady"],
        age: 37
    },
    {
        id: "G036",
        name: "Lalita Kumari",
        nativePlace: "Ranchi",
        languages: ["Hindi", "English", "Santhali"],
        places: ["Ranchi", "Jamshedpur", "Deoghar"],
        age: 33
    },
    {
        id: "G037",
        name: "Vinay Pathak",
        nativePlace: "Nagpur",
        languages: ["Marathi", "Hindi", "English"],
        places: ["Nagpur", "Amravati", "Chandrapur"],
        age: 38
    },
    {
        id: "G038",
        name: "Deepa Menon",
        nativePlace: "Thrissur",
        languages: ["Malayalam", "English", "Tamil"],
        places: ["Thrissur", "Guruvayur", "Athirappilly"],
        age: 31
    },
    {
        id: "G039",
        name: "Rajdeep Singh",
        nativePlace: "Jalandhar",
        languages: ["Punjabi", "Hindi", "English"],
        places: ["Jalandhar", "Amritsar", "Pathankot"],
        age: 36
    },
    {
        id: "G040",
        name: "Sunita Rao",
        nativePlace: "Mysuru",
        languages: ["Kannada", "English", "Hindi"],
        places: ["Mysuru", "Coorg", "Chikmagalur"],
        age: 34
    },
    {
        id: "G041",
        name: "Imran Qureshi",
        nativePlace: "Aligarh",
        languages: ["Hindi", "Urdu", "English"],
        places: ["Aligarh", "Agra", "Mathura"],
        age: 32
    },
    {
        id: "G042",
        name: "Anita Desai",
        nativePlace: "Panaji",
        languages: ["Konkani", "English", "Hindi"],
        places: ["Panaji", "Calangute", "Dudhsagar Falls"],
        age: 29
    },
    {
        id: "G043",
        name: "Manoj Tiwari",
        nativePlace: "Varanasi",
        languages: ["Hindi", "Bhojpuri", "English"],
        places: ["Varanasi", "Allahabad", "Mirzapur"],
        age: 39
    },
    {
        id: "G044",
        name: "Radhika Apte",
        nativePlace: "Pune",
        languages: ["Marathi", "English", "Hindi"],
        places: ["Pune", "Kolhapur", "Nashik"],
        age: 35
    },
    {
        id: "G045",
        name: "Surya Prakash",
        nativePlace: "Coimbatore",
        languages: ["Tamil", "English", "Malayalam"],
        places: ["Coimbatore", "Pollachi", "Ooty"],
        age: 33
    },
    {
        id: "G046",
        name: "Nisha Sharma",
        nativePlace: "Jammu",
        languages: ["Dogri", "Hindi", "English"],
        places: ["Jammu", "Katra", "Patnitop"],
        age: 30
    },
    {
        id: "G047",
        name: "Prakash Jha",
        nativePlace: "Muzaffarpur",
        languages: ["Hindi", "Maithili", "English"],
        places: ["Muzaffarpur", "Patna", "Bodh Gaya"],
        age: 41
    },
    {
        id: "G048",
        name: "Shalini Menon",
        nativePlace: "Kozhikode",
        languages: ["Malayalam", "English", "Hindi"],
        places: ["Kozhikode", "Wayanad", "Bekal"],
        age: 28
    },
    {
        id: "G049",
        name: "Ajay Devgan",
        nativePlace: "Indore",
        languages: ["Hindi", "English"],
        places: ["Indore", "Ujjain", "Mandu"],
        age: 37
    },
    {
        id: "G050",
        name: "Ravi Verma",
        nativePlace: "Bhopal",
        languages: ["Hindi", "English"],
        places: ["Bhopal", "Indore", "Gwalior"],
        age: 34
    }
    ];
let memberCount = 0;

// Function to get guide ID from URL
function getGuideIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('guideId');
}

function loadGuideDetails() {
    const guideId = getGuideIdFromUrl();
    const guide = guides.find(g => g.id === guideId);
    
    if (guide) {
        const guideDetailsHtml = `
            <h3>${guide.name}</h3>
            <p>ID: ${guide.id}</p>
            <p>Native Place: ${guide.nativePlace}</p>
            <p>Languages: ${guide.languages.join(', ')}</p>
            <p>Places: ${guide.places.join(', ')}</p>
            <p>Age: ${guide.age}</p>
            <p>Rating: ${guide.rating} ★</p>
            <p>Experience: ${guide.experience} years</p>
        `;
        document.getElementById('guideDetails').innerHTML = guideDetailsHtml;
    } else {
        document.getElementById('guideDetails').innerHTML = '<p>Guide not found.</p>';
    }
}

// Add a new member form
document.getElementById('addMemberBtn').addEventListener('click', function() {
    memberCount++;
    const memberHtml = `
        <div class="member-details">
            <h4>Member ${memberCount}</h4>
            <label for="name${memberCount}">Name:</label>
            <input type="text" id="name${memberCount}" name="name${memberCount}" required>
            
            <label for="age${memberCount}">Age:</label>
            <input type="number" id="age${memberCount}" name="age${memberCount}" required>
            
            <label for="gender${memberCount}">Gender:</label>
            <select id="gender${memberCount}" name="gender${memberCount}" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </div>
    `;
    document.getElementById('memberDetails').insertAdjacentHTML('beforeend', memberHtml);
    updatePrice();
});

// Update price by fetching from an API
// Function to update price by fetching from API
function updatePrice() {
    const numTravelers = parseInt(document.getElementById('numTravelers').value) || 0;
    const placesToVisit = document.getElementById('placesToVisit').value;

    if (!placesToVisit || numTravelers === 0) {
        document.getElementById('totalPrice').textContent = 0;
        return; // Wait until valid inputs are provided
    }

    // Simulate an API call with a mock response
    console.log(`Fetching price for ${numTravelers} travelers to ${placesToVisit}`);

    // Mock API call using setTimeout to simulate network delay
    setTimeout(() => {
        const mockApiResponse = {
            price: numTravelers * 100 // Example calculation, $100 per traveler
        };

        console.log('API Response:', mockApiResponse);

        // Update price based on mock API response
        const totalPrice = mockApiResponse.price;
        document.getElementById('totalPrice').textContent = totalPrice;

    }, 500); // Simulated delay of 0.5 seconds
}

// Update price when number of travelers or places to visit change
document.getElementById('numTravelers').addEventListener('change', updatePrice);
document.getElementById('placesToVisit').addEventListener('input', updatePrice);

// Load guide details when the page loads
window.addEventListener('load', loadGuideDetails);

// Submit booking form
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Booking submitted successfully!');
});