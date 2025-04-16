// Simple API handler for Netlify Functions
exports.handler = async function(event, context) {
  // Parse the path from the URL
  const path = event.path.replace('/.netlify/functions/api', '');
  
  // Basic routing
  if (path === '/visitors/increment') {
    // Simulate visitor increment
    return {
      statusCode: 200,
      body: JSON.stringify({ count: Math.floor(1000 + Math.random() * 100) })
    };
  }
  
  if (path === '/flash-news') {
    // Sample flash news data
    return {
      statusCode: 200,
      body: JSON.stringify([
        { 
          id: 1, 
          text: "Admissions open for 2023-24 academic year", 
          link: "https://jsspwmys.org/admissions", 
          active: true 
        },
        { 
          id: 2, 
          text: "National level technical symposium on May 15th", 
          link: "https://jsspwmys.org/events", 
          active: true 
        },
        { 
          id: 3, 
          text: "Congratulations to our students for winning NASSCOM hackathon", 
          link: "https://jsspwmys.org/achievements", 
          active: true 
        },
        { 
          id: 4, 
          text: "New Computer Science lab inaugurated with latest technologies", 
          link: "https://jsspwmys.org/facilities", 
          active: true 
        }
      ])
    };
  }
  
  if (path === '/faculty') {
    // Sample faculty data
    return {
      statusCode: 200,
      body: JSON.stringify([
        {
          id: 1,
          name: "Dr. K Sudha Kumari",
          designation: "Principal",
          department: "Administration",
          image: "/assets/prin-CpfCVlfu.jpg",
          profile: "Dr. K Sudha Kumari is an experienced academician with over 20 years of experience in technical education and administration."
        },
        {
          id: 2,
          name: "Dr. Dhananjaya K.B.",
          designation: "HOD",
          department: "Computer Science",
          image: "/assets/dhananjaya-BjT5GZac.jpg",
          profile: "Dr. Dhananjaya K.B. has extensive experience in Computer Science education and research, specializing in data science and AI."
        }
      ])
    };
  }
  
  if (path === '/events') {
    // Sample events data
    return {
      statusCode: 200,
      body: JSON.stringify([
        {
          id: 1,
          title: "Annual Day Celebration",
          description: "Annual day celebrations featuring cultural performances by students.",
          date: "2023-03-25T09:00:00Z",
          location: "Main Auditorium",
          image: "/assets/bg1-BQndqFDh.jpg",
          active: true
        },
        {
          id: 2,
          title: "Technical Symposium",
          description: "National level technical symposium with competitions and workshops.",
          date: "2023-05-15T10:00:00Z",
          location: "Engineering Block",
          image: "/assets/bg2-CYsNLTmQ.jpg",
          active: true
        }
      ])
    };
  }
  
  if (path === '/contact' && event.httpMethod === 'POST') {
    // Simulate contact form submission
    try {
      const body = JSON.parse(event.body);
      
      // Log the contact form data (since we can't send emails in this simple function)
      console.log('Contact form submission:', body);
      
      return {
        statusCode: 201,
        body: JSON.stringify({
          message: 'Contact message submitted successfully',
          contactMessage: {
            id: 123,
            name: body.name,
            email: body.email,
            subject: body.subject,
            message: body.message,
            createdAt: new Date().toISOString(),
            read: false
          }
        })
      };
    } catch (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid request body' })
      };
    }
  }
  
  // For any other route or method
  return {
    statusCode: 404,
    body: JSON.stringify({ message: 'Not found' })
  };
};